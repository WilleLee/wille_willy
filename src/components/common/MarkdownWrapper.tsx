"use client";

import useMarkdown from "@/hooks/useMarkdown";
import React from "react";
import Markdown from "react-markdown";

type Props = {
  category: string;
  id: string;
};

const MarkdownWrapper = ({ category, id }: Props) => {
  const { markdown } = useMarkdown(category, id);
  return (
    <div className="markdown_wrapper">
      <Markdown>{markdown}</Markdown>
    </div>
  );
};

export default MarkdownWrapper;
