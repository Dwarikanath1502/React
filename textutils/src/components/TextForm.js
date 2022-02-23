import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("")
    
    //fun to convert uppercase
    const handleUpClick = () => {
        console.log("Upercase was clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    //fun to convert to lower case
    const handleLowClick = () => {
        console.log("LowerCase was clicked : " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    //fun to convert to Capital case
    const handleCapitalClick = () => {
        console.log("Capilatize was clicked : " + text);
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText)
    }
    //fun to clear text
    const handleClearClick = () => {
        console.log("Claer text was clicked : " + text);
        let newText = '';
        setText(newText)
    }
    //copy text
    const handleCopy = () => {
        console.log('copy to clipboard');
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    //handle extra space
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick} >Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowClick}>Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleCapitalClick}>Capitalize</button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove Extra Space</button>
                <button className='btn btn-danger mx-1' onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary:</h2>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <p> {0.008 * text.length>0?text.trim().split(" ").length : 0} minutes read</p>
                <h2>Preview</h2>
                {/* <p>{text.length > 0 ? text : "Your text preview will appear here!"}</p> */}
                <p>{text===''? "Enter your text to preview" : text}</p>
            </div>
        </>
    )
}
