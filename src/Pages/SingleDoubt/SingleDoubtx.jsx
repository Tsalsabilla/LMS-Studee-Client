import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addResponse, getSingleDoubtxData } from "../../Redux/doubt/actionx";

// component imports
import Navbar from "../../Components/Sidebar/Navbar";
import Header from "../../Components/Header/Header";

//css imports
import { Space, Spin } from "antd";
import "./SingleDoubt.css";

const SingleDoubtx = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  // redux states
  const {
    data: { isAuthenticated },
  } = useSelector((store) => store.auth);
  const { singleDoubtx, load } = useSelector((store) => store.doubtx);

  // form states
  const [descPengetahuanAwal, setDescPengetahuanAwal] = useState("");
  const [descFasePenstrukturan, setDescFasePenstrukturan] = useState("");
  const [descPengetahuanAkhir, setDescPengetahuanAkhir] = useState("");

  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === "PengetahuanAwal") {
      dispatch(addResponse(singleDoubtx?._id, descPengetahuanAwal));
      setDescPengetahuanAwal("");
    } else if (type === "FasePenstrukturan") {
      dispatch(addResponse(singleDoubtx?._id, descFasePenstrukturan));
      setDescFasePenstrukturan("");
    } else if (type === "PengetahuanAkhir") {
      dispatch(addResponse(singleDoubtx?._id, descPengetahuanAkhir));
      setDescPengetahuanAkhir("");
    }
  };

  useEffect(() => {
    dispatch(getSingleDoubtxData(params.id));
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
        <Header Title={"Doubt Details"} Address={"Doubtx"} />
        <div className="singleContentData">
        <div className="fileContainer">
  {singleDoubtx?.fileType === "jpg" || singleDoubtx?.fileType === "jpeg" ? (
    <img src={singleDoubtx?.fileUrl} alt="" />
  ) : (
    <video
      allow="fullscreen"
      frameBorder="0"
      width="100%"
      controls
      controlsList="nodownload"
    >
      <source src={singleDoubtx?.fileUrl} />
    </video>
  )}
</div>

        </div>

        <div className="doubtResponses">
          <p>{singleDoubtx?.title}</p>
          {/* <p>Class : {singleDoubt?.class}</p> */}
          <p>{singleDoubtx?.subject}</p>
          <p>{singleDoubtx?.description}</p>
          {/* <p>Resolved : {singleDoubt?.resolved == "Yes" ? "Yes" : "No"}</p> */}
        </div>

        {/* <div className="doubtResponses bg-red-900 rounded-lg p-4 my-2">
          <h3 className="text-white">Pengetahuan Awal</h3>
        </div>

        <div className="doubtResponses bg-white rounded-lg p-4 my-2">
          <h3 className="text-black">Silahkan jawab pertanyaan yang terdapat pada LKPD | Week 2 secara individu untuk mengukur pengetahuan awal mengenai Percabangan dan Perulangan!</h3>
        </div>

        <div className="doubtResponses bg-red-900 rounded-lg p-4 my-2">
          <h3 className="text-white">Fase Penstrukturan Ide</h3>
        </div>

        <div className="doubtResponses bg-white rounded-lg p-4 my-2">
          <h3 className="text-black">Lakukanlah diskusi secara berkelompok untuk mencari informasi tambahan, bertanya pertanyaan, atau mencoba berbagai pendekatan guna menambah pengetahuan baru mengenai Percabangan dan Perulangan. Lalu jawablah pertanyaan dengan tepat</h3>
        </div>

        <div className="doubtResponses bg-red-900 rounded-lg p-4 my-2">
          <h3 className="text-white">Pengetahuan Akhir</h3>
        </div>

        <div className="doubtResponses bg-white rounded-lg p-4 my-2">
          <h3 className="text-black">Setelah itu silahkan jawab pertanyaan secara individu untuk mengukur pengetahuan baru mengenai Percabangan dan Perulangan!</h3>
        </div> */}

        <div className="doubtResponses bg-red-900 rounded-lg p-4 my-2">
          <h3 className="text-white">Pengetahuan Akhir</h3>
        </div>

        <div className="doubtResponses bg-white rounded-lg p-4 my-2">
          <h3 className="text-black">Gabungkanlah 5 kata yang kalian tuliskan pada halaman initial knowledge bersama teman teman kelompok kalian, sehingga menjadi beberapa kalimat yang saling berhubungan satu sama lain. Lakukanlah diskusi secara berkelompok untuk mencari informasi tambahan, bertanya pertanyaan, atau mencoba berbagai pendekatan guna menambah pengetahuan baru mengenai materi yang sedang dipelajari!</h3>
        </div>

        {singleDoubtx?.response?.map((data, i) => {
          return (
            <div
              key={i}
              className="doubtResponses bg-red-100 rounded-lg p-4 my-2"
            >
              <p>Urutan no. : {i + 1}</p>
              <p>{data}</p>
            </div>
          );
        })}
        <div className="doubtResponses bg-white rounded-lg p-4 my-2">
          <form
            className="responseForm"
            onSubmit={(e) => handleSubmit(e, "PengetahuanAkhir")}
          >
            <input
              name="desc"
              value={descPengetahuanAkhir}
              onChange={(e) => setDescPengetahuanAkhir(e.target.value)}
              placeholder="e.g. Kelompok 1 | Algoritma merupakan langkah sistematis, sedangkan naratif memperkenalkan konsep pengaturan langkah. Pseudocode adalah metode ..."
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

export default SingleDoubtx;