import React from "react";
import { useParams } from "react-router-dom";

const MoiveDetailPage = () => {
  const { moiveId } = useParams();
  console.log("params: ", params);

  return <div>Moive Detail Page</div>;
};

export default MoiveDetailPage;
