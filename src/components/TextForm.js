import React from 'react' ;
import { useState } from 'react'; 
import {useSpeechSynthesis} from 'react-speech-kit';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
export default function TextForm(props)
 {

  const {speak}=useSpeechSynthesis();
  const handleOnListen=()=>
    {
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
      SpeechRecognition.startListening({ continuous:true, language: 'en-IN'});
    
    }
    const {trascript ,browserSupportsSpeechRecognition} =useSpeechRecognition();
    const handleOnClick=()=>{
       
        let newText=text.toUpperCase();
        setText(newText);
       
    }
    const handleOnClicks=()=>{
     
      let newText=text.toLowerCase();
      setText(newText);
     
  }
  const handleOnClear=()=>{
 
    let newText="";
    setText(newText);
   
}
     const handleOnChange=(event)=>{
      setText(event.target.value);
     }
     const handleOnCopy=()=>{
 
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text is Copied to Clipboard","success");
     
  }
  const handleOnSpaces=()=>
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" ")) ; 
    }
   
  
   const handleOnSpeech=()=>
   {
   
    speak({text:text})
   }
    const[text,setText]=useState('');
  
  return (
    
<div style={{backgroundColor:props.mode==='dark'?'grey':'white'}} className="container">
<h1  >{props.heading}</h1>     
<div class="mb-3">

  <textarea  className="form-control" id="myBox" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} rows="8"></textarea>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnClick}>Convert to higher</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnClicks}>Convert to lower</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnClear}>Clear text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnCopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnSpaces}>Remove Extra Space</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnSpeech}>Text Speak</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleOnListen}>Start Listening</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={SpeechRecognition.stopListening}>Stop Listening</button>
</div>
<div className ="container my-3" style={{backgroundColor:props.mode==='dark'?'grey':'white'}} >
  <h2>There is a Summary of your text</h2>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} number of word  {text.length} is number of character </p>
</div>
</div>
  )
}

