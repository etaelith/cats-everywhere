import { useEffect, useState } from "react";
export type Fact = {
  fact: string;
};
export const useCat = ({ fact }: Fact) => {
  const [cat, setCat] = useState("");
  useEffect(() => {
    if (!fact) return;
    const res = fact.split(" ", 3).join(" ");
    fetch(`https://cataas.com/cat/says/${res}?width=320&height=320&color=red`)
      .then((response) => {
        const { url } = response;
        setCat(url);
      })
  }, [fact]);
  return { cat };
};
