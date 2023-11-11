"use client";
import ChatList from "@/components/ChatList";
import ChatList_Search from "@/components/ChatList_Search";
import Chats from "@/components/Chats";
import EditProfile from "@/components/EditProfile";
import SideBar from "@/components/SideBar";
import React, { useEffect, useState } from "react";
import message from "@/lib/message";
import Modal from "@/components/Modal";
import Friends from "@/lib/Friends";

const Chat = () => {
  const [theme, setTheme] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(null);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [statis, setStatis] = useState(null);

  const AllMessage = message.map((mess) => {
    return {
      id: mess.id,
      name: mess.name,
      message: mess.message,
    };
  });

  useEffect(() => {
    setPlaceHolder("defaultMassages");
    setMessages(AllMessage);
    setStatis(false);
  }, []);

  const handleMessage = () => {
    setPlaceHolder("AllMessage");
    setMessages(AllMessage);
    setStatis(false);
    setGroup(null);
  };

  const handleFriend = () => {
    setPlaceHolder("AllFriend");
    setMessages(
      message.map((user) => {
        return {
          id: user.id,
          name: user.name,
          userName: user.userName,
        };
      })
    );
    setStatis(false);
    setGroup(null);
  };

  const handleActivePerson = () => {
    setPlaceHolder("Active");
    setMessages(
      message.map((msg) => {
        return {
          id: msg.id,
          name: msg.name,
          message: msg.message,
          group: true,
        };
      })
    );
    setGroup("group");
  };

  const [group, setGroup] = useState(null);
  const handleGroupList = () => {
    setPlaceHolder("All Group");
    setMessages(
      message.map((msg) => {
        return {
          id: msg.id,
          name: msg.name,
          group: true,
          message: msg.message,
        };
      })
    );

    setGroup("group");
  };

  const handleCall = () => {
    setPlaceHolder("allCall");
    const callmesthod = message.map((msg) => {
      if (msg.call === true) {
        return {
          id: msg.id,
          name: msg.name,
          call: msg.call,
          callTime: msg.callTime,
        };
      }
    });
    let sum = [];
    for (let i = 0; i < callmesthod.length; i++) {
      if (callmesthod[i] !== undefined) {
        sum.push(callmesthod[i]);
      }
    }
    setMessages(sum);
  };

  const handleToggle = () => {
    setTheme((prev) => !prev);
  };

  const handleEditProfile = () => {
    setEditProfile((prev) => !prev);
  };

  const handleModal = () => {
    setOpen((prev) => !prev);
  };

  const handleFriendReq = () => {
    setPlaceHolder("friendReq");
    let sum = [];
    for (let i = 0; i < message.length; i++) {
      for (let j = 0; j < Friends.length; j++) {
        if (Friends[j].name !== message[i].name) {
          sum.push(Friends[j]);
        }
      }
    }
    const newFriend = new Set(sum);
    setMessages(Array.from(newFriend.values()));
    setGroup(null);
  };

  // search filters =>

  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const results = messages.filter((person) =>
      person?.name.toLowerCase().includes(value)
    );
    setSearchResults(results);
  }, [value, messages]);

  const [user, setUser] = useState({});

  const handlePertiCulerUser = (id) => {
    const filterUser = messages.find((msg) => msg.id === id);
    setUser(filterUser);
    setStatis(false);
  };

  const [profileSideBar, setProfileSideBar] = useState(false);

  const handleProfile = () => {
    setProfileSideBar((prev) => !prev);
  };
  const handleCloseProfile = () => {
    setProfileSideBar((prev) => !prev);
  };
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const mails =
      typeof window !== "undefined" ? localStorage.getItem("email") : null;
    const name = mails?.split("@")[0];
    if (name === "pronab") {
      setAdmin(true);
    }
  }, []);

  const handleStatis = () => {
    setStatis(true);
  };

  const RecentUser = (id) => {
    const userFinded = message.find((user) => user.id === id);
    // setMessages(userFinded);
    setUser(userFinded);
    setStatis(false);
  };
  const [selected, setSeleted] = useState(null);
  useEffect(() => {
    const selectedUser = messages.find((users) => users.id === user.id);
    setSeleted(selectedUser);
  }, [messages, user.id]);

  const handleGroupChats = () => {
    setUser({
      id: 121,
      name: "Monitor Group Chats",
      message:
        "Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero",
    });
    setStatis(false);
  };
  const handlePrivateChats = () => {
    setUser({
      id: 122,
      name: "Monitor Private Chats",
      message:
        "What I find remarkable is that this text has been the industry s standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional ing or y thrown in. It s ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase its Greek to me and greeking have common semantic roots! (The editors published his letter in a correction headlined “Lorem Oopsum",
    });
    setStatis(false);
  };

  const handleComplanUser = () => {
    setMessages([]);
  };

  const [language, setLanguage] = useState(false);
  const handleLanguage = () => {
    // console.log("This is Language");
    setLanguage((prev) => !prev);
  };

  return (
    <div className={`flex ${theme ? "bg-gray-800" : "bg-white"}`}>
      <div className="">
        <SideBar
          handleFriendReq={handleFriendReq}
          handleModal={handleModal}
          handleMessage={handleMessage}
          handleFriend={handleFriend}
          handleCall={handleCall}
          handleEditProfile={handleEditProfile}
          theme={theme}
          handleToggle={handleToggle}
          handleActivePerson={handleActivePerson}
          handleProfile={handleProfile}
          handleCloseProfile={handleCloseProfile}
          profileSideBar={profileSideBar}
          admin={admin}
          handleGroupList={handleGroupList}
          handleStatis={handleStatis}
          handleGroupChats={handleGroupChats}
          handlePrivateChats={handlePrivateChats}
          handleComplanUser={handleComplanUser}
          handleLanguage={handleLanguage}
          language={language}
        />
      </div>
      <div className="flex w-full">
        <div
          className={`${profileSideBar ? "w-4/12" : "w-96"} ${
            editProfile ? "w-4/12" : ""
          }`}
        >
          <ChatList_Search
            user={user}
            handleSearch={handleSearch}
            placeHolder={placeHolder}
            theme={theme}
            group={group}
            messages={searchResults}
          />
          <ChatList
            group={group}
            selected={selected}
            handlePertiCulerUser={handlePertiCulerUser}
            message={message}
            AllMessage={AllMessage}
            messages={searchResults}
            theme={theme}
          />
        </div>
        <div className="">
          {open && <Modal setOpen={setOpen} open={open} theme={theme} />}
        </div>
        <div className={`${editProfile ? "w-8/12" : "w-10/12"}`}>
          <Chats
            RecentUser={RecentUser}
            statis={statis}
            user={user}
            handleModal={handleModal}
            theme={theme}
          />
        </div>
        {editProfile ? (
          <EditProfile theme={theme} handleEditProfile={handleEditProfile} />
        ) : null}
      </div>
    </div>
  );
};

export default Chat;
