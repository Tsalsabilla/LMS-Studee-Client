import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLesson } from "../../Redux/lesson/action";
import "./Lesson.css";
import { FiTrash2 } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";

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
        <div class="flex items-center justify-center flex-col">
          <p>{data.title}</p>
          <p>{data.subject}</p>
          <button
              className="deleteLesson bg-white shadow-lg w-3/5 rounded-full px-4 py-2 flex items-center justify-center cursor-pointer text-black mb-2 hover:transition hover:duration-150 hover:transform hover:translate-y-1">
              <BsDownload className="text-gray mr-2" /> <a href={data.class}>Download</a>
            </button>
        </div>
        
          {userType == "Admin" || userType == "Tutor" ? (
            <div class="flex items-center justify-center flex-col">
            <button
              className="deleteLesson bg-white shadow-lg w-3/5 rounded-full px-4 py-2 flex items-center justify-center cursor-pointer text-black hover:transition hover:duration-150 hover:transform hover:translate-y-1"
              onClick={() => deleteLessonFunc(data._id)}
            >
              <FiTrash2 className="text-red-500 mr-2"/> Delete
            </button>
            </div>
          ) : (
            <>
            </>
          )}
        
      </div>
    </div>
  );
};

export default Lesson;
