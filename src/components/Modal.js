import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const Modal = ({ downloadUrl }) => {
  //console.log(downloadUrl);
  const handleDownload = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="absolute shadow-2xl rounded-md h-[165px] w-full bg-[#FFFFFF] z-50">
      <div className="flex justify-between p-2 font-semibold">
        <div className="headings">Quality</div>
        <div className="headings">Link</div>
      </div>
      <hr />
      {downloadUrl.map((item, index) => {
        return (
          <>
            <div
              key={index}
              className="flex px-2 justify-between font-semibold hover:bg-[#F6F6F6]"
            >
              <div className="headings">{item.quality}</div>
              <a
                onClick={handleDownload}
                href={item.link}
                className="headings cursor-pointer"
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default Modal;
