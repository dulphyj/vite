import { useState, useEffect } from "react";
const CAT_PREFIX_URL = "https://cataas.com";
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();
  const recoverImg = () => {
    //para 3 primeras palabras
    //const threeWords = fact.split(" ", 3).join(" ");
    //priemra palabra
    if (!fact) return;
    const firstWord = fact.split(" ")[0];
    return fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        return setImageUrl(url);
      });
  };
  // recuperar la imagen cada vez que tenemos cita nueva
  useEffect(() => {
    recoverImg();
  }, [fact]);
  return { imageUrl: `${CAT_PREFIX_URL}${imageUrl}` };
}
