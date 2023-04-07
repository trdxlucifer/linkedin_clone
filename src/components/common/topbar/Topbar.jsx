import React, { useState } from "react";
import "./topbar.scss";
import Linkedin from "../../../assets/linkedin.png";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import SearchUser from "../SearchUser/SearchUSer";
import { BsBriefcase } from "react-icons/bs";
import User from "../../../assets/user.png";
import { useNavigate } from "react-router-dom";
import ProfilePopup from "../ProfilePop/ProfilePop";

const Topbar = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  let navigate = useNavigate();

  const goTo = (route) => {
    navigate(route);
  };
  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };
  return (
    <div className="topbar-main">
      {popupVisible ? (
        <div className="popup-position">
          <ProfilePopup />
        </div>
      ) : (
        <></>
      )}
      |
      <img src={Linkedin} alt="logo" 
      className="linkedin-logo" 
      onClick={() => goTo("/")}
      />
      {isSearch ? (
        (<SearchUser 
          setIsSearch={setIsSearch}
          setSearchInput={setSearchInput}/>)
      ) : (
        <div className="react-icons">
          <AiOutlineSearch
            size={25}
            className="react-icon"
            onClick={() => setIsSearch(true)}
          />
          <AiOutlineHome
            size={30}
            className="react-icon"
            onClick={() => goTo("/")}
          />
          <AiOutlineUserSwitch
            size={30}
            className="react-icon"
            onClick={() => goTo("/connection")}
          />
          <BsBriefcase size={30} className="react-icon" />
          <AiOutlineMessage size={30} className="react-icon" />
          <AiOutlineBell size={30} className="react-icon" />
        </div>
      )}
      <img
        src={User}
        alt="userIcon"
        className="user-logo"
        onClick={displayPopup}
      />
    </div>
  );
};

export default Topbar;
