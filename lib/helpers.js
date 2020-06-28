import siteConfig from "../site.config";

export function getSiteMetadata() {
  return siteConfig.siteMetadata;
}

export function getFormattedDate(date) {
  const options = { year: "numeric", month: "2-digit", day: "numeric" };
  const formattedDate = date.toLocaleDateString("de-DE", options);

  return formattedDate;
}
