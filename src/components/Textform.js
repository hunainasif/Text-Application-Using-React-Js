import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        console.log("You clicked On UpperCase")
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        console.log("CLicked On LowerCase")
    }
    const handleOnChange=(e)=>{
        console.log("You Clicked On OnChange Function")
        setText(e.target.value)
    }
    const[text,setText]=useState("Enter Text Here");
  return (
    <div className='container my-3' style={{color:props.mode=='dark'?'white':'black'}}>
        <div >
            <h1>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea value={text} style={{backgroundColor:props.mode=='light'?'white':'#243a8d',color:props.mode=='dark'?'white':'black'} }  onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-2">Convert To UpperCase</button>
            <button onClick={handleLowClick} className="btn btn-primary mx-2">Convert To LowerCase</button>
            

        </div>
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} Words -- {text.length} Characters </p>
      <p>{0.008 * text.split(" ").length} Minutes Required To read The Text</p>
      <h3>Text-PreView</h3>
      <p>{text.length>0? text:"Enter Some Text"}</p>
    </div>
  )
}
