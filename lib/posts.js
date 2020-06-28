import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getFormattedDate } from "./helpers";

const postsDirectory = path.join(process.cwd(), "posts");

function updateFrontmatterDate(data) {
  return {
    ...data,
    date: getFormattedDate(data.date),
  };
}

export function getSortedPosts() {
  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .map((filename) => {
      const id = filename.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents);

      const frontmatter = updateFrontmatterDate(data);

      return {
        id,
        frontmatter,
      };
    })
    .sort((a, b) => new Date(a.frontmatter.date) - new Date(b.frontmatter.date))
    .reverse();

  return posts;
}

export function getPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getPostById(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const frontmatter = updateFrontmatterDate(data);

  return { frontmatter, content };
}
