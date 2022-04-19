import React, { useEffect, useState } from "react";
import Info from "./Info";
import SearchInfo from "./SearchInfo";
import ReactAudioPlayer from "react-audio-player";
import Spinner from "./Spin-1s-200px.svg";
const mainUrl = "https://saavn.me/search/songs?query=";

const Main = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState([]);
  const [isHover, setIsHover] = useState(-1);
  const [song, setSong] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (query) {
      setLoading(true);
      const response = await fetch(`${mainUrl}${query}`);
      const data = await response.json();

      setQueryData(data.results);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchTrending = async () => {
    setLoading(true);

    const response = await fetch(`https://saavn.me/home`);
    const data = await response.json();
    setData(data.results.new_trending);
    setLoading(false);
  };
  useEffect(() => {
    if (query === "") {
      fetchTrending();
    }
  }, []);

  return (
    <div className="container mx-auto h-[calc(100vh-64px)] relative">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="title md:text-[50px] text-[25px] text-textPrimary whitespace-nowrap font-bold mb-5">
          Download Your Favorite Song
        </div>

        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search Song"
          type="text"
          className="xl:w-[50%] w-full h-14 rounded-full border border-[#E9E9E9] text-center focus:border-none"
        />
      </div>

      <div className="trending flex flex-col space-y-5">
        <h3 className="text-[20px] font-bold float-left mt-5">
          {query ? `Search results for "${query}"` : "Trending on Saavn"}
        </h3>
        {/* <ReactAudioPlayer src={song} autoPlay controls /> */}
        {loading && (
          <div className="icon-loading">
            <img src={Spinner} alt="loading" width="100" height="100" />
          </div>
        )}
        <div className="info grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 text-center">
          {!query &&
            data.map((item) => {
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
