import React, { useState } from "react";
import ImageResult from "./ImageResult";

interface IClassifier {
  score: number;
  label: string;
}

function ImageLoader() {
  const [files, setFile] = useState<Array<any>>([]);
  const [message, setMessage] = useState<string>();
  const [results, setResults] = useState<Array<IClassifier>>([]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    setMessage("");
    let file = e?.target?.files;

    for (let i = 0; i < file!.length; i++) {
      const fileType = file![i]["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file![i]]);
      } else {
        setMessage("only images accepted");
      }
    }
  };

  const removeImage = (i: number) => {
    console.log("i:", i);
    setFile(files.filter((x) => x.name !== i));
    setResults([]);
    console.log("files:", files);
  };

  const uploadImage = () => {
    let formData = new FormData();
    if (files.length > 0) {
      formData.append("file", files![0]);
      fetch("http://localhost:8001/classify", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setResults(data.data);
        });
    }
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center px-3">
        <div className="rounded-lg shadow-xl bg-gray-50 md:w-1/2 w-[360px]">
          <div className="m-4">
            <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
              {message}
            </span>
            <div className="flex items-center justify-center w-full">
              <label className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Select a photo
                  </p>
                </div>
                <input
                  type="file"
                  onChange={handleFile}
                  className="opacity-0"
                  name="files[]"
                />
              </label>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {files.map((file, key) => {
                return (
                  <div key={key} className=" relative">
                    <span
                      onClick={() => {
                        removeImage(file.name);
                      }}
                      className="rounded-full p-0.5 shadow-cyan-500/95 bg-[#9CA3AF] mdi mdi-close absolute -right-2 -top-2 hover:text-sky-700 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>

                    <img
                      className="h-20 w-20 rounded-md"
                      src={URL.createObjectURL(file)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-row gap-7 justify-center md:w-1/2 w-[360px]">
          <button
            className="w-96 bg-sky-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => uploadImage()}
          >
            Classify
          </button>
        </div>
        {files.length > 0 && results.length > 0 && (
          <ImageResult image={files[0]} results={results} />
        )}
      </div>
    </>
  );
}

export default ImageLoader;
