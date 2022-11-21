import React from "react";
import "./imageLoader.scss";

interface ImageResultProps {
  images: any;
  setImages: (images: any) => void;
  setMessage: (message: any) => void;
}

const ImageLoader = (props: ImageResultProps) => {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    let file = e?.target?.files;

    for (let i = 0; i < file!.length; i++) {
      const fileType = file![i]["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

      if (validImageTypes.includes(fileType)) {
        props.setImages([...props.images, file![i]]);
      } else {
        props.setImages([]);
        props.setMessage("only images accepted");
      }
    }
  };

  const removeImage = (i: number) => {
    props.setImages(props.images.filter((image: any) => image.name !== i));
  };

  return (
    <div>
      <h2 className="text-4xl mt-2 mb-5 text-slate-600 ">Upload image</h2>
      <div className="flex items-center justify-center w-full">
        <label className="flex cursor-pointer flex-col w-full h-100 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
          <div className="flex flex-col items-center justify-center pt-7">
            <span className="material-icons image-icon">image</span>

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

      <div className="flex flex-wrap gap-2 mt-5">
        {props.images.map((image: any, key: number) => (
          <div key={key} className="relative image-remove">
            <span
              onClick={() => removeImage(image.name)}
              className="remove-icon"
            >
              <span className="material-icons">delete</span>
            </span>

            <img
              className="image-remove"
              src={URL.createObjectURL(image)}
              alt="classify image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageLoader;
