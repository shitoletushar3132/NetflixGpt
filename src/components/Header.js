import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { SUGGESTIONQUERIES_API } from "../constants/api.constant";
import { IoIosSearch } from "react-icons/io";
import { cacheResults } from "../store/searchSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // api call
    const timer = setTimeout(() => {
      if (searchCache[query]) {
        setSuggestions(searchCache[query]);
      } else {
        getQuerySuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const getQuerySuggestions = async () => {
    const data = await fetch(SUGGESTIONQUERIES_API + query);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache
    dispatch(cacheResults({ [query]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="px-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-3">
        <div onClick={toggleMenuHandler} className="cursor-pointer">
          <RxHamburgerMenu size={24} />
        </div>
        <div className="w-28">
          <a href="/">
            <img
              alt="youtube_logo"
              src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png"
            />
          </a>
        </div>
      </div>
      <div className="relative flex w-[40%] flex-col">
        <div className="flex w-full">
          <input
            type="text"
            className="w-full border border-gray-500 px-3 py-1.5 font-semibold rounded-l-full outline-none"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setTimeout(() => setShowSuggestion(false), 300)} // Delay hiding suggestions
          />

          <button
            className="border border-gray-500 rounded-r-full outline-none px-1.5 bg-gray-200"
            onClick={() => {
              if (query.trim() !== "") {
                navigate(`/results?search=${query}`);
              }
            }}
          >
            <IoSearch size={24} />
          </button>
        </div>
        {showSuggestions && suggestions.length != 0 && (
          <div className="absolute top-12 bg-white w-full p-1 px-4 rounded-lg shadow-lg ">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  onClick={() => {
                    setSearch(s);
                    // console.log(search);
                    navigate(`/results?search=${s}`);
                  }}
                  className="cursor-pointer rounded-lg flex items-center gap-1 font-semibold px-2 hover:bg-gray-200"
                >
                  <IoIosSearch /> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <FaUserCircle size={28} title="user" />
      </div>
    </div>
  );
};

export default Header;
