import React, { useState, useEffect } from "react";
import { API_URL } from "./constants";
import LikeButton from "./components/LikeButton";
import HateButton from "./components/HateButton";
import Post from "./components/Posts";
import { Input } from "../components";

const HookComponent = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [loveCounter, setLoveCounter] = useState(0);
  const [hateCounter, setHateCounter] = useState(0);

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(API_URL);
      setData(await response.json());
    };
    callApi();
  }, []);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const filteredData = term
    ? data.filter((item) => item.title.indexOf(term) > -1)
    : data;

  const handleClickButtonLove = () => {
    setLoveCounter(loveCounter + 1);
  };

  const handleClickButtonHate = () => {
    setHateCounter(hateCounter + 1);
  };

  return (
    <div>
      <h3>
        Posts{" "}
        <LikeButton handleClick={handleClickButtonLove} times={loveCounter} />{" "}
        <HateButton handleClick={handleClickButtonHate} times={hateCounter} />
      </h3>
      <Input handleChange={handleChange} placeholder="Search..." value={term} />
      <Post data={filteredData} />
    </div>
  );
};

export default HookComponent;
