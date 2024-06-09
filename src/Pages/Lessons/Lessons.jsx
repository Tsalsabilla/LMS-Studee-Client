import React, { useEffect, useState } from "react";
import "./Lessons.css";
import Navbar from "../../Components/Sidebar/Navbar";
import Header from "../../Components/Header/Header";
import AddIcon from "../../Components/AddIcon/AddIcon";
import Lesson from "../../Components/Lesson/Lesson";
import { Button, Drawer, Space, Spin, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createLesson, getLessonData } from "../../Redux/lesson/action";
import { useNavigate } from "react-router-dom";
import deleteImage from '/img/deletec.png';
import doneImage from '/img/done.png';

const Lessons = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const { user } = useSelector((store) => store.auth.data);
  const {
    data: { isAuthenticated },
  } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const { lesson, load } = useSelector((store) => store.lesson);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  const initialFormData = {
    title: "",
    thumbnail: "",
    class: "",
    subject: "",
  };

  const questionData = {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [question, setQuestion] = useState(questionData);
  const [allQuestions, setAllQuestions] = useState([]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const removeQuestion = (i) => {
    setAllQuestions(allQuestions.filter((elem, index) => index != i));
  };

  const handleResolve = (id) => {
    dispatch(resolveLesson(id));
  };

  const deleteLessonFunc = (id) => {
    dispatch(deleteLesson(id));
  };

  const submitLesson = () => {
    for (let keys in formData) {
      if (formData[keys] == "") {
        return messageApi.open({
          type: "info",
          content: "Enter all the required fields",
          duration: 3,
        });
      }
    }

    let obj = {
      ...formData,
      questionData: allQuestions,
      totalPoint: +formData.pointPerQuestion * +formData.noOfQuestions,
      totalTime: formData.totalTime,
      creator: user.name,
    };

    console.log(obj);
    setLoading(true);
    dispatch(createLesson(obj)).then((res) => {
      if (res.msg == "Error") {
        setLoading(false);
        messageApi.open({
          type: "info",
          content: "Error",
          duration: 3,
        });
      } else {
        setLoading(false);
        setAllQuestions([]);
        setFormData(initialFormData);
        setQuestion(questionData);
        onClose();
        return messageApi.open({
          type: "info",
          content: "Lesson Created",
          duration: 3,
        });
      }
    });
  };

  useEffect(() => {
    dispatch(getLessonData());
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/");
    }
  }, []);

  return (
    <Navbar>
      <div className="lessons">
        {contextHolder}
        <Header Title={"Lesson"} Address={"Lesson"} />
        <div className="singleContentDetails bg-custom-red rounded-lg p-4 my-2">
          <h3 className="text-white font-bold text-center">Tujuan Pembelajaran</h3>
        </div>
        <div className="singleContentDetails bg-white bg-opacity-50 rounded-lg p-4 my-2">
          <p className="text-black text-left">Pada akhir fase E, peserta didik mampu memahami validitas sumber data, memahami konsep struktur data dan algoritma standar, menerapkan proses komputasi yang dilakukan manusia secara mandiri atau berkelompok untuk mendapatkan data yang bersih, benar, dan terpercaya, serta menerapkan struktur data dan algoritma standar untuk menghasilkan berbagai solusi dalam menyelesaikan persoalan yang mengandung himpunan data berstruktur kompleks dengan volume tidak kecil, dan menuliskan solusi rancangan program sederhana dalam format Pseudocode yang dekat dengan bahasa komputer; mampu memahami model dan mensimulasikan dinamika Input Proses Output dalam sebuah komputer Von Neumann, serta memahami peran sistem operasi.</p>
          <br />
          <p className="text-black text-left">1. Peserta didik dapat mendefinisikan pengertian mengenai Algoritma standar<br />
  2. Peserta didik dapat menjelaskan mengenai Algoritma standar <br />
  3. Peserta didik dapat menerapkan contoh yang benar terkait Pseudocode<br />
  4. Peserta didik dapat menerapkan contoh yang benar terkait Flowchart<br />
  </p>
  <p className="text-black text-left">5. Peserta didik dapat mendefinisikan pengertian mengenai Pemrograman <br />
  6. Peserta didik dapat mengimplementasikan Tipe Data<br />
  7. Peserta didik dapat memecahkan pola penyelesaian masalah Tipe Data<br />
  8. Peserta didik dapat mendefinisikan Percabangan if <br />
  </p>
  <p className="text-black text-left">
  9. Peserta didik dapat membangun program algoritma dan pemrograman sederhana yang menerapkan konsep Percabangan if<br />
  </p>
        </div>
        <div className="singleContentDetails bg-custom-red rounded-lg p-4 my-2">
          <h3 className="text-white font-bold text-center">Bahan Bacaan</h3>
        </div>
        <div className="lessonData">
          {lesson
            ?.filter((elem) => elem.resolved == "Yes")
            .map((data, i) => {
              return <Lesson data={data} key={i} />;
            })}
        </div>
        <div className="singleContentDetails bg-custom-red rounded-lg p-4 my-2">
          <h3 className="text-white font-bold text-center">Lembar Kerja Peserta Didik (LKPD)</h3>
        </div>
        <div className="lessonData">
          {lesson?.filter((elem) => elem.resolved == "No")
            .map((data, i) => {
              return <Lesson data={data} key={i} />;
            })}
        </div>
        {user?.userType === "Admin" ? (
          <div onClick={showDrawer}>
            <AddIcon />
          </div>
        ) : (
          ""
        )}
        <Drawer
          title="Create Lesson"
          width={520}
          closable={false}
          onClose={onClose}
          open={open}
          extra={
            <Space>
            </Space>
          }
        >
          <form>
            <input
              placeholder="Title"
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => handleFormChange(e)}
            />
            <input
              placeholder="Lesson Thumbnail"
              type="url"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={(e) => handleFormChange(e)}
            />
            <input
              placeholder="Subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={(e) => handleFormChange(e)}
            />
            <input
              placeholder="Pdf file"
              type="text"
              name="class"
              value={formData.class}
              onChange={(e) => handleFormChange(e)}
            />
          </form>
          <br />
          <button className="Submit" onClick={() => submitLesson()}>
            Add Lesson
          </button>
  
          <Drawer
            title="Lesson Questions"
            width={320}
            closable={false}
            onClose={onChildrenDrawerClose}
            open={childrenDrawer}
          >
            <p>Number of questions required: {formData.noOfQuestions || 0} </p>
            {allQuestions.length == 0 ? (
              <p>No questions added yet.</p>
            ) : (
              allQuestions?.map((ques, i) => {
                return (
                  <div key={i} className="questionDiv">
                    <h4>
                      {i + 1}. {ques.question}
                    </h4>
                    <p>a. {ques.option1}</p>
                    <p>b. {ques.option2}</p>
                    <p>c. {ques.option3}</p>
                    <p>d. {ques.option4}</p>
                    <p>e. {ques.option5}</p>
                    <button onClick={() => removeQuestion(i)}>
                      <img src={deleteImage} />
                    </button>
                  </div>
                );
              })
            )}
          </Drawer>
          {loading ? (
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
                alignItems: "center",
              }}
            >
              <Spin size="large"></Spin>
            </Space>
          ) : null}
        </Drawer>
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
              alignItems: "center",
            }}
          >
            <Spin size="large"></Spin>
          </Space>
        ) : null}
      </div>
    </Navbar>
  );  
};

export default Lessons;
