import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'


export default function Textarea(props) {

  function touppercase(){
    const newtext= text.toUpperCase();
    settext(newtext)
    props.alertmessage("Your text is converted to upparcase")
  }

  function tolowercase(){
    const newtext= text.toLocaleLowerCase();
    settext(newtext)
    props.alertmessage("Your text is converted to lowercase")
  }
  
  function cleartext(){
    settext("")
    props.alertmessage("text cleared")
  }

  function copyingtext(){
    navigator.clipboard.writeText(text)
    props.alertmessage("your text has been copied")
  }

  function removespace(){
    const newtext= text.split(/[ ]+/)
    settext(newtext.join(' '))
    props.alertmessage("Extra space removed")
  }

  
  function textareachanged(event){
    settext(event.target.value)
  }
  

  const [text,settext] = useState("")
  
  return (
 <>
    <form action="" className='form' style={props.style}>
      <label className='textareaadjust' htmlFor="textarea">{props.label}</label>
      <textarea style={props.style} className='textareaadjust' name="" id="textarea" value={text} onChange={textareachanged}></textarea>
    </form>
    <div id='btndiv' >
      <button  style={props.style} className='button' onClick={touppercase} >CONVERT TO UPPERCASE</button>
      <button  style={props.style} className='button' onClick={tolowercase} >convert to lowercase</button>
      <button  style={props.style} className='button' onClick={cleartext} >Clear text</button>
      <button  style={props.style} className='button' onClick={copyingtext} >Copy</button>
      <button  style={props.style} className='button' onClick={removespace} >Remove spaces</button>

      <h3>
        The sentence has {text.length} characters and it has {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words.
      </h3>
    </div>
 </>
  )
}

Textarea.propTypes = { label: PropTypes.string }
