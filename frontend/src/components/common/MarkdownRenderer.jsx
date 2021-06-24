// import styled from "styled-components";
// import ReactMarkdown from "react-markdown";
// import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const markdown = `
## 헤딩
**굵게**

일반 텍스트

\`\`\`
	코드 블럭
\`\`\`

*기울이기*
> 인용문
`;

const MarkdownRenderer = ({}) => {
	// const [value, setValue] = useState(markdown);
	return (
		<>
			{/* <MDEditor value={value} onChange={setValue} /> */}
			<MDEditor.Markdown source={markdown} />
		</>
	);
};

export default MarkdownRenderer;

// const MarkDownStyle = styled.div`
// 	font-size: 1rem;
// 	line-height: 2.5rem;
// `;
