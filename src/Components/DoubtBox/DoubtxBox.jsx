import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteDoubtx, resolveDoubtx } from "../../Redux/doubt/actionx";
import viewImage from '/img/view.png';
import deleteImage from '/img/deletec.png';
import doneImage from '/img/done.png';

import "./DoubtBox.css";

const DoubtxBox = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.auth.data);

  const handleDelete = (id) => {
    dispatch(deleteDoubtx(id));
  };
  const handleClick = (id) => {
    return navigate(`/doubtx/${id}`);
  };
  const handleResolve = (id) => {
    dispatch(resolveDoubtx(id));
  };
  
  return (
    <div className="contentDiv">
      <div>
        <img src={data.thumbnailUrl} alt="thumbnail" />
      </div>
      <div>
        <div>
          <p>{data.title}</p>
          <p>{data.description}</p>
          <p>{data.subject}</p>
          {/* <p>Class {data.class}</p> */}
          {/* <p>Resolved : {data.resolved == "Yes" ? "Yes" : "No"}</p> */}
        </div>
        <div>
          {user?.userType == "Admin" || user?.userType == "Tutor" ? (
            <div className="contentOption">
              <button onClick={() => handleClick(data._id)}> <img src={viewImage}/> </button>
              <button onClick={() => handleDelete(data._id)}><img src={deleteImage}/></button>
            </div>
          ) : (
            <div className="contentOption">
              <p>{data.type}</p>
              <button onClick={() => handleClick(data._id)}><img src={viewImage}/></button>
              {/* {data?.resolved == "No" ? (
                <button onClick={() => handleResolve(data._id)}>
                  <img src={doneImage}/>
                </button>
              ) : (
                <button onClick={() => handleDelete(data._id)}><img src={deleteImage}/></button>
              )} */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoubtxBox;
