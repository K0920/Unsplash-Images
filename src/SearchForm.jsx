import React, { useState } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchText } = useGlobalContext();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value;
    console.log(searchTerm);
    if (!searchTerm) {
      return;
    }
    setSearchText(searchTerm);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={(e) => handleSearch(e)}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
