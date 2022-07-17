import * as React from "react";

function LogoIcon(props) {
  return (
    <svg
      width={36}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M33.833.167H2.167A1.583 1.583 0 00.583 1.75v6.333a4.75 4.75 0 003.167 4.465V30.25a1.584 1.584 0 001.583 1.583h25.334a1.584 1.584 0 001.583-1.583V12.548a4.75 4.75 0 003.167-4.465V1.75A1.583 1.583 0 0033.833.167zM22.75 3.333h3.167v4.75a1.583 1.583 0 11-3.167 0v-4.75zm-6.333 0h3.166v4.75a1.584 1.584 0 01-3.166 0v-4.75zm-6.334 0h3.167v4.75a1.583 1.583 0 11-3.167 0v-4.75zm-4.75 6.334A1.583 1.583 0 013.75 8.083v-4.75h3.167v4.75a1.583 1.583 0 01-1.584 1.584zm15.834 19h-6.334v-6.334a3.167 3.167 0 016.334 0v6.334zm7.916 0h-4.75v-6.334a6.333 6.333 0 00-12.666 0v6.334h-4.75V12.548a5.018 5.018 0 001.583-.95 4.75 4.75 0 006.333 0 4.75 4.75 0 006.334 0 4.75 4.75 0 006.333 0 5.018 5.018 0 001.583.95v16.119zM32.25 8.083a1.583 1.583 0 11-3.167 0v-4.75h3.167v4.75z"
        fill="#F2F2F2"
      />
    </svg>
  );
}

export default LogoIcon;