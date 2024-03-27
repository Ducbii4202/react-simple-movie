import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const MoiveDetailPage = () => {
  const { moiveId } = useParams();

  const { data, error } = useSWR(`
  https://api.themoviedb.org/3/movie/`);

  return <div>Moive Detail Page</div>;
};

export default MoiveDetailPage;
