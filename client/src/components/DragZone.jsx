import React from "react";
import { useState, useRef } from "react";
import axios from 'axios';


const DragZone = ({handleText}) => {
  const [file, setFile] = useState(null);
  const [draggedState, setDraggedState] = useState(false);
  const onChange = (e) => {
    setFile(e.target.files[0]);
    console.log("File selected:", e.target.files[0]);
  };
  const handleDrop = async(e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
      await onFileSelection(droppedFile);
      console.log("File dropped:", droppedFile);
    } else {
      console.log("Invalid file type. Please drop a PDF file.");
    }
  };

  // APi Call
const onFileSelection = async (file) => {
  const formData = new FormData();
  formData.append("pdf", file); // 👈 the key should match the backend's expected field

  try {
    const res = await axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const { data } = res;
    handleText(data.text);
    // setText(data.text); 
  } catch (err) {
    console.error("Error uploading file:", err.response?.data || err.message);
  }
};

  const inputFileref = useRef(null);
  return (
    <div>
      <div
        onClick={() => inputFileref.current.click()}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setDraggedState(true);
        }}
        onDragLeave={() => setDraggedState(false)}
        className={`flex flex-col items-center justify-center m-auto cursor-pointer w-[90%] text-xl h-40 border-2 border-dashed rounded-lg border-gray-300 ${
          draggedState ? "bg-gray-100" : "bg-white"
        }`}
      >
        Drag and Drop your PDF file here.
        <input
          ref={inputFileref}
          type="file"
          accept=".pdf"
          onChange={onChange}
          className="hidden"
        ></input>
      </div>
    </div>
  );
};

export default DragZone;
