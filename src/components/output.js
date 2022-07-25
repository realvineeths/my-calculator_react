import React from 'react'

function Output(props) {
  return (
    <>
        <input type="text" id='display' readOnly value={props.val}/>
    </>
  )
}

export default Output