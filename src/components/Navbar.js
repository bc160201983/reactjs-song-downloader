import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-[11px] h-[64px] border-b border-b-[#E9E9E9] items-center">
      <div className="left justify-center items-center flex h-full">
        <div className="logo pr-[15px] font-bold text-2xl">JioSaavn</div>
        <ul className="flex h-full justify-center items-center font-bold text-[15px] text-textPrimary">
          <li className="menu-item">Home</li>
          <li className="menu-item">Browse</li>
          <li className="menu-item">Upgrade</li>
        </ul>
      </div>
      {/* <div className="middle">search</div> */}
      <div className="justify-center items-center flex h-full font-bold text-[15px] text-textPrimary">
        <div className="menu-item">Login</div>
        <div className="menu-item">SignUp</div>
      </div>
    </div>
  );
};

export default Navbar;
