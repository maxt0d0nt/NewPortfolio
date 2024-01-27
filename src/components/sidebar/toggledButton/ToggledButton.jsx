import React from 'react'

function ToggledButton({setOpen}) {
  return ((
    <button onClick={() => setOpen((prev)=> !prev)}>
      X
        </button>
  ))
}

export default ToggledButton