import React, { useState } from "react";
import getYouTubeID from "get-youtube-id";
import CodeBlock from "@theme/CodeBlock";

export default function GetYoutubeId() {
  const [url, setUrl] = useState("");

  return (
    <>
      <input
        value={url}
        placeholder="Enter your youtube link"
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        style={{ marginBottom: "12px", padding: "8px", width: "50%" }}
      />
      <CodeBlock language="bash" title="Youtube ID" showLineNumbers={false}>
        {getYouTubeID(url)}
      </CodeBlock>
    </>
  );
}
