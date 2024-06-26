import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addResponse, getSingleDoubtzData } from "../../Redux/doubt/actionz";

import Navbar from "../../Components/Sidebar/Navbar";
import Header from "../../Components/Header/Header";

import { Space, Spin } from "antd";
import "./SingleDoubt.css";

const SingleDoubtz = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const {
    data: { isAuthenticated },
  } = useSelector((store) => store.auth);
  const { singleDoubtz, load } = useSelector((store) => store.doubtz);
  const { user } = useSelector((store) => store.auth.data);

  const [descPengetahuanAwal, setDescPengetahuanAwal] = useState("");
  const [descFasePenstrukturan, setDescFasePenstrukturan] = useState("");
  const [descPengetahuanAkhir, setDescPengetahuanAkhir] = useState("");

  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === "PengetahuanAwal") {
      dispatch(addResponse(singleDoubtz?._id, descPengetahuanAwal));
      setDescPengetahuanAwal("");
    } else if (type === "FasePenstrukturan") {
      dispatch(addResponse(singleDoubtz?._id, descFasePenstrukturan));
      setDescFasePenstrukturan("");
    } else if (type === "PengetahuanAkhir") {
      dispatch(addResponse(singleDoubtz?._id, descPengetahuanAkhir));
      setDescPengetahuanAkhir("");
    }
  };

  useEffect(() => {
    dispatch(getSingleDoubtzData(params.id));
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
        <Header Title={"Assignment"} Address={"Assignment"} />
        {/* <div className="singleContentData">
        <div className="fileContainer">
  {singleDoubtz?.fileType === "jpg" || singleDoubtz?.fileType === "jpeg" || singleDoubtz?.fileType === "png"? (
    <img src={singleDoubtz?.fileUrl} alt="" />
  ) : (
    <video
      allow="fullscreen"
      frameBorder="0"
      width="100%"
      controls
      controlsList="nodownload"
    >
      <source src={singleDoubtz?.fileUrl} />
    </video>
  )}
</div>

        </div> */}

<div className="doubtResponses bg-white bg-opacity-50 rounded-lg p-4 my-2">
          <p>{singleDoubtz?.title}</p>
          <p>{singleDoubtz?.subject}</p>
          <p>{singleDoubtz?.description}</p>
        </div>

        <div className="flex flex-row justify-center">
        <div className="doubtResponses bg-custom-red rounded-full p-4 my-2 w-2/6 d-flex justify-content-center" >
          <h3 className="text-white font-bold text-center">Fase Aplikasi</h3>
        </div>
        </div>

        <div className="doubtResponses bg-white bg-opacity-50 rounded-lg p-4 my-2">
          <h3 className="text-black">Ubahlah kalimat Naratif pada studi kasus pembuatan kopi latte menjadi Pseudocode dan Flowchart! <br />
Membuat Kopi latte<br />
Langkah-1: Menyiapkan kopi, susu, gula, gelas, sendok, dan air panas <br />
Langkah-2: Membuka bungkus kopi kemudian menuangkannya ke dalam gelas. <br />
Langkah-3: Membuka bungkus susu kemudian menuangkannya ke dalam gelas. <br />
Langkah-4: Menambah satu sendok gula ke dalam gelas. <br />
Langkah-5: Menuangkan air panas ke dalam gelas. <br />
Langkah-6: Aduk hingga bercampur. <br />
Langkah-7: Jika kurang manis, silakan tambahkan lagi gulanya kemudian aduk lagi sampai <br />
bercampur dengan air. <br />
Langkah-8: Menghidangkan kopi latte yang sudah siap.</h3>
        </div>

          <form
            className="responseForm flex flex-row p-4 my-2"
            onSubmit={(e) => handleSubmit(e, "PengetahuanAkhir")}
            >
            <input
              name="desc"
              className="mx-auto border-none w-3/4 px-4"
              value={descPengetahuanAkhir}
              onChange={(e) => setDescPengetahuanAkhir(e.target.value)}
              placeholder="e.g. Kelompok 1 | https://drive.google.com"
              />
            <input type="submit" className="bg-custom-red text-white py-2 px-4 rounded-full border-none max-w-md mx-auto w-1/4" />
          </form>

        {singleDoubtz?.response?.map((data, i) => {
          if (user?.userType === "Admin") {
            return (
              <div
                key={i}
                className="doubtResponses bg-red-100 rounded-lg p-4 my-2"
              >
                <p>Urutan no. : {i + 1}</p>
                <p>{data}</p>
              </div>
            );
          } else {
            return null;
          }
      })}
        
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

export default SingleDoubtz;