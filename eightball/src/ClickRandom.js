import React, { useState } from "react";
import { getRandom } from "./random";

/** A random number that changes. */
function ClickRandom(props) {
  const max = props.maxNum;
  const [num, setNum] = useState(getRandom(max));

  return (
    <i onClick={() => setNum(getRandom(max))}>
      Click Random: {num}
    </i>
  );
}

export default ClickRandom;