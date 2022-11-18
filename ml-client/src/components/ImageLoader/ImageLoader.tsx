import React from "react";
import {useState} from "react";

function ImageLoader() {

    const [files, setFile] = useState<Array<any>>([]);
    const [message, setMessage] = useState<string>();

    const handleFile = (e:React.ChangeEvent<HTMLInputElement> | null) => {
        setMessage("");
        let file = e?.target?.files;
        
        for (let i = 0; i < file!.length; i++) {
            const fileType = file![i]['type'];
            const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
            if (validImageTypes.includes(fileType)) {
                setFile([...files, file![i]]);
            } else {
                setMessage("only images accepted");
            }

        }
    }; 

    const removeImage = (i:number) => {
        console.log("i:",i)
        setFile(files.filter(x => x.name !== i));
        console.log("files:",files)
     }


    return (
        <>
            <div className="flex justify-center h-screen items-center px-3">
                <div className="rounded-lg shadow-xl bg-gray-50 md:w-1/2 w-[360px]">
                    <div className="m-4">
                        <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">{message}</span>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                        Select a photo</p>
                                </div>
                                <input type="file" onChange={handleFile} className="opacity-0" name="files[]" />
                            </label>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {files.map((file, key) => {
                                return (
                                    <div key={key} className="overflow-hidden relative">
                                        <i onClick={() => { removeImage(file.name) }} className="mdi mdi-close absolute right-1 hover:text-red cursor-pointer"></i>
                                        <img className="h-20 w-20 rounded-md" src={URL.createObjectURL(file)} />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default ImageLoader;
