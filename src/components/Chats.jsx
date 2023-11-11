import Image from "next/image";
import images from "@/images/image1.jpg";
import ChatMenu from "./ChatMenu";
import { useDeferredValue, useRef, useState } from "react";
import ProfileModal from "./ProfileModal";
import { GrAttachment, GrEmoji } from "react-icons/gr";
import { BiSend } from "react-icons/bi";
import Picker from "emoji-picker-react";
import Message from "./Message";
import Statistics from "./Statistics";

const Chats = ({ theme, user,statis,RecentUser }) => {
const { id, name, message: userMessage } = user;
const [msg, setMsg] = useState(false);
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState([]);
  const inputValue = useRef(null);
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const deferredQuery = useDeferredValue(message);

  const onEmojiClick = (event) => {
    setInputStr((prevInput) => prevInput + event.emoji);
    setShowPicker(false);
  };

  const handleInputValue = (e) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      setMessage([...message,{id:message.length+1,message:inputStr}])
      setInputStr('')
    }
  };


  const handleProfileModal = () => {
    setProfile("userProfile");
  };

  const handleProfileMessage = () => {
    inputValue.current.focus();
    setProfile(null);
  };

  // document/file access ---->
  const onFilechange = (e) => {
    console.log(e.target.files);
  };
  const inputFileRef = useRef(null);
  const onBtnClick = (e) => {
    inputFileRef.current.click();
  };



  return (
    // chat box with tailwind =>
    <div>
    {
      statis === true ? <Statistics theme={theme} RecentUser={RecentUser}/> : <div>
         <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
        <div className="flex-1 flex justify-between shadow-md flex-col">
          <div className="flex-3">
            <div className="flex justify-between items-center p-1">
              <div className="flex gap-2 items-center">
                <div className="w-12 h-12 relative">
                 {Object.keys(user).length ===0 ? (<Image className="w-12 h-12 rounded-full mx-auto" src={images} alt="" />): (<img
                    className="w-12 h-12 rounded-full mx-auto"
                    src={`https://api.slingacademy.com/public/sample-photos/${id}.jpeg`}
                    alt="chat-user"
                  />)}
                  <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold ${
                      theme ? "text-white" : "text-black"
                    }`}
                  >
                    {Object.keys(user).length === 0 ? "Pronab kumar" : name}
                  </h3>
                  <p
                    className={`text-xs font-serif ${
                      theme ? "text-white" : "text-black"
                    }`}
                  >
                    Web developer
                  </p>
                </div>
              </div>
              <ChatMenu handleProfileModal={handleProfileModal} theme={theme} />
            </div>
            {profile === "userProfile" && (
              <ProfileModal
                theme={theme}
                user={user}
                setProfile={setProfile}
                handleProfileMessage={handleProfileMessage}
              />
            )}
            

          <h2 className={`text-xl py-1 mb-8 border-b-2 ${theme ? "border-slate-500":"border-gray-200"}`}></h2>
          </div>

          {/* messageInput */}
          <Message user={user} message={userMessage} outMessage={msg} />

          <div className="absolute bottom-20">
            {showPicker && (
              <Picker
                pickerStyle={{ width: "60%" }}
                className
                onEmojiClick={onEmojiClick}
              />
            )}
          </div>
          <h2 className={`text-xl py-1 border-b-2 ${theme ? "hidden":"border-gray-200"}`}></h2>
          <div className="flex-2">
            <div
              className={`write flex rounded-lg ${
                theme ? "bg-gray-400" : "bg-white"
              }`}
            >
              <div className="flex-3 cursor-pointer flex content-center items-center text-center p-4 pr-0">
                <GrEmoji
                  onClick={() => setShowPicker((val) => !val)}
                  className="w-6 h-6"
                />
              </div>
            
              <div className="flex-1">
                <textarea
                  name="message"
                  className={`w-full block outline-none py-4 px-4 bg-transparent resize-none ${
                    theme ? "placeholder:text-white" : "placeholder:text-black"
                  }`}
                  rows="1"
                  ref={inputValue}
                  onChange={(e) => setInputStr(e.target.value)}
                  placeholder="Type a message..." 

                  value={inputStr}
                  
                  onKeyUp={handleInputValue}
                ></textarea>
              </div>
              <div className=" px-3 cursor-pointer flex gap-5 content-center items-center">
                <div onClick={onBtnClick}>
                  <GrAttachment className="w-5 h-5" />
                  <input
                    type="file"
                    ref={inputFileRef}
                    onChange={onFilechange}
                    className="hidden"
                  />
                </div>
                <div className="flex-1 select-none">
                  <button className="flex gap-2 bg-primary py-2 px-2 rounded-full">
                    <BiSend className=" w-6 h-6 fill-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    }</div>
  );
};

export default Chats;
