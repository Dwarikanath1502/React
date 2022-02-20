import React, {useState} from 'react'


export default function TextForm(props) {

const [text, setText] = useState("Enter text here")


    const handleUpClick = () => {
        console.log("Upercase was clicked!");
        setText("You have clicked on handleUpClicked")
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }

  return (
   <div>
       <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleUpClick}>Uppercase</button>
   </div>
  )
}
