import React, { useState } from "react";
import { TbCircleDashed } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter, BsThreeDotsVertical,BsEmojiSmile } from "react-icons/bs";
import {ImAttachment} from "react-icons/im"
import Chatcard from "./Chatcard";
import kendra from "../assets/images/whatsapp-profile.jpg";
import background from "../assets/images/whatsapp-bg.jpg";
import Messagecard from "./Messagecard";
const Homepage = () => {
  const [Query, setQuery] = useState(null);
  const [currChat, setCurrChat] = useState("");
  const [content,setContent]=useState("");


  const HandleSearch = () => {};
  const HandleMessage=()=>{};
  const HandleCurrChat = () => {
    setCurrChat(true);
  };
  return (
    <div className="relative ">
      <div className="top-0  py-14 bg-[#00a884] w-full"></div>
      <div className="flex bg-[#f0f2f5] h-[85vh]  absolute left-[2vw] top-[5vw] w-[90%] ">
        <div className="left w-[40%] bg-[#e8e9ec] h-full ">
          <div className="w-full">
            <div className="flex justify-center items-center p-3">
              <div className="w-full flex justify-between items-center space-x-3">
                <div className="flex items-center justify-center">
                  <img
                    className="w-14  h-14 mr-4 rounded-full"
                    src={kendra}
                    alt={kendra}
                  />
                  <p>Shubham Ranmale</p>
                </div>

                <div className="space-x-3 text-3xl  flex">
                  <TbCircleDashed />
                  <BiCommentDetail />
                </div>
              </div>
            </div>
            <div className="relative flex justify-center items-center bg-white py-4 px-3">
              <input
                className="w-[80%] border-none outline-none bg-slate-200 rounded-md-w-[70%] pl-9 py-2 "
                type="text"
                placeholder="search or start a chat"
                onChange={(e) => {
                  setQuery(e.target.value);
                  HandleSearch(e.target.value);
                }}
                value={Query}
              />
              <AiOutlineSearch className=" left-9 top-7 absolute" />
              <BsFilter className="ml-4 text-3xl" />
            </div>
          </div>
          <div>
            {Query &&
              [1, 1, 1, 1, 1].map((item) => (
                <div onClick={HandleCurrChat}>
                  {" "}
                  <hr /> <Chatcard />
                </div>
              ))}
          </div>
        </div>

        {/*default page before chat */}
        {!currChat && (
          <div className="w-[70%] flex flex-col justify-center items-center h-full">
            <div className="max-w-[70%] text-center">
              <h1 className="text-3xl text-gray-600">My Chat Box</h1>
              <p className="my-7"> send messeges here</p>
              <img className="w-full h-full" src={background} />
            </div>
          </div>
        )}
        {currChat && (
          <div className="right w-full">
            <div className="header absolute top-0 w-[71.5%] bg-[#f0f2f5]  ">
              <div className="w-full flex justify-between">
                <div className=" py-3 space-x-4 flex px-3 items-center">
                  <img className="w-10 h-10 rounded-full" src={kendra} />
                  <p>username</p>
                </div>
                <div className="py-3 flex space-x-4 items-center px-3">
                  <AiOutlineSearch />
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>
            {/* {message card} */}
            <div className="px-10 h-[75vh] bg-blue-200  overflow-y-scroll " >
              <div className=" w-full space-y-1 flex flex-col justify-center border mt-20 py-2 " >
                {[1,1,1,1,1,1,1,1,1].map((item,i)=> <Messagecard  isReqUserMessage={i%2===0} content={"message"} /> ) }
              </div>
            </div>

            <div className="fotter  bg-[#f0f2f5] flex items-center justify-center py-2">
              <div className="flex gap-3 justify-between p-3 items-center">
                <BsEmojiSmile/>
                <ImAttachment/>

              </div>
              <input 
              className=" py-1 outline-none border-none bg-white pl-4 rounded-md w-[80%]"
              type="text"
              
              onChange={(e)=>setContent(e.target.value)}
              value={content}
              onKeyPress={(e)=>{
              if(e.key==="Enter" ){
              HandleMessage();
              setContent("")
              placeholder="Enter text"
              }
               }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
