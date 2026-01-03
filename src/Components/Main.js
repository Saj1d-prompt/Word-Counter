import React from 'react'

export default function Main() {
  return (
    <div>
        <h3 className='p-3 text-center'>Welcome to Word Counter</h3>
        <div className="container my-3">
            <textarea className="form-control" placeholder=" Please Enter your text here" id="floatingTextarea2" style={{"height": "200px"}}/>
        </div>
        <div className="d-grid gap-2 d-md-block text-center mb-4">
            <button type="button" className="btn btn-outline-success mx-2">Make Uppercase</button>
            <button type="button" className="btn btn-outline-info mx-2">Make Lower Case</button>
            <button type="button" className="btn btn-outline-danger mx-2">Clear Text</button>
        </div>
    </div>
  )
}

