import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";
import Pircture from "../components/Pircture";

const Homepage = () => {
  const [page, setpage] = useState(1);
  const [data, setdata] = useState(null);
  const [input, setinput] = useState("");
  const [currentInput, setCurrentInput] = useState("");

  const auth = process.env.REACT_APP_API_KEY;
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?page=1&per_page=15&query=${input}`;

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setdata(result.data.photos);
    setCurrentInput(input);
  };

  const morePicture = async () => {
    let newURL;
    setpage(page + 1);
    if (currentInput === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?page=${page + 1}&per_page=15&query=${currentInput}`;
    }
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setdata(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        setinput={setinput}
        search={() => {
          search(searchURL);
        }}
      />
      <div className="pictures">
        {data &&
          data.map((data, index) => {
            return <Pircture key={index} data={data} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>more</button>
      </div>
    </div>
  );
};
export default Homepage;
