import ReactMarkdown from "react-markdown/with-html";
import RemarkMathPlugin from "remark-math";
import { BlockMath, InlineMath } from "react-katex";

export default function ParsedMarkdown({ content }) {
  return (
    <ReactMarkdown
      escapeHtml={false}
      source={content}
      plugins={[RemarkMathPlugin]}
      renderers={{
        math: ({ value }) => <BlockMath>{value}</BlockMath>,
        inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>,
      }}
    />
  );
}
