import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLesson } from "../../Redux/lesson/action";
import "./Lesson.css";
import startImage from '/img/start.png';
import questionImage from '/img/question.png';
import starImage from '/img/star.png';
import deleteImage from '/img/deletec.png';

const Lesson = ({ data }) => {
  const dispatch = useDispatch();

  const {
    user: { userType },
  } = useSelector((store) => store.auth.data);

  const deleteLessonFunc = (id) => {
    dispatch(deleteLesson(id));
  };

  return (
    <div className="lessonDiv">
      <div>
        <img src={data.thumbnail} alt="thumbnail" />
      </div>
      <div>
        <div>
          <p>{data.title}</p>
          <p>{data.subject}</p>
          <p>Class {data.class}</p>
          <p className="lessonTime">{data.totalTime} mins</p>
        </div>
        <div className= "lessonRight">
          <p className="lessonPoint"><img src={questionImage}/>Questions : {data.noOfQuestions}</p>
          <p className="lessonPoint"><img src={starImage}/>Points : {data.totalPoint}</p>
          {userType == "Admin" || userType == "Tutor" ? (
            <button
              className="deleteLesson"
              onClick={() => deleteLessonFunc(data._id)}
            >
              <img src={deleteImage}/>
            </button>
          ) : (
            <button className="startLesson"><img src={startImage}/></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lesson;