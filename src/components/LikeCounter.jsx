import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { legacy_createStore } from "redux";
import { reducer } from "./Reducer";
import { decrementLike, incrementLike } from "./Actions";

const store = legacy_createStore(reducer);

export default store;

const LikeCounter = () => {
  const likeCount = useSelector((store) => store.likeCount);

  const dispatch = useDispatch();

  //   console.log(likeCount)
  return (
    <div>
      <div>{likeCount}</div>
      <div>
        <button onClick={() => dispatch(incrementLike())}>Like</button>
        <button onClick={() => dispatch(decrementLike())}>Unlike</button>
      </div>
    </div>
  );
};

export { LikeCounter };
