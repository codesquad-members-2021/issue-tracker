import React from "react";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { currDetailState } from "utils/states";

function Detail() {
  const currDetail = useRecoilValue(currDetailState);

  return <div>detailPage: {currDetail}</div>;
}

export default Detail;
