import React,{useState} from 'react'

export default function TextForm(props) {
  function handleUpClick(){
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Upper Case","success");
  }

  function handleUpperText(event){
    setText(event.target.value);
  }

  function handleLoClick(){
    setText(text.toLowerCase());
    props.showAlert("Coverted to Lower Case","success");
  }

  function handleClear(){
    setText("");
    props.showAlert("All text is Cleared","success");
  }

  function handleSpaces(){
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra space is removed","success");
  }

  const [text,setText] = useState("");
  return (
    <>
      <div>
        <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <h1>{props.heading}</h1>
        </div>
          <div className='mb-3'>
              <textarea className='form-control' value={text} onChange={handleUpperText} id='fromcontrol' rows={10}></textarea>
          </div>
          <button disabled = {text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled = {text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
          <button disabled = {text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleClear}>Clear Text</button>
          <button disabled = {text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleSpaces}>Remove Extra Space</button>
      </div>
      <div className={`container my-3 text-${props.mode === 'light' ? 'dark': 'light'}`}>
        <h4>Your text summary</h4>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characers </p>
        <h4>Time Required To Read The Above Text</h4>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length}</p>
        <h5>Preview</h5>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
      </div>
    </>
  )
}
