import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteDoubtz, resolveDoubtz } from "../../Redux/doubt/actionz";
import viewImage from '/img/view.png';
import deleteImage from '/img/deletec.png';

import "./DoubtBox.css";

const DoubtzBox = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.auth.data);

  const handleDelete = (id) => {
    dispatch(deleteDoubtz(id));
  };
  const handleClick = (id) => {
    return navigate(`/doubtz/${id}`);
  };
  const handleResolve = (id) => {
    dispatch(resolveDoubtz(id));
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoubtzBox;
