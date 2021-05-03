import React from "react";

const Loader = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.loadingMessage}</div>
    </div>
  );
};

Loader.defaultProps = {
  loadingMessage: "Loading...",
};

export default Loader;
