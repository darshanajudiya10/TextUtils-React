import React, {useState} from 'react';

  

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Your text is in uppercase", "success");
    }

    const handleloClick = () =>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Your text is in lowercase", "success");
    }

    const handleClearClick = () =>{
        setText('');
    }

    const handleCopyClick = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!", "success");
    }

    const handleRemoveExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const handleCapitalizeClick = () =>{
        let newText = text.split(" ").map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(" ");
        setText(newText);
        props.showAlert("Text has been capitalized", "success");
    }

    const handleReverseClick = () =>{
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text has been reversed", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("Onchange");
        setText(event.target.value);
    }


    const [ text, setText] = useState('');
    const isDark = (props.mode ?? '').toString().trim().toLowerCase() === 'dark';
  return (
        <>
        <div className="container " style={{color: isDark ? 'white' : 'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
                <textarea
                    className="form-control"
                    id="MyBox"
                    value={text}
                    style={{
                        backgroundColor: isDark ? '#13466e' : 'white',
                        color: isDark ? 'white' : 'black'
                    }}
                    onChange={handleOnChange}
                    rows="8"></textarea>

            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 btn-hover-effect" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 btn-hover-effect" onClick={handleloClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 btn-hover-effect" onClick={handleCapitalizeClick}>Capitalize Words</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1 btn-hover-effect" onClick={handleCopyClick}>Copy to Clipboard</button>
            <button disabled={text.length===0} className="btn btn-warning mx-1 my-1 btn-hover-effect" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1 btn-hover-effect" onClick={handleReverseClick}>Reverse Text</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1 btn-hover-effect" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container"  style={{color: isDark ? 'white' : 'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}
