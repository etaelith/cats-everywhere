import { useEffect, useState } from "react";
import { UseFact } from "../utils/GetFact";

export const useFact =  () => {
  const [fact, setFacts] = useState();
  useEffect(() => {
    UseFact().then(setFacts);
  }, []);
  const handleFact =  () => {
    UseFact().then(newFact => setFacts(newFact))
  };
  return { fact: fact || "I like beer", handleFact };
};
