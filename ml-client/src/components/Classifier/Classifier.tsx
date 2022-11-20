import { Fragment } from "react";
import Footer from "../Footer/Footer";
import ImageLoader from "../ImageLoader/ImageLoader";
import NavBar from "../Navbar/NavBar";

function Classifier() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col bg-slate-200 w-full h-[82vh]">
        <h1 className="flex text-6xl font-open-sans font-medium text-sky-700 my-8 justify-center">
          Image classifier
        </h1>
        <ImageLoader />
      </div>
      <Footer />
    </>
  );
}

export default Classifier;
