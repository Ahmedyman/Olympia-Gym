import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { Button } from "bootstrap";
import Buttons from "./Buttons";
// import Fanction from "../utils/fanctions";
// import Functions from '../utils/functions.js'
import { SCHEMES, WORKOUTS } from "../utils/generate.js";

function Header(props) {
  const { index, title, description } = props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}



export default function Generator(props) {
  const {
    muscles,
    setMuscles,
    poison,
    setPoison,
    goal,
    setGoals,
    updateWorkout,
  } = props;
  const [showModel, setShowModel] = useState(false);
  window.location.href='#accept'


  function musclesUpdate(musclesGp) {

    if (muscles.includes(musclesGp)) {
      setMuscles(muscles.filter((val) => val !== musclesGp));
      return;
    }

    if (muscles.length > 3) {
      return;
    }
    if (poison !== "individual") {
      setMuscles([musclesGp]);
      setShowModel(false);
      return;
    }
    if (muscles.includes(musclesGp)) {
      setMuscles(muscles.filter((val) => val !== musclesGp));
      return;
    }

    setMuscles([...muscles, musclesGp]);
    if (muscles.length === 3) {
      setShowModel(false);
    }
  }

  function toggleModel() {
    setShowModel(!showModel);
  }

  return (
    <SectionWrapper
      header={"Generate Your Workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure."}
      />
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        {Object.keys(WORKOUTS).map((type, typeIndex) => (
          <button
            onClick={() => {
              setMuscles([]);
              setPoison(type);
            }}
            key={typeIndex}
            className={
              "bg-slate-950 border border-blue-400 py-4 rounded-lg duration-200 hover:border-blue-600 " +
              (type === poison ? "border-blue-600 " : "border-blue-400 ")
            }
          >
            <p className="text-center capitalize">{type.replaceAll("_", " ")}</p>
          </button>
        ))}
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />
      <div className="bg-slate-950 border flex flex-col border-solid border-blue-400 rounded-lg">
        <button
          onClick={toggleModel}
          className="relative p-3 flex items-center justify-center"
        >
          <p className="capitalize">
            {muscles.length == 0 ? "Select muscle groups" : muscles.join(",")}
          </p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModel && (
          <div className="flex flex-col">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((musclesGp, musclesIndex) => (
              <button
                onClick={() => musclesUpdate(musclesGp)}
                key={musclesIndex}
                className={
                  "hover:text-blue-400 duration-200 " +
                  (muscles.includes(musclesGp) ? "text-blue-400" : " ")
                }
              >
                <p className="uppercase">{musclesGp.replaceAll("_", " ")}</p>
              </button>
            ))}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => (
          <button
            key={schemeIndex}
            onClick={() => setGoals(scheme)}
            className={
              "bg-slate-950 border border-blue-400 py-4 rounded-lg duration-200 hover:border-blue-600 " +
              (scheme === goal ? "border-blue-600" : "border-blue-400")
            }
          >
            <p className="text-center capitalize">{scheme.replaceAll("_", " ")}</p>
          </button>
        ))}
      </div>
      {/* <button  className="px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950  border-blue-400 border-solid blueShadwing duration-200"><p>Furmulate</p></button> */}
      <Buttons func={updateWorkout} text={"Furmulate"}></Buttons>
    </SectionWrapper>
  );
}
