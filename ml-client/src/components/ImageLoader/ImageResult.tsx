import React from "react";

interface IImageResult {
  image: any;
  results?: any;
}

const ImageResult = ({ image, results }: IImageResult) => {
  return (
    <>
      <h2 className="text-4xl mt-10 mb-5 text-slate-600 ">Result</h2>
      <div className="grid grid-cols-2 gap-4">
        <img
          className="h-full w-full rounded-md"
          src={URL.createObjectURL(image)}
        />
        <div className="ml-5">
          <h3 className="text-xl text-center m-5">Score</h3>
          {results.map((result: any, key: any) => {
            return (
              <div key={key}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-blue-700 ">
                    {result.label}
                  </span>
                  <span className="text-sm font-medium text-blue-700 ">
                    {`${(result.score * 100).toFixed(2)}%`}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 ">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-slate-300 h-2.5 rounded-full"
                    style={{ width: `${(result.score * 100).toFixed(1)}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImageResult;
