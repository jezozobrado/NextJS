"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import axios from "axios";

const PromptCardList = ({ data, handleTagClick }) => {
  if (data.length === 0) return;
  console.log("data is", data.length, data);
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [post, setPost] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    axios
      .get("/api/prompt")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>

      <PromptCardList data={post} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
