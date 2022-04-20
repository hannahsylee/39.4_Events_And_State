import React, { useState } from "react";
import Box from "./Box"
import {    getRandom   } from "./random"

function ColorBoxes(props) {
    const [boxes, setBoxes] = useState(Array.from({ length: props.numBoxes }, () => getRandom(props.colors)))

    /** it should select a random box */ 
    /** it should change the background color of that random box to a new color from the possible colors list.*/ 
    const handleClick = evt => {
        let idx = Math.floor(Math.random() * props.numBoxes);
        setBoxes(boxes => {
            let boxCopy = [...boxes];
            boxCopy[idx] = getRandom(props.colors);
            return boxCopy;
        });
    };

    const colorBoxes = boxes.map((color, i) => <Box key={i} color={color} />);

    return (
        <div>
            <section className="ColorBoxes">
                {colorBoxes}
            </section>
            <button onClick={handleClick}>Change</button>
        </div>

    );
}
  
ColorBoxes.defaultProps = {
    numBoxes: 16,
    colors: ["maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aquamarine", "chartreuse", "coral", "cornflowerblue", "crimson", "cyan", "darkcyan", "darkmagenta", "darkorchid"]
};

export default ColorBoxes;

