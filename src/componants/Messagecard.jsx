import React from 'react'

const Messagecard = ({isReqUserMessage,content}) => {
  return (
    <div className={`py-2 px-2 rounded-md max-w-full ${isReqUserMessage?"self-start bg-white":"self-end bg-[#d9fdd3] "}` } >
      <p>{content} </p>
     
    </div>
  )
}

export default Messagecard
