import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteScratch } from "../../Redux/scratch/action";
import "./Scratch.css";
import startImage from '/img/start.png';
import deleteImage from '/img/deletec.png';
import { useNavigate } from "react-router-dom";

const Scratch = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { userType },
  } = useSelector((store) => store.auth.data);

  const deleteScratchFunc = (id) => {
    dispatch(deleteScratch(id));
  };

  const handleClick = (id) => {
    return navigate(`/scratch/${id}`);
  };

  return (
    <div className="scratchDiv">
      <div>
        <img src={data.thumbnail} alt="thumbnail" />
      </div>
      <div>
        <div>
          <p>{data.title}</p>
          <p>{data.subject}</p>
        </div>
        <div className= "scratchRight">
          {userType == "Admin" || userType == "Tutor" ? (
            <>
            <button
              className="deleteScratch"
              onClick={() => deleteScratchFunc(data._id)}
            >
              <img src={deleteImage}/>
            </button>
            <button className="startScratch" onClick={() => handleClick(data._id)}> <img src={startImage}/> </button>
            </>
          ) : (
            <button className="startScratch" onClick={() => handleClick(data._id)}> <img src={startImage}/> </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scratch;
