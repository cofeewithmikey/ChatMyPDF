import React from "react";
import DragZone from "./DragZone";

const UploadPDF = ({ handleText }) => {
  return (
    <div>
      <h1 className="py-5 text-3xl font-mono">Please Drag or Drop the File here.</h1>
      <DragZone handleText={ handleText } />
    </div>
  );
};

export default UploadPDF;
