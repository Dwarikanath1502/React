import React, {useState} from 'react'


export default function TextForm(props) {

const [text, setText] = useState("")

    //fun to convert uppercase
    const handleUpClick = () => {
        console.log("Upercase was clicked : " + text );
        let newText = text.toUpperCase();
        setText(newText)
    }  
    //fun to convert to lower case
    const handleLowClick = () => {
        console.log("Upercase was clicked : " + text );
        let newText = text.toLowerCase();
        setText(newText)
    }  

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }

  return (
  <>
     <div className='container'>
       <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick} >Uppercase</button>
    <button className='btn btn-primary mx-1' onClick={handleLowClick}>Lowercase</button>
   </div>
   <div className="container my-3">
       <h2>Your text summary:</h2>
       <p> {text.split(" ").length} words and {text.length} characters</p>
       <p> { 0.008 * text.split(" ").length } minutes read</p>
       <h2>Preview</h2>
       <p>{text}</p>
   </div>
  </>
  ) 
}