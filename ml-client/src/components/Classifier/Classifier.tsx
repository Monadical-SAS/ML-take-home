import React, { useCallback, useState } from "react";
import Results from "../Results/Results";
import ImageLoader from "../ImageLoader/ImageLoader";
import Loader from "../Loader/Loader";
import "./classifier.scss";

interface IClassifier {
  score: number;
  label: string;
}

function Classifier() {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const [files, setFiles] = useState<Array<any>>([]);
  const [results, setResults] = useState<Array<IClassifier>>([]);

  const uploadImage = useCallback(() => {
    setLoading(true);
    let formData = new FormData();
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
        setLoading(false);
        setResults(data.data);
        setMessage("Image analyzed successfully");
      })
      .catch((error) => {
        setLoading(false);
        setResults([]);
        setMessage(error.message);
      });
  }, [files]);

  const handleTryAgain = () => {
    setLoading(false);
    setResults([]);
    setMessage("");
    setFiles([]);
  };

  if (loading) {
    return (
      <div className="classifier-container">
        <Loader />
      </div>
    );
  }

  return (
    <div className="classifier-container">
      {message && (
        <div className="message-container">
          <p>{message}</p>
        </div>
      )}

      {(!results || results.length === 0) && (
        <div className="classifier-group">
          <ImageLoader
            images={files}
            setImages={setFiles}
            setMessage={setMessage}
          />

          {files.length > 0 && (
            <button onClick={uploadImage} className="button-submit">
              Classify
            </button>
          )}
        </div>
      )}

      {results && results.length > 0 && (
        <div className="classifier-group">
          <Results image={files[0]} results={results} />
          <button onClick={handleTryAgain} className="button-submit">
            Try other
          </button>
        </div>
      )}
    </div>
  );
}

export default Classifier;
