import "./App.css";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import ReactQuill from "react-quill";
import "../node_modules/react-quill/dist/quill.snow.css";

export default function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [body, setBody] = new useState();
  const [weight, setWeight] = new useState(0);
  const [style, setStyle] = new useState("normal");
  const [line, setLine] = new useState("none");
  // const [fontSize, setFontSize] = new useState(11);

  useEffect(() => {
    setBody(transcript);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript]);

  const handleBody = (e) => {
    console.log(e);
    setBody(e);
  };

  function indam() {
    if (weight == 0) {
      document.getElementById("demo").style.fontWeight = "900";
      setWeight(1);
    } else {
      document.getElementById("demo").style.fontWeight = "300";
      setWeight(0);
    }
  }
  function innghieng() {
    if (style == "normal") {
      document.getElementById("demo").style.fontStyle = "italic";
      setStyle("italic");
    } else {
      document.getElementById("demo").style.fontStyle = "normal";
      setStyle("normal");
    }
  }
  function Gachchan() {
    if (line == "none") {
      document.getElementById("demo").style.textDecoration = "underline";
      setLine("italic");
    } else if (line == "italic") {
      document.getElementById("demo").style.textDecoration = "none";
      setLine("none");
    }
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div class="containe">
      <div class="container">
        <div class="form" style={{ textAlign: "center" }}>
          <h1>Hỗ trợ đánh văn bản Word</h1>

          <p>Microphone: {listening ? "on" : "off"}</p>

          <button onClick={SpeechRecognition.startListening}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
        </div>

        <br />

        <ReactQuill
          placeholder="Say somethings..."
          modules={App.modules}
          formats={App.formats}
          onChange={handleBody}
          value={body}
        />
      </div>
    </div>
  );
}

App.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
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
