import React from 'react'
import kendra from "../assets/images/whatsapp-profile.jpg"
function Chatcard() {
  return (
    <div className='flex items-center justify-center py-2 group cursor-pointer'>
        <div className='w-[20%]'>
            <img src={kendra} className='w-14  h-14  rounded-full'/>
        </div>
        <div className="  pl-5 w-[80%]">
            <div className="flex items-center justify-between">
                <p className="text-lg">username</p>
                <p className="text-sm">timestamp</p>
            </div>
            <div className="flex justify-between items-center">
                <p>message...</p>
                <div className="flex space-x-2 items-center">
                    <p className="text-xs py-1 px-2 text-white bg-green-500 rounded-full ">5</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Chatcard
