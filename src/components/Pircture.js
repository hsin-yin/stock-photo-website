import React from "react";

const Pircture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt={data.alt} />
      </div>
      <p>
        在此下載圖片：{" "}
        <a target="_blank" rel="noreferrer" href={data.src.large}>
          按一下
        </a>
      </p>
    </div>
  )
};
export default Pircture;
