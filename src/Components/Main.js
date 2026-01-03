import React from 'react'
import { useState } from 'react';

export default function Main() {
  const [ text, setText ] = useState("");
  const handleChange=(event)=>{
    setText(event.target.value);
  }
  const makeUpperCase=()=>{
    var newText=text.toUpperCase();
    setText(newText);
  }
  const makeLowerCase=()=>{
    var newText=text.toLowerCase();
    setText(newText);
  }
  const clearText=()=>{
    setText("");
  }
  return (
    <div>
        <h3 className='p-3 text-center'>Welcome to Word Counter</h3>
        <div className="container my-3">
            <textarea className="form-control" placeholder=" Please Enter your text here" value={text} onChange={handleChange} id="floatingTextarea2" style={{"height": "200px"}}/>
        </div>
        <div className="d-grid gap-2 d-md-block text-center mb-4">
            <button type="button" className="btn btn-outline-success mx-2" onClick={makeUpperCase}>Make Uppercase</button>
            <button type="button" className="btn btn-outline-info mx-2" onClick={makeLowerCase}>Make Lower Case</button>
            <button type="button" className="btn btn-outline-danger mx-2" onClick={clearText}>Clear Text</button>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Counting Word</h5>
                <p className="card-text">You have Written <b>{text.split(" ").length}</b> Words</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Counting Character</h5>
                <p className="card-text">You have Written <b>{text.length}</b> Characters</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

