import React, { Children } from 'react'
import './topicBox.css'

export default function TopicBox(props) {

  const a = "Dynamic"
  const b = "Topic"
  const p = 10
  const q = 9
  const r = p-q
  return (
    <div>
        <div className="topicBox">
            <span className="text"> {a} {b} {r} version {props.num} and version type is {props.letter} </span> 
            {props.children}
        </div>
    </div>
  )
}
