import "./App.css";
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ReactQuill from 'react-quill';
import "../node_modules/react-quill/dist/quill.snow.css";


export default function App() {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [body, setBody] = new useState();
  const [weight, setWeight] = new useState(0);
  const [style, setStyle] = new useState('normal');
  const [line, setLine] = new useState('none');
  // const [fontSize, setFontSize] = new useState(11);

  useEffect(() => {
    setBody(transcript)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript]);

  const handleBody = e => {
    console.log(e);
    setBody(e);
  }

  function indam() {
    if(weight==0) {
      document.getElementById("demo").style.fontWeight= '900';
      setWeight(1);
    }
    else {
      document.getElementById("demo").style.fontWeight= '300';
      setWeight(0);
    }
    
  }
  function innghieng() {
    if(style=='normal') {
      document.getElementById("demo").style.fontStyle= 'italic';
      setStyle('italic');
    }
    else {
      document.getElementById("demo").style.fontStyle = "normal";
      setStyle('normal');
    }
    
  }
  function Gachchan() {
    if(line=='none') {
      document.getElementById("demo").style.textDecoration= 'underline';
      setLine('italic');
    }
    else if(line=='italic') {
      document.getElementById("demo").style.textDecoration= 'none';
      setLine('none');
    }
    
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  console.log(transcript)

  return (
    <div class="container">
      <div class="header">
          
      </div>
      <div class="container1">
        <ReactQuill
          placeholder="Say somethings..."
          modules={App.modules}
          formats={App.formats}
          onChange={handleBody}
          value={body}
        />
          <div class="form">
              <h1>Hỗ trợ đánh văn bản Word</h1>
              <div class="option">
                  <button class="option1" onClick={indam}>In đậm</button>
                  <button class="option1" onClick={innghieng}>In nghiêng</button>
                  <button class="option1" onClick={Gachchan}>Gạch chân</button>
                  <button class="option1" >Chữ thường</button>
              </div>
              <p>Microphone: {listening ? 'on' : 'off'}</p>
              <input
              class="input"
              type="textarea"
              name="text"
              id="textInput"
              value={transcript}
              
              placeholder="Your say..."
              
            />              
            <div class="sub-form" >
                  <input class="input2" placeholder="Text" id="demo" />
                  <p id="temp" >aaa</p>
            </div>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
              <button class="msger-mic-btn">
                <img
                  src="{{ url_for('static', filename='styles/icons8-microphone-30.png') }}"
                  alt=""
                  srcset=""
                  class="image-mic"
                />
              </button>              
              <button class="picture">Export to Word</button>
          </div>
      </div>
      
  </div>
  );
}

App.modules = {
  toolbar: [
    [{  header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
};
App.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
];
