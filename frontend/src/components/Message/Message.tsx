"use client";
import React, { useState } from "react";
import OpenNotification from "../shared/Notification";
import Preview from "../Messenger/Preview";
import Inbox from "../Messenger/Inbox";

const Message: React.FC = () => {
  const [inboxToggle, setInboxToggle] = useState<boolean>(false);

  const [user, setUser] = useState<string>("");
  {
    console.log("user", user);
  }
  return (
    <div className="min-h-screen max-w-screen font-sans flex items-center justify-center bg-slate-100 text-black">
      <OpenNotification />

      <div className="md:w-[63rem] w-full md:h-[94vh] h-screen grid grid-rows-1 grid-cols-6 md:rounded-xl bg-white shadow-lg shadow-slate-400">
        <Preview
          inboxToggle={inboxToggle}
          setInboxToggle={setInboxToggle}
          setUser={setUser}
        />

        <Inbox
          user={user}
          inboxToggle={inboxToggle}
          setInboxToggle={setInboxToggle}
        />
      </div>
    </div>
  );
};

export default Message;
