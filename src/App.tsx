import "./App.css";
import { useCat } from "./hooks/useCat";
import { useFact } from "./hooks/useFact";
import Skeleton from "@mui/material/Skeleton";

import Button from "@mui/material/Button";
import { Suspense } from "react";
function App() {
  const { fact, handleFact } = useFact();
  const { cat } = useCat({ fact });
  const handleClick = async () => {
    await handleFact();
  };

  return (
    <main>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: "2em",
        }}
      >
        <h1>App Cats</h1>
        <Button variant="contained" onClick={handleClick}>
          New Fact{" "}
        </Button>
      </header>

      <div>
        <h2>Fact:</h2>
        {fact && <span>{fact}</span>}
      </div>
      <div>
        <h2>Image with word:</h2>
        <Suspense fallback={<Skeleton animation="wave" variant="rectangular" width={320} height={320} />}>
        <img src={cat}></img>
        </Suspense>

      </div>
    </main>
  );
}

export default App;
