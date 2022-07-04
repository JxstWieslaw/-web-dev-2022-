import React from "react";
import './App.css'
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const {
    transcript,
    listening,
    interimTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleListen = (event) => {
    if (listening) SpeechRecognition.stopListening();
    else SpeechRecognition.startListening();
    event.target.classList.toggle("record");
  };

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="container">
      <p>Red button to start/stop recording your voice.</p>
      Black button to Reset.
      <div className="wrapper">
        <button className="button start" onClick={handleListen} />
        <button className="button reset" onClick={SpeechRecognition.resetTranscript} />
        {/* <div id="interim" className="interim">
        {interimTranscript}
      </div> */}
        <div id="final" className="final">
          {transcript}
        </div>
      </div>
      <p>Note: This Voice Recognition only supports Google Chrome.</p>
    </div>
  );
};
export default App;
