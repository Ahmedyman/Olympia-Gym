import React from 'react'

export default function Buttons(props) {
    const {text,func}=props
  return (
    <button onClick={func} className="px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950  border-blue-400 border-solid blueShadwing duration-200"><p>{text}</p></button>

  )
}
