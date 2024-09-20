import React from "react";

const Demo2 = () => {
  let x = 10;
  console.log(x);
  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
          className="bg-green-300 px-2 m-4"
        >
          Increase x
        </button>
        <span className="font-bold">let {x}</span>
      </div>
    </div>
  );
};

export default Demo2;
