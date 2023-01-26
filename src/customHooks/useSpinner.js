import React from "react";
import { ColorRing } from "react-loader-spinner";

const useSpinner = (props) => {
  return (
    <ColorRing
      visible={true}
      height={props.height}
      width={props.width}
      ariaLabel="blocks-loading"
      wrapperStyle={{
        width: "100%",
      }}
      wrapperClass="blocks-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
};

export default useSpinner;
