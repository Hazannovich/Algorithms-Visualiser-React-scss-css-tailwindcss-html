import React from "react";
import { MainCard } from "../../components/ui/Cards";
function AlgoDefinition(props) {
  return (
    <>
      <code className="text-xl max-sm:text-base">
        {props.info.map((item, index) => (
          <div className="" key={index}>
            {`${item}`}
            <br></br>
          </div>
        ))}
      </code>
    </>
  );
}

export default AlgoDefinition;
