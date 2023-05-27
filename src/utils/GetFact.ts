const RANDOM_FACT = `https://catfact.ninja/fact`;
export const UseFact = async () => {
  const res = await fetch(RANDOM_FACT);
  const response = await res.json();
  const { fact } = response;
  return fact;
};
