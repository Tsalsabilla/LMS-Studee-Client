import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleContentData } from "../../Redux/content/action";

import Navbar from "../../Components/Sidebar/Navbar";
import Header from "../../Components/Header/Header";

import "./SingleContent.css";

const SingleContent = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const {
    data: { isAuthenticated },
  } = useSelector((store) => store.auth);
  const { singleContent } = useSelector((store) => store.content);

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
    dispatch(getSingleContentData(params.id));
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/");
    }
  }, []);

  return (
    <Navbar>
      <div className="singleContent">
        <Header Title={"Video"} Address={"Video"} />

        <div className="singleContentData">
          <div className="fileContainer">
            {singleContent?.fileType == "jpg" ||
            singleContent?.fileType == "jpeg" ||
            singleContent?.fileType == "png"? (
              <img src={singleContent.fileUrl} alt="" />
            ) : (
              <video
                allow="fullscreen"
                frameBorder="0"
                width="100%"
                controls
                controlsList="nodownload"
              >
                <source src={singleContent.fileUrl} />
              </video>
            )}
          </div>
        </div>

        <div className="singleContentDetails">
          <p>{singleContent?.title}</p>
          <p>{singleContent?.class}</p>
          <p>{singleContent?.subject}</p>
        </div>

        <div class="mx-auto w-full max-w-screen-xl">

        <div className="singleContentDetails bg-custom-red rounded-lg p-4 my-2">
          <h3 className="text-white font-bold text-center">Algoritma</h3>
        </div>
        <div class="relative" style={{ paddingTop: "75%", marginBottom: "20px"}}>
            <iframe src="https://www.youtube.com/embed/fLqHSiJMMyI"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowtransparency="true" className="absolute inset-0 w-full h-full" frameBorder="0" scrolling="yes" allowFullScreen></iframe>
          </div>

          <div className="singleContentDetails bg-custom-red rounded-lg p-4 my-2">
          <h3 className="text-white font-bold text-center">Naratif danPseudocode</h3>
        </div>
        <div class="relative" style={{ paddingTop: "75%", marginBottom: "20px"}}>
            <iframe src="https://www.youtube.com/embed/Yw6YscAMe3U"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowtransparency="true" className="absolute inset-0 w-full h-full" frameBorder="0" scrolling="yes" allowFullScreen></iframe>
          </div>
          
          <div className="singleContentDetails bg-custom-red rounded-lg p-4 my-2">
          <h3 className="text-white font-bold text-center">Flowchart</h3>
        </div>
        <div class="relative" style={{ paddingTop: "75%", marginBottom: "20px"}}>
            <iframe src="https://www.youtube.com/embed/1S35wmupqn4"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowtransparency="true" className="absolute inset-0 w-full h-full" frameBorder="0" scrolling="yes" allowFullScreen></iframe>
          </div>

        </div>


      </div>
    </Navbar>
  );
};

export default SingleContent;
