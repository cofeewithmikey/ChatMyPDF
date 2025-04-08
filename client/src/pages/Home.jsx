import React from 'react'
import UploadPDF from '../components/UploadPDF'
import { useState } from 'react';

const Home = () => {
  const [text, setText] = useState("Hello World!");
  const handleText = (newText) => {
    setText(newText);
  };
  
  return (
    <div>
     <UploadPDF handleText={handleText} />
     <div className='px-5' >{text}</div>
    </div>
  )
}

export default Home