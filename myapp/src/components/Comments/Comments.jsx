import React from 'react'
import './Comments.css'


export default function Comments(props) {
  return (
    <div id='comment_body'>
        < div id='comment_det'>
            <img src='data:image/jpeg;base64,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' id='comment_img'></img>
           {"    "}{(props.name)?(props.name):("anonymous")}
        </div>
      <div id='comment_des'>{props.text}</div>
          <div id='comment_time'>Time : 12:52:35</div>
    </div>
  )
}
