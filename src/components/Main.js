import React, { useEffect, useState } from "react";
import Info from "./Info";
import SearchInfo from "./SearchInfo";
import ReactAudioPlayer from "react-audio-player";
const mainUrl = "https://saavn.me/search/songs?query=";

const Main = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState([]);
  const [isHover, setIsHover] = useState(-1);
  const [song, setSong] = useState("");

  const fetchData = async () => {
    if (query) {
      setData([]);
      const response = await fetch(`${mainUrl}${query}`);
      const data = await response.json();

      setQueryData(data.results);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchTrending = async () => {
    const response = await fetch(`https://saavn.me/home`);
    const data = await response.json();
    setData(data.results.new_trending);
  };
  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div className="container mx-auto h-[calc(100vh-64px)]">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="title text-[50px] text-textPrimary whitespace-nowrap font-bold mb-5">
          Download Your Favorite Song
        </div>

        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search Song"
          type="text"
          className="w-[50%] h-14 rounded-full border border-[#E9E9E9] text-center focus:border-none"
        />
      </div>
      <div className="trending flex flex-col space-y-5">
        <h3 className="text-[20px] font-bold float-left mt-5">
          Trending on Saavn
        </h3>
        <ReactAudioPlayer src={song} autoPlay controls />
        <div className="info grid grid-cols-6 gap-5 text-center">
          {data.map((item) => {
            return <Info key={item.id} {...item} />;
          })}
          {query &&
            queryData.map((item, index) => {
              return <SearchInfo key={item.id} {...item} song={setSong} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Main;
