import React, { useState } from "react";
import { TbCircleDashed } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import {BsFilter} from "react-icons/bs"
import Chatcard from "./Chatcard";
import kendra from "../assets/images/whatsapp-profile.jpg"
import background from "../assets/images/whatsapp-bg.jpg"




const Homepage = () => {
  const [Query,setQuery]=useState(null);
 
  const HandleSearch=()=>{

  }
  return (
    <div>
      <div className="top-0 py-14 bg-[#00a884] w-full"> hello</div>
      <div className="flex bg-[#f0f2f5] h-[90vh] absolute top-6 left-6 w-full ">
        <div className="left w-[30%] bg-[#e8e9ec] h-full ">
          <div className="w-full">
            <div className="flex justify-center items-center p-3">
              <div className="w-full flex justify-between items-center space-x-3">
                
                  <div className="flex items-center justify-center">
                     <img className="w-14  h-14 mr-4 rounded-full" src={kendra} alt={kendra} />
                    <p>Shubham Ranmale</p>
                  </div>
                
                <div className="space-x-3 text-3xl  flex">
                <TbCircleDashed />
                <BiCommentDetail />
                </div>
              </div>
            </div>
            <div className="relative flex justify-center items-center bg-white py-4 px-3"> 
            <input className="w-[80%] border-none outline-none bg-slate-200 rounded-md-w-[70%] pl-9 py-2 " 
            type="text"
            placeholder="search or start a chat"
            onChange={(e)=>{
              setQuery(e.target.value)
              HandleSearch(e.target.value)
            }} 
            value={Query}
            />
            <AiOutlineSearch className=" left-9 top-7 absolute" />
            <BsFilter className="ml-4 text-3xl"/>
            </div>

          </div>
          <div>
            { Query && [1,1,1,1,1].map((item)=>
            <div> <hr/> <Chatcard/></div>
            )}
          </div>
        </div>


         {/*default page before chat */}
          <div className="w-[70%] flex flex-col justify-center items-center h-full">
           <div className="max-w-[70%] text-center">
           <img src={background} />
            <h1 className="text-4xl text-gray-600">My Chat Box</h1>
            <p className="my-9"> send messeges here</p>
           </div>
          </div>
        
      </div>
    </div>
  );
};

export default Homepage;
