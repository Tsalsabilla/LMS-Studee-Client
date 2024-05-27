import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../Redux/auth/action";
import Menu from "../Menu/Menu";
import { Dropdown } from "antd";

import SidebarItem from "./SideBarItem"

import user from "../../Assets/useravatar.png";
import logo from "../../Assets/logo.png";

import { BiLogOut } from "react-icons/bi";
import { TbLayoutGridAdd } from "react-icons/tb";
import { LuLayoutGrid } from "react-icons/lu";
import { PiStudent, PiChalkboardTeacher } from "react-icons/pi";
import { GoChevronDown, GoTrophy, GoHome } from "react-icons/go";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineSchedule, AiOutlineRead, AiOutlinePlayCircle } from "react-icons/ai";
import { CgGames } from "react-icons/cg";
import { IoBulbOutline, IoExtensionPuzzleOutline } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";

import "./Navbar.css";

const Navbar = ({ children }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((store) => store.auth);
  if (!auth.data.isAuthenticated) {
    return navigate("/");
  }
  const {
    user: { userType, name, premium },
  } = useSelector((store) => store.auth.data);

  const [toggle, setToggle] = useState(true);

  const adminData = [
    { icon: <GoHome />, title: "Dashboard", address: "/home" },
    { icon: <RiAdminLine />, title: "Admin", address: "/admin" },
    { icon: <PiChalkboardTeacher />, title: "Tutors", address: "/tutor" },
    { icon: <PiStudent />, title: "Students", address: "/student" },
    { icon: <AiOutlineSchedule />, title: "Test", address: "/tests" },
    { icon: <AiOutlineRead />, title: "Lessons", address: "/lessons" },
    { icon: <TbLayoutGridAdd />, title: "Activities", childrens: [
      { icon: <AiOutlinePlayCircle />, title: "Videos", address: "/contents" },
      { icon: <IoExtensionPuzzleOutline />, title: "Initial Knowledge", address: "/doubts" },
      { icon: <IoBulbOutline />, title: "Final Knowledge", address: "/doubtsx" },
      { icon: <MdOutlineAssignment />, title: "Assignments", address: "/doubtsz" },
      { icon: <CgGames />, title: "Quiz", address: "/scratchs" },
    ]},
    { icon: <GoTrophy />, title: "Grades", address: "/leaderboard" },
  ];
  const studentData = [
    { icon: <GoHome />, title: "Dashboard", address: "/home" },
    { icon: <AiOutlineSchedule />, title: "Test", address: "/tests" },
    { icon: <AiOutlineRead />, title: "Lessons", address: "/lessons" },
    { icon: <TbLayoutGridAdd />, title: "Activities", childrens: [
      { icon: <AiOutlinePlayCircle />, title: "Videos", address: "/contents" },
      { icon: <IoExtensionPuzzleOutline />, title: "Initial Knowledge", address: "/doubts" },
      { icon: <IoBulbOutline />, title: "Final Knowledge", address: "/doubtsx" },
      { icon: <MdOutlineAssignment />, title: "Assignments", address: "/doubtsz" },
      { icon: <CgGames />, title: "Quiz", address: "/scratchs" },
    ]},
    { icon: <GoTrophy />, title: "Grades", address: "/leaderboard" },
  ];
  const tutorData = [
    { icon: <GoHome />, title: "Dashboard", address: "/home" },
    { icon: <AiOutlineSchedule />, title: "Test", address: "/tests" },
    { icon: <AiOutlineRead />, title: "Lessons", address: "/lessons" },
    { icon: <TbLayoutGridAdd />, title: "Activities", childrens: [
      { icon: <AiOutlinePlayCircle />, title: "Videos", address: "/contents" },
      { icon: <IoExtensionPuzzleOutline />, title: "Initial Knowledge", address: "/doubts" },
      { icon: <IoBulbOutline />, title: "Final Knowledge", address: "/doubtsx" },
      { icon: <MdOutlineAssignment />, title: "Assignments", address: "/doubtsz" },
      { icon: <CgGames />, title: "Quiz", address: "/scratchs" },
    ]},
    { icon: <GoTrophy />, title: "Grades", address: "/leaderboard" },
  ];

  const items = [
    {
      key: "1",
      label: <span onClick={() => handleLogout()}>Logout</span>,
    },
  ];

  const handleLogout = () => {
    dispatch(authLogout());
  };
  
  return (
    <>
      <div id="sidebar" className={toggle ? "hide" : ""}>
        <Link href="/" className="logo">
          <div className="logoBox">
            <img src={logo} alt="logo" />
            <LuLayoutGrid
              className="menuIconHidden"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </Link>

        <ul className="side-menu top">
          {userType === "Tutor"
            ? tutorData?.map((data, i) => {
              return (
                <SidebarItem key={i} item={data} />
              );
              })
            : ""}
          {userType === "Student"
            ? studentData?.map((data, i) => {
              return (
                <SidebarItem key={i} item={data} />
              );
              })
            : ""}
          {userType === "Admin"
            ? adminData?.map((data, i) => {
              return (
                <SidebarItem key={i} item={data} />
              );
              })
            : ""}
          <span onClick={() => handleLogout()}>
            <Menu Icon={<BiLogOut />} Title={"Logout"} Address={""} />
          </span>
        </ul>
      </div>

      <div id="content">
        <nav>
          <div>
            <LuLayoutGrid
              className="menuIcon"
              onClick={() => setToggle(!toggle)}
            />
            {userType == "Student" ? (
              premium == "false" ? (
                <Link href="/" className="nav-link">
                  Welcome to <span>Studee 🖐</span>
                </Link>
              ) : (
                "🔥You are a premium member !"
              )
            ) : (
              <Link href="/" className="nav-link">
                Welcome to Studee 🖐
              </Link>
            )}
          </div>
          <div>
            <Dropdown menu={{ items }} placement="bottomLeft" arrow>
              <Link href="/" className="profile">
                <img src={user} />
                <div>
                  <p>{name}..</p>
                  <p>
                    {userType} <GoChevronDown />
                  </p>
                </div>
              </Link>
            </Dropdown>
          </div>
        </nav>
        {children}
      </div>
    </>
  );
};

export default Navbar;