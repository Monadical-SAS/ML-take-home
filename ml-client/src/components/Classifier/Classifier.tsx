import { Fragment } from "react";
import ImageLoader from "../ImageLoader/ImageLoader";

function Classifier() {
  return (
    <div className="flex flex-col justify-center bg-slate-200 h-screen">
        <h1 className="flex text-6xl text-blue-800 font-bold my-8 justify-center">
        Image classifier
        </h1>
        <ImageLoader/>

    </div>
  );
}

export default Classifier;
