import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addResponse, getSingleDoubtData } from "../../Redux/doubt/action";

// component imports
import Navbar from "../../Components/Sidebar/Navbar";
import Header from "../../Components/Header/Header";

//css imports
import { Space, Spin } from "antd";
import "./SingleDoubt.css";

const SingleDoubt = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  // redux states
  const {
    data: { isAuthenticated },
  } = useSelector((store) => store.auth);
  const { singleDoubt, load } = useSelector((store) => store.doubt);

  // form states
  const [descPengetahuanAwal, setDescPengetahuanAwal] = useState("");
  const [descFasePenstrukturan, setDescFasePenstrukturan] = useState("");
  const [descPengetahuanAkhir, setDescPengetahuanAkhir] = useState("");

  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === "PengetahuanAwal") {
      dispatch(addResponse(singleDoubt?._id, descPengetahuanAwal));
      setDescPengetahuanAwal("");
    } else if (type === "FasePenstrukturan") {
      dispatch(addResponse(singleDoubt?._id, descFasePenstrukturan));
      setDescFasePenstrukturan("");
    } else if (type === "PengetahuanAkhir") {
      dispatch(addResponse(singleDoubt?._id, descPengetahuanAkhir));
      setDescPengetahuanAkhir("");
    }
  };

  useEffect(() => {
    dispatch(getSingleDoubtData(params.id));
    setDescPengetahuanAwal("");
    setDescFasePenstrukturan("");
    setDescPengetahuanAkhir("");
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/");
    }
  }, []);

  return (
    <Navbar>
      <div className="singleContent">
        <Header Title={"Doubt Details"} Address={"Doubt"} />
        <div className="singleContentData">
          <div className="fileContainer">
            {singleDoubt?.fileType == "jpg" ||
            singleDoubt?.fileType == "jpeg" ? (
              <img src={singleDoubt.fileUrl} alt="" />
            ) : (
              <video
                allow="fullscreen"
                frameBorder="0"
                width="100%"
                controls
                controlsList="nodownload"
              >
                <source src={singleDoubt.fileUrl} />
              </video>
            )}
          </div>
        </div>

        <div className="doubtResponses">
          <p>{singleDoubt?.title}</p>
          {/* <p>Class : {singleDoubt?.class}</p> */}
          <p>{singleDoubt?.subject}</p>
          <p>{singleDoubt?.description}</p>
          {/* <p>Resolved : {singleDoubt?.resolved == "Yes" ? "Yes" : "No"}</p> */}
        </div>

        <div className="doubtResponses bg-red-900 rounded-lg p-4 my-2">
          <h3 className="text-white">Pengetahuan Awal</h3>
        </div>
        {singleDoubt?.response?.map((data, i) => {
          return (
            <div
              key={i}
              className="doubtResponses bg-red-100 rounded-lg p-4 my-2"
            >
              <p>Absen no. : {i + 1}</p>
              <p>{data}</p>
            </div>
          );
        })}
        <div className="doubtResponses bg-white rounded-lg p-4 my-2">
          <p>Input Link Google Drive</p>
          <form
            className="responseForm"
            onSubmit={(e) => handleSubmit(e, "PengetahuanAwal")}
          >
            <input
              name="desc"
              value={descPengetahuanAwal}
              onChange={(e) => setDescPengetahuanAwal(e.target.value)}
              placeholder="Description"
            />
            <input type="submit" />
          </form>
        </div>

        <div className="doubtResponses bg-red-900 rounded-lg p-4 my-2">
          <h3 className="text-white">Fase Penstrukturan Ide</h3>
        </div>
        {singleDoubt?.response?.map((data, i) => {
          return (
            <div
              key={i}
              className="doubtResponses bg-red-100 rounded-lg p-4 my-2"
            >
              <p>Absen no. : {i + 1}</p>
              <p>{data}</p>
            </div>
          );
        })}
        <div className="doubtResponses bg-white rounded-lg p-4 my-2">
          <p>Input Link Google Drive</p>
          <form
            className="responseForm"
            onSubmit={(e) => handleSubmit(e, "FasePenstrukturan")}
          >
            <input
              name="desc"
              value={descFasePenstrukturan}
              onChange={(e) => setDescFasePenstrukturan(e.target.value)}
              placeholder="Description"
            />
            <input type="submit" />
          </form>
        </div>

        <div className="doubtResponses bg-red-900 rounded-lg p-4 my-2">
          <h3 className="text-white">Pengetahuan Akhir</h3>
        </div>
        {singleDoubt?.response?.map((data, i) => {
          return (
            <div
              key={i}
              className="doubtResponses bg-red-100 rounded-lg p-4 my-2"
            >
              <p>Absen no. : {i + 1}</p>
              <p>{data}</p>
            </div>
          );
        })}
        <div className="doubtResponses bg-white rounded-lg p-4 my-2">
          <p>Input Link Google Drive</p>
          <form
            className="responseForm"
            onSubmit={(e) => handleSubmit(e, "PengetahuanAkhir")}
          >
            <input
              name="desc"
              value={descPengetahuanAkhir}
              onChange={(e) => setDescPengetahuanAkhir(e.target.value)}
              placeholder="Description"
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

export default SingleDoubt;