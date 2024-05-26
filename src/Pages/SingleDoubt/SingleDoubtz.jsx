import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addResponse, getSingleDoubtzData } from "../../Redux/doubt/actionz";

// component imports
import Navbar from "../../Components/Sidebar/Navbar";
import Header from "../../Components/Header/Header";

//css imports
import { Space, Spin } from "antd";
import "./SingleDoubt.css";

const SingleDoubtz = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  // redux states
  const {
    data: { isAuthenticated },
  } = useSelector((store) => store.auth);
  const { singleDoubtz, load } = useSelector((store) => store.doubtz);
  const { user } = useSelector((store) => store.auth.data);

  // form states
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
        <Header Title={"Doubt Details"} Address={"Doubtz"} />
        <div className="singleContentData">
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

        </div>

        <div className="doubtResponses">
          <p>{singleDoubtz?.title}</p>
          {/* <p>Class : {singleDoubt?.class}</p> */}
          <p>{singleDoubtz?.subject}</p>
          <p>{singleDoubtz?.description}</p>
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
          <h3 className="text-white">Fase Aplikasi</h3>
        </div>

        <div className="doubtResponses bg-white rounded-lg p-4 my-2">
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

        <div className="doubtResponses bg-white rounded-lg p-4 my-2">
          <form
            className="responseForm"
            onSubmit={(e) => handleSubmit(e, "PengetahuanAkhir")}
            >
            <input
              name="desc"
              value={descPengetahuanAkhir}
              onChange={(e) => setDescPengetahuanAkhir(e.target.value)}
              placeholder="e.g. Kelompok 1 | https://drive.google.com"
              />
            <input type="submit" />
          </form>
        </div>

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