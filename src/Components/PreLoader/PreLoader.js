import React from "react";
import LoadingIcon from "../../Images/ICON/preloader.gif";
const PreLoader = (props) => {
  return (
    <div
      className="loading__image"
      style={{
        display: props.showPreloader,
        textAlign: "center",
        marginBottom: "100px",
        marginTop: "100px",
      }}
    >
      <img src={LoadingIcon} alt="" />
    </div>
  );
};

export default PreLoader;
