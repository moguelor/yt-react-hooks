import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  Profiler,
} from "react";
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

  /** useMemo */
  // const filteredData = useMemo(
  //   () => (term ? data.filter((item) => item.title.indexOf(term) > -1) : data),
  //   [term, data]
  // );

  const filteredData = term
    ? data.filter((item) => item.title.indexOf(term) > -1)
    : data;

  /********************/

  /** useCallback */
  // const handleClickButtonLove = useCallback(() => {
  //   setLoveCounter(loveCounter + 1);
  // }, [loveCounter]);

  const handleClickButtonLove = () => {
    setLoveCounter(loveCounter + 1);
  };
  /****************/

  // const handleClickButtonHate = useCallback(() => {
  //   setHateCounter(hateCounter + 1);
  // }, [hateCounter]);

  const handleClickButtonHate = () => {
    setHateCounter(hateCounter + 1);
  };

  return (
    <Profiler
      id="profiler"
      onRender={(id, phase, actualDuration) => {
        console.group(`Time on ${phase}`);
        console.log("actualDuration", actualDuration);
        console.groupEnd();
      }}
    >
      <div>
        <h3>
          Posts{" "}
          <LikeButton handleClick={handleClickButtonLove} times={loveCounter} /> {" "}
          <HateButton handleClick={handleClickButtonHate} times={hateCounter} />
        </h3>
        <Input
          handleChange={handleChange}
          placeholder="Search..."
          value={term}
        />
        <Post data={filteredData}/>
      </div>
    </Profiler>
  );
};

export default HookComponent;
