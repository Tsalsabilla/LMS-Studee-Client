import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLesson } from "../../Redux/lesson/action";
import "./Lesson.css";
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
          <a href={data.class} className="inline-block bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl">Download</a>
        </div>

        <div className= "lessonRight">
          {userType == "Admin" || userType == "Tutor" ? (
            <>
            <button
              className="deleteLesson"
              onClick={() => deleteLessonFunc(data._id)}
            >
              <img src={deleteImage}/>
            </button>
            </>
          ) : (
            <>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
