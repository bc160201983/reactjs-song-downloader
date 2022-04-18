import React, { useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import Modal from "./Modal";
const Info = (props) => {
  const { id, name } = props.album;
  const { image, artist, downloadUrl } = props;
  const newImage = image[2]?.link;
  const songLink = downloadUrl[4]?.link;
  const [isHover, setIsHover] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="infowrapper relative">
        <div
          className="image-hover relative"
          onMouseEnter={() => setIsHover(id)}
          onMouseLeave={() => setIsHover(-1)}
          onClick={() => props.song(songLink)}
        >
          <img
            src={newImage}
            alt={name}
            width="250"
            height="250"
            className="rounded-lg img-shadow"
          />
          <BsFillPlayCircleFill
            className={`${isHover === id && "icon-play"} hidden`}
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-start w-[50%]">
            <div className="title text-sm whitespace-nowrap font-bold truncate mt-2">
              {name}
            </div>
          </div>
          <div
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="download-icon flex justify-end cursor-pointer w-[50%]"
          >
            <AiOutlineDownload className="h-6 w-6" />
          </div>
        </div>
        {isModalOpen && <Modal downloadUrl={downloadUrl} />}
      </div>
    </>
  );
};

export default Info;
