import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleAssignmentData } from "../../Redux/assignment/action";

//component imports
import Navbar from "../../Components/Sidebar/Navbar";
import Header from "../../Components/Header/Header";

//css imports
import "./SingleAssignment.css";

const SingleAssignment = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  //redux states
  const {
    data: { isAuthenticated },
  } = useSelector((store) => store.auth);
  const { singleAssignment } = useSelector((store) => store.assignment);

  // disabling right click
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  useEffect(() => {
    dispatch(getSingleAssignmentData(params.id));
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/");
    }
  }, []);

  return (
    <Navbar>
      <div className="singleAssignment">
        <Header Title={"Assignment"} Address={"Assignments"} />

        {/* media component  */}
        <div className="singleAssignmentData">
          <div className="fileContainer">
            {singleAssignment?.fileType == "jpg" ||
            singleAssignment?.fileType == "jpeg" ? (
              <img src={singleAssignment.fileUrl} alt="" />
            ) : (
              <video
                allow="fullscreen"
                frameBorder="0"
                width="100%"
                controls
                controlsList="nodownload"
              >
                <source src={singleAssignment.fileUrl} />
              </video>
            )}
          </div>
        </div>

        <div className="singleAssignmentDetails">
          <p>Topic : {singleAssignment?.title}</p>
          <p>Class : {singleAssignment?.class}</p>
          <p>Subject : {singleAssignment?.subject}</p>
          <p>Assignment Type : {singleAssignment?.type}</p>
          <p>Tutor : {singleAssignment?.creator}</p>
        </div>
      </div>
    </Navbar>
  );
};

export default SingleAssignment;
