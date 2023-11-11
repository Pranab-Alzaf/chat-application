import React from "react";
import images from "@/images/image1.jpg";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

const ProfileModal = ({ setProfile, handleProfileMessage, theme, user }) => {

  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed w-full inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        
        <div className="fixed inset-0 z-10 w-full overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className={`relative w-3/12 transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 mx-auto ${
                theme ? "bg-slate-600 text-white" : "bg-white text-black"
              }`}
            >
              <div
                onClick={() => setProfile(null)}
                className="flex justify-end m-2"
              >
                <div className="flex items-center justify-center select-none text-xl text-white cursor-pointer h-10 w-10 bg-slate-500 rounded-full">
                  X
                </div>
              </div>

              <div>
                <div
                  className={` rounded-lg overflow-hidden shadow-lg ${
                    theme ? "bg-slate-600 text-white" : "bg-white text-black"
                  }`}
                >
                  <div className="border-b px-4 pb-6">
                    <div className="text-center my-4">
                      

                      {Object.keys(user).length === 0 ? (
                        <Image
                          className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4"
                          src={images}
                          alt=""
                        />
                      ) : (
                        <img
                          className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4"
                          src={`https://api.slingacademy.com/public/sample-photos/${user?.id}.jpeg`}
                          alt="chat-user"
                        />
                      )}
                      <div className="py-2">
                        <h3 className="font-bold text-2xl mb-1">
                          {user?.name}
                        </h3>
                        <div
                          className={`inline-flex text-gray-700 items-center ${
                            theme ? "text-white" : "text-black"
                          }`}
                        >
                          <IoLocationOutline className="w-5 h-5 mr-1" />
                          Dhaka,Bangladesh
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 px-2">
                      <button
                        onClick={handleProfileMessage}
                        className="flex-1 rounded-full bg-blue-600 text-white antialiased font-bold hover:bg-blue-800 px-4 py-2"
                      >
                        Message
                      </button>
                      <button className={`flex-1 rounded-full border-2 ${theme ? "border-white text-white":"border-gray-400"} font-semibold text-black px-4 py-2`}>
                        Unfriend
                      </button>
                    </div>
                  </div>
                  <div className="border-b mb-1  px-4 py-4">
                    <div className="flex gap-2 items-center text-gray-800r mb-4">
                      <svg
                        className="h-6 w-6 text-gray-600"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          className=""
                          d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                        />
                      </svg>
                      <span>
                        <strong className="">12</strong> Friends you know
                      </span>
                    </div>
                    <div className="flex ">
                      <div className="flex justify-end mr-2">
                        <Image
                          className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                          src={images}
                          alt=""
                        />
                        <Image
                          className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                          src={images}
                          alt=""
                        />
                        <Image
                          className="border-2 border-white rounded-full h-10 w-10 -mr-2"
                          src={images}
                          alt=""
                        />
                        <span className="flex items-center justify-center bg-white text-sm text-gray-800 font-semibold border-2 border-gray-200 rounded-full h-10 w-10">
                          +14
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-b py-1">
                    <h2 className="ml-5 font-mono text-sm">Profile URL</h2>
                    <h1 className="ml-5 font-mono text-sm cursor-pointer mt-1">
                      http://localhost:3000/profile
                    </h1>
                  </div>
                  <div className="py-2">
                    <h2 className="ml-5 font-mono text-sm">Gender</h2>
                    <h1 className="ml-5 font-mono text-sm">Male</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
