"use client";
import React, { useState } from "react";

type Props = {};

function TimeUntilNewAffixes({}: Props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  if (!clicked) {
    return (
      <div>
        <button onClick={handleClick}>Show Time Until New Affixes</button>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 8 } as React.CSSProperties}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 8 } as React.CSSProperties}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 8 } as React.CSSProperties}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 8 } as React.CSSProperties}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
}

export default TimeUntilNewAffixes;
