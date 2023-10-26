import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useMarkdown = (category: string, id: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [markdown, setMarkdown] = useState("");

  const getMarkdown = useCallback(async () => {
    if (!category || !id) return;
    setIsLoading(true);
    try {
      const url = `/docs/${category}/${id}.md`;
      const { data: resData } = await axios.get(url);
      setMarkdown(resData);
    } catch (error) {
      console.log(error);
      setMarkdown("");
    } finally {
      setIsLoading(false);
    }
  }, [category, id]);

  useEffect(() => {
    getMarkdown();
  }, [getMarkdown]);

  return {
    isLoading,
    markdown,
  };
};

export default useMarkdown;
