import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";
import "./App.css";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleCLick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>app de gatos</h1>
      <button onClick={handleCLick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first word for ${fact}`}
        />
      )}
    </main>
  );
}
