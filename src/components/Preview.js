import React from "react";

const Preview = React.forwardRef((props, ref) => {
  return <iframe ref={ref} width="100%" height="100%" title="review"></iframe>;
});

export default Preview;
