import React from "react";

const Menu = () => {
  return (
    <div
      className="absolute bottom-[10rem] right-0 h-[3rem] w-[3rem] py-[.14rem] pl-[.14rem] rounded-l-xl"
      style={{
        background:
          "linear-gradient(272.85deg, #EEB775 8.12%, #B88624 31.05%, #FED12C 53.98%, #FFFCF1 76.91%, #FFC200 99.84%)",
      }}
    >
      <div
        className="rounded-l-xl h-full flex justify-center items-center"
        style={{
          background:
            "linear-gradient(180deg, #533326 18.15%, #251E10 87.18%, #24100A 100%)",
        }}
      >
        <svg
          width="28"
          height="20"
          viewBox="0 0 28 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="translate-x-[.14rem]"
        >
          <path
            d="M26.8 8H1.2C0.0959998 8 0 8.894 0 10C0 11.106 0.0959998 12 1.2 12H26.8C27.904 12 28 11.106 28 10C28 8.894 27.904 8 26.8 8ZM26.8 16H1.2C0.0959998 16 0 16.894 0 18C0 19.106 0.0959998 20 1.2 20H26.8C27.904 20 28 19.106 28 18C28 16.894 27.904 16 26.8 16ZM1.2 4H26.8C27.904 4 28 3.106 28 2C28 0.894 27.904 0 26.8 0H1.2C0.0959998 0 0 0.894 0 2C0 3.106 0.0959998 4 1.2 4Z"
            fill="url(#paint0_linear_1001_116)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1001_116"
              x1="14"
              y1="0"
              x2="14"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFAE8" />
              <stop offset="1" stop-color="#D0B395" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Menu;
