import React, { useState } from 'react'

export default function Question(props) {
    const [showInfo,setShowInfo] = useState(false)

  return (
    <div className="border-b border-other-divider w-[100%] p-4">
        <label className="wrapper flex justify-between items-center hover:text-text-Soft-red hover:cursor-pointer">
            <h2 className="font-bold">{props.title}</h2>
            <button onClick={() => setShowInfo(!showInfo)}><img src={props.arrow} alt="" /></button>
        </label>
        <p>{showInfo && props.info}</p>
    </div>
  )
}
