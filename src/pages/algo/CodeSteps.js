import React from "react";
import { MainCard } from "../../components/ui/Cards";
import "./CodeSteps.css";
function CodeSteps(props) {
  return (
    <MainCard>
      <div className=" max-h-[60vh] min-h-[55vh] max-w-[45vw] overflow-scroll">
        <div className="clearfix">
          <h1 className="text-center">Algorithm Code</h1>
          <br></br>
          <div className="grid-rows-12 grid grid-cols-12">
            <span
              class="material-symbols-rounded cols-start-2 m-auto w-fit justify-center p-0 text-center
            text-2xl text-red-700"
            >
              east
            </span>
            {props.steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className=" col-start-2 row-span-1 justify-start"
                >
                  <code className=" whitespace-pre">{step}</code>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainCard>
  );
}

export default CodeSteps;
