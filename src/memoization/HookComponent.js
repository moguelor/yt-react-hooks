import React, { useState, useEffect, useMemo, useCallback } from "react";
import { API_URL } from "./constants";
import Button from "./components/Button";
import Posts from "./components/Posts";
import { Input } from "../components";

const HookComponent = () => {
  // Call api Service
  const [data, setData] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(API_URL);
      setData(await response.json());
    };
    callApi();
  }, []);

  // Filter posts.
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const filteredData = useMemo(
    () => data.filter((item) => item.title.indexOf(term) > -1),
    [data, term]
  );

  // Counters
  const [loveCounter, setLoveCounter] = useState(0);
  const [hateCounter, setHateCounter] = useState(0);

  const handleClickButtonLove = useCallback(() => {
    setLoveCounter(loveCounter + 1);
  }, [loveCounter]);

  const handleClickButtonHate = useCallback(() => {
    setHateCounter(hateCounter + 1);
  }, [hateCounter]);

  return (
    <div>
      <h3>
        Posts{" "}
        <Button
          icon="heart"
          times={loveCounter}
          handleClick={handleClickButtonLove}
        />
        <Button
          icon="angry"
          times={hateCounter}
          handleClick={handleClickButtonHate}
        />
      </h3>
      <Input handleChange={handleChange} placeholder="Search..." value={term} />
      <Posts data={filteredData} />
    </div>
  );
};

export default HookComponent;
