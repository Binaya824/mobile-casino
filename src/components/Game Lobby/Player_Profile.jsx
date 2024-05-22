import React from "react";
import muteBtn from "../../assets/icons/MuteButton.png";
import notiBtn from "../../assets/icons/Notification.png";
import rupeeIcon from "../../assets/icons/iconRupee.png";

const PlayerProfile = () => {
  return (
    <div
      className="flex h-[5.438rem] relative"
      style={{
        background:
          "linear-gradient(181.94deg, #FBC104 -16.4%, #FFFF96 46.51%, #FAC815 110.43%)",
      }}
    >
      <div className="h-full w-full absolute flex justify-center overflow-hidden">
        <div
          className="absolute w-[12.313rem] h-[2.375rem] top-[-0.688rem] filter blur-[0.606rem] rounded-b-[8rem]"
          style={{
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            background:
              "linear-gradient(0deg, #EFA109 32.53%, rgba(243, 187, 3, 0.35) 100%), linear-gradient(0deg, #EFA109 32.53%, rgba(243, 187, 3, 0.35) 100%)",
          }}
        ></div>

        <div
          className="absolute w-[12.313rem] h-[1.188rem] top-[4rem] filter blur-[0.606rem] rounded-b-[8rem]"
          style={{
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            background:
              "linear-gradient(0deg, #EFA109 32.53%, rgba(243, 187, 3, 0.35) 100%), linear-gradient(0deg, #EFA109 32.53%, rgba(243, 187, 3, 0.35) 100%)",
            transform: "rotate(180deg)",
          }}
        ></div>
      </div>

      <div className="h-full w-full flex justify-end items-center overflow-hidden pt-2 px-5">
        <div className="absolute top-[2.6rem] left-[.4rem] flex flex-col justify-center items-center">
          <p className="text-[#520828] text-[0.875rem] font-kanit-light leading-[.6rem]">
            ID:93892459
          </p>
          <p className="text-[#520828] text-[0.875rem] font-semibold font-kanit-light">
            Player_67ztl
          </p>
          <div className="w-[8.563rem] flex justify-center items-center">
            <span
              className="h-[1.75rem] w-[1.75rem] relative flex items-center justify-center border-2 border-[#431000] z-10"
              style={{
                background:
                  "radial-gradient(34.38% 92.04% at 51.6% 60.62%, rgba(255, 138, 0, 0.53) 0%, rgba(255, 138, 0, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, linear-gradient(182.24deg, #FBC104 18.35%, #FFFF96 57.91%, #FAC815 98.1%)",
                borderRadius: "10px",
              }}
            >
              <img src={rupeeIcon} alt="" className="" />
            </span>
            <span
              className="text-[#FFE177] text-[1.02rem] font-normal font-kanit-light px-1 border-2 border-[#C69500] rounded-[10px] -translate-x-[.35rem]"
              style={{
                background:
                  "linear-gradient(180deg, #431000 18.15%, #4E1604 87.18%, #280A01 100%)",
              }}
            >
              20,00,00.70
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <img src={notiBtn} alt="" className="w-[1.75rem]" />
          <img src={muteBtn} alt="" className="w-[1.75rem]" />
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
