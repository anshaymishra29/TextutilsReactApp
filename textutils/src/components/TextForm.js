import React, {useState} from 'react'



export default function TextForm(props) {

  const myStyle = {
    marginLeft : '7px'
    
  }

    const btnUpClicked = ()=>{
        console.log("Button Clicked" + text);
        const newText = text.toUpperCase();
        setText(newText);
        // props.showAlert("converted to uppercase", "success")
    }

    const btnLowClicked = () =>{
      const newText = text.toLowerCase();
      setText(newText);
      // props.showAlert("converted to lowercase", "success")
    }

    const clearTextClicked = ()=>{
      console.log("Button Clicked" + text);
      const newText = '';
      setText(newText);
      // props.showAlert("text cleared", "success")
  }

  const reverseTextClicked = ()=>{
    console.log("Button Clicked" + text);
    const newText = text.split("").reverse("").join("");
    setText(newText);
    // props.showAlert("text reversed", "success")
}

    const handleOnChange = (event) =>{
        console.log("content changed");
        setText(event.target.value);
    }


    const removeSpaceClicked = () => {
      const newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      // props.showAlert("extra space removed", "success")
    }

    const copyTextClicked = () =>{
      const newText = document.getElementById("myBox");
      newText.select();
      navigator.clipboard.writeText(newText.value);
      // props.showAlert("copied to clipboard", "success")
    }

     const [text, setText] = useState('');
    // setText('Enter text');  // rite way to update
    // text = 'Enter text';    // wrong way to update
  return (
   <> <div className='container'>
    <div className="mb-3">
      <label htmlFor="myBox" className="form-label">{props.heading}</label>
      <textarea className="form-control " value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <div    className='container mx - 2'><button disabled={text.length==0} type='button' className='btn btn-primary' onClick={btnUpClicked}>Convert to UpperCase</button>
    <button disabled={text.length==0} className='btn btn-primary mx - 2 my-2' style={myStyle} onClick={btnLowClicked}>Convert to LowerCase</button>
    <button disabled={text.length==0} className='btn btn-primary mx - 2 my-2' style={myStyle} onClick={clearTextClicked}>Clear Text</button>
    <button disabled={text.length==0} className='btn btn-primary mx - 2 my-2' style={myStyle} onClick={reverseTextClicked}>Reverse Text</button>
    <button disabled={text.length==0} className='btn btn-primary mx - 2 my-2' style={myStyle} onClick={removeSpaceClicked}>Remove extra space</button>
    <button disabled={text.length==0} className='btn btn-primary mx - 2 my-2' style={myStyle} onClick={copyTextClicked}>Copy Text</button>
    </div>
    </div>
    <div className="container my - 4">
        <h1>Your text summay</h1>
        <p>{text.split(' ').filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
        <p>{0.008 * (text.length)} minuts to read this artical</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  )
}
