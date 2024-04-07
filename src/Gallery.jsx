import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
console.log(import.meta.env);
const Gallery = () => {
  const { searchText } = useGlobalContext();

  const { isError, isLoading, error, data } = useQuery({
    queryKey: ["searchImages", searchText],
    queryFn: async () => {
      const { data } = await axios.get(url + searchText);
      return data;
    },
  });

  //console.log(data.results);
  if (error) {
    return <h1>Error Occurred: ${error}</h1>;
  }
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <section className="image-container">
      {data.results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};

export default Gallery;
