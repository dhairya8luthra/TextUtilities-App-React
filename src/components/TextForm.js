import React,{useState} from 'react'  

export default function TextForm(props) {
   const [text,setText] = useState('Enter text here');
   const handleUpClick = ()=>{
       let newText=text.toUpperCase();
       setText(newText);
   }
   const handleLoClick = ()=>{
       let newText=text.toLowerCase();
       setText(newText);
   }
   const handSortClick = ()=>{
       let wordArr=text.toLowerCase().split(" ");
       wordArr=wordArr.sort();
       let newText=wordArr.join(' ');
       setText(newText);
   }
   const handClearClick = ()=>{
       let newText="";
       setText(newText);
   }
   const handCopyClick = () => {
    const textArea = document.querySelector('.form-control');
  
    if (textArea) {
      const textToCopy = textArea.value;
      
      const tempInput = document.createElement('input');
      tempInput.value = textToCopy;
      document.body.appendChild(tempInput);
      tempInput.select();
  
      try {
        document.execCommand('copy');
        console.log('Text copied to clipboard');
      } catch (error) {
        console.error('Error copying text to clipboard:', error);
      }
  
      document.body.removeChild(tempInput);
    } else {
      console.warn('Textarea element with class "form-control" not found');
    }
  
   }
   const handleOnChange = (event)=>{
    setText(event.target.value);
   }
   

  return (
    <div className='container mx-2 justify-content-between'>
        <h1 style={(props.mode==='dark')?{color:'white'}:{color:'black'}}>{props.heading}</h1>
    <div className="mb-3">
<label htmlFor="exampleFormControlTextarea1" class="form-label"></label>
<textarea className="form-control" id="mybox" rows={props.rows} value={text} onChange={handleOnChange} 
style={(props.mode==='dark')?{color:'white',backgroundColor:'grey'}:{color:'black',backgroundColor:'white'}}></textarea>
</div>
<button className='btn btn-primary primary-outline mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary primary-outline mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
<button className='btn btn-primary primary-outline mx-2' onClick={handSortClick}>Arrange Alphabetically</button>
<button className='btn btn-primary primary-outline mx-2' onClick={handCopyClick}>Copy to Clipboard</button>
<button className='btn btn-primary primary-outline mx-2' onClick={handClearClick}>Clear</button>
    <div className="container my-3">
        <h2 style={(props.mode==='dark')?{color:'white'}:{color:'black'}}>Text Summary</h2>
        <p style={(props.mode==='dark')?{color:'white'}:{color:'black'}}>Your Text has {text.split(" ").length} words and {text.length} characters</p>
        <p style={(props.mode==='dark')?{color:'white'}:{color:'black'}}>Around {0.008*text.split(" ").length} minutes to read</p>
        <h2 style={(props.mode==='dark')?{color:'white'}:{color:'black'}}>Preview</h2>
        <p style={(props.mode==='dark')?{color:'white'}:{color:'black'}}>{(text==='Enter text here')?'Enter Text to preview':text}</p>
    </div>
    </div>
  )
}


