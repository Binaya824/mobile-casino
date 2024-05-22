import React from "react";
import Player_Profile from "./Player_Profile";
import Announcment from "./Announcment";
import cardImage from "../../assets/images/cardImage.png";

const Lobby = () => {
  return (
    <div className="h-svh relative">
      <Player_Profile />
      <Announcment />
      <div
        className="border border-red-600 flex justify-center pt-2"
        style={{ height: "calc(100vh - 14.22rem)" }}
      >
        <div className="w-[22.5rem] h-[11.25rem] border border-green-600 rounded-lg relative">
          <img
            src={cardImage}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
          <div
            className="w-full h-[3.063rem] absolute bottom-0 rounded-b-lg font-kanit-light-italic font-medium flex justify-center items-center text-[#520828]"
            style={{
              background:
                "linear-gradient(182.24deg, #FBC104 18.35%, #FFFF96 57.91%, #FAC815 98.1%),radial-gradient(34.38% 92.04% at 51.6% 60.62%, rgba(255, 138, 0, 0.53) 0%, rgba(255, 138, 0, 0) 100%)",
            }}
          >
            Rummy Win
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
