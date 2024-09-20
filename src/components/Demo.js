import React, { useMemo, useState } from "react";
import { findNthPrime } from "../helper/prime";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={`m-4 p-2 w-96 h-96 border border-black ${
        isDarkTheme && "bg-gray-900"
      }`}
    >
      <div className="flex justify-end mb-4">
        <button
          className={`${
            isDarkTheme ? "bg-white text-black" : "bg-black text-white "
          } px-2 py-1 rounded-full`}
          onClick={() => setIsDarkTheme((prev) => !prev)}
        >
          {isDarkTheme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2 py-1 rounded-md"
          placeholder="hii"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className={`${isDarkTheme && "text-white"}`}>
        <h1>nth prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
