import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addResponse, getSingleScratchData } from "../../Redux/scratch/action";

import Navbar from "../../Components/Sidebar/Navbar";
import Header from "../../Components/Header/Header";

import { Space, Spin } from "antd";
import "./SingleScratch.css";

const SingleScratch = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const {
    data: { isAuthenticated },
  } = useSelector((store) => store.auth);
  const { singleScratch, load } = useSelector((store) => store.scratch);

  const [desc, setDesc] = useState("");
  const [numberValue, setNumberValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addResponse(singleScratch?._id, desc));
    setNumberValue("");
  };

  useEffect(() => {
    dispatch(getSingleScratchData(params.id));
    setDesc("");
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/");
    }
  }, []);

  return (
    <Navbar>
      <div className="singleContent">
        <Header Title={"Scratch Details"} Address={"Scratch"} />

        <div className="scratchResponses">
          <p>{singleScratch?.title}</p>
          <p>{singleScratch?.subject}</p>
          <p>{singleScratch?.description}</p>
        </div>

        <div class="mx-auto w-full max-w-screen-xl">
          <div class="relative" style={{ paddingTop: "75%" }}>
            <iframe src="https://quizizz.com/embed/quiz/664186a682be59c05aef4f93" allowtransparency="true" className="absolute inset-0 w-full h-full" frameBorder="0" scrolling="yes" allowFullScreen></iframe>
          </div>
        </div>

        <div className="scratchResponses bg-red-900 rounded-lg p-4 my-2">
          <h3 className="text-white">Scratch Result</h3>
        </div>
        {singleScratch?.response?.map((data, i) => {
          return (
            <div key={i} className="scratchResponses">
              <p>Response no. : {i + 1}</p>
              <p>Description : {data}</p>
            </div>
          );
        })}

        <div className="scratchResponses">
          <p>Form Score</p>
          <form className="responseForm" onSubmit={(e) => handleSubmit(e)}>
            <input
              name="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Screenshoot score"
            />
            <input
              name="numberInput"
              type="number"
              value={numberValue}
              onChange={(e) => setNumberValue(e.target.value)}
              placeholder="Score"
            />
            <input type="submit" />
          </form>
        </div>

        {load ? (
          <Space
            style={{
              width: "100vw",
              height: "100vh",
              position: "absolute",
              backgroundColor: "rgba(0,0,0,0.2)",
              top: "0",
              left: "0",
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <Spin size="large"></Spin>
          </Space>
        ) : null}
      </div>
    </Navbar>
  );
};

export default SingleScratch;
