import React from 'react';

export function ArrowUpTrayIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
      />
    </svg>
  );
}

export function DownloadIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v11.25m0 0l3-3m-3 3l-3-3M4.5 19.5h15"
      />
    </svg>
  );
}


export function ChatIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="34"
      fill="none"
      viewBox="0 0 24 25"
    >
      <path
        stroke="#676767"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M21 15.397a1.96 1.96 0 0 1-.586 1.395c-.375.37-.884.578-1.414.578H7l-4 3.945V5.535c0-.524.21-1.026.586-1.396.375-.37.884-.577 1.414-.577h14c.53 0 1.04.208 1.414.577.375.37.586.872.586 1.395z"
      ></path>
    </svg>
  );
}


export function BellIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="30"
      fill="none"
      viewBox="0 0 19 23"
    >
      <path
        stroke="#676767"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.5 17.206c5.64 0 8.248-.714 8.5-3.577 0-2.862-1.819-2.678-1.819-6.19 0-2.743-2.636-5.864-6.681-5.864S2.819 4.696 2.819 7.44c0 3.512-1.819 3.328-1.819 6.19.253 2.874 2.862 3.577 8.5 3.577"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#676767"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.889 20.174c-1.364 1.494-3.492 1.512-4.87 0"
      ></path>
    </svg>
  );
}


export function DoubleRightArrow({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="7"
      fill="none"
      viewBox="0 0 9 7"
    >
      <path
        fill="#676767"
        d="M.344.944h1.728l2.76 2.724-2.76 2.724H.344l2.772-2.724zm3.838 0H5.91l2.76 2.724-2.76 2.724H4.182l2.772-2.724z"
      ></path>
    </svg>

  );
}

export function UpDownArrow({ className = 'w-3 h-3 text-gray-400', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.5 19.5"
      fill="none"
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M1 7.47 4.53 11l3.529-3.53M1 4.53 4.53 1l3.529 3.53"
      />
    </svg>
  );
}



export function LeftArrow({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        stroke="#959595"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M9.375 11.25 5.625 7.5l3.75-3.75"
      ></path>
    </svg>

  );
}

export function RightArrow({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        stroke="#959595"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="m5.625 11.25 3.75-3.75-3.75-3.75"
      ></path>
    </svg>

  );
}

export function BlueDownArrow({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    fill="none"
    viewBox="0 0 17 16"
  >
    <rect width="16" height="16" x="0.5" fill="#FFE1D3" rx="3"></rect>
    <path
      fill="#6708CC"
      d="M8.214 12.335a.56.56 0 0 0 .795 0l2.062-2.062a.563.563 0 1 0-.795-.796L9.174 10.58V4.062a.562.562 0 1 0-1.125 0v6.518L6.946 9.477a.563.563 0 0 0-.795.796z"
    ></path>
  </svg>

  );
}

export function BlueUpArrow({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    fill="none"
    viewBox="0 0 17 16"
  >
    <rect width="16" height="16" x="0.5" fill="#FFE1D3" rx="3"></rect>
    <path
      fill="#6708CC"
      d="M8.214 3.664a.563.563 0 0 1 .795 0l2.062 2.063a.563.563 0 1 1-.795.795L9.174 5.419v6.518a.563.563 0 1 1-1.125 0V5.42L6.946 6.522a.563.563 0 0 1-.795-.795z"
    ></path>
  </svg>

  );
}
export function LogOutIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="16"
    fill="none"
    viewBox="0 0 15 16"
  >
    <path
      stroke="#676767"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      d="M5.625 13.625h-2.5a1.25 1.25 0 0 1-1.25-1.25v-8.75a1.25 1.25 0 0 1 1.25-1.25h2.5M10 11.125 13.125 8 10 4.875M13.125 8h-7.5"
    ></path>
  </svg>
  );
}


export function ProfileIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="16"
    fill="none"
    viewBox="0 0 15 16"
  >
    <path
      stroke="#676767"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      d="M12.5 13.625v-1.25a2.5 2.5 0 0 0-2.5-2.5H5a2.5 2.5 0 0 0-2.5 2.5v1.25M7.5 7.375a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
    ></path>
  </svg>
  );
}

export function SettingsIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="16"
    fill="none"
    viewBox="0 0 15 16"
  >
    <g
      stroke="#676767"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      clipPath="url(#clip0_1301_17777)"
    >
      <path d="M7.5 9.875a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75"></path>
      <path d="M12.125 9.875a1.03 1.03 0 0 0 .206 1.137l.038.038a1.25 1.25 0 1 1-1.769 1.769l-.037-.038a1.03 1.03 0 0 0-1.138-.206 1.03 1.03 0 0 0-.625.944v.106a1.25 1.25 0 0 1-2.5 0v-.056a1.03 1.03 0 0 0-.675-.944 1.03 1.03 0 0 0-1.138.206l-.037.038a1.25 1.25 0 0 1-2.04-.406A1.25 1.25 0 0 1 2.68 11.1l.038-.037a1.03 1.03 0 0 0 .206-1.138 1.03 1.03 0 0 0-.944-.625h-.106a1.25 1.25 0 0 1 0-2.5h.056a1.03 1.03 0 0 0 .944-.675 1.03 1.03 0 0 0-.206-1.138L2.63 4.95A1.25 1.25 0 1 1 4.4 3.181l.037.038a1.03 1.03 0 0 0 1.138.206h.05a1.03 1.03 0 0 0 .625-.944v-.106a1.25 1.25 0 0 1 2.5 0v.056a1.03 1.03 0 0 0 .625.944 1.03 1.03 0 0 0 1.137-.206l.038-.038A1.25 1.25 0 1 1 12.319 4.9l-.038.037a1.03 1.03 0 0 0-.206 1.138v.05a1.03 1.03 0 0 0 .944.625h.106a1.25 1.25 0 0 1 0 2.5h-.056a1.03 1.03 0 0 0-.944.625"></path>
    </g>
    <defs>
      <clipPath id="clip0_1301_17777">
        <path fill="#fff" d="M0 .5h15v15H0z"></path>
      </clipPath>
    </defs>
  </svg>
  );
}

export function CalendarIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6.667 10.167a.833.833 0 1 1 0 1.666.833.833 0 0 1 0-1.666M10 10.167a.833.833 0 1 1 0 1.666.833.833 0 0 1 0-1.666M13.334 10.167a.833.833 0 1 1 0 1.665.833.833 0 0 1 0-1.665M6.667 14.167a.833.833 0 1 1 0 1.666.833.833 0 0 1 0-1.666M10 14.167a.833.833 0 1 1 0 1.666.833.833 0 0 1 0-1.666M13.334 14.167a.833.833 0 1 1 0 1.665.833.833 0 0 1 0-1.665"
      clipRule="evenodd"
    ></path>
    <path
      fill="#fff"
      d="M17.52 3.594a2.76 2.76 0 0 0-1.963-.813h-1.114V1.667h-1.11v1.109H6.667v-1.11h-1.11v1.11H4.443a2.776 2.776 0 0 0-2.776 2.781v10a2.776 2.776 0 0 0 2.776 2.776h11.114a2.776 2.776 0 0 0 2.776-2.776v-10a2.76 2.76 0 0 0-.812-1.963m-14.254.781a1.66 1.66 0 0 1 1.177-.49h1.114V5h1.11V3.89h6.666V5h1.11V3.89h1.11a1.667 1.667 0 0 1 1.666 1.667v1.11H2.776v-1.11a1.66 1.66 0 0 1 .49-1.182m13.468 12.36a1.66 1.66 0 0 1-1.177.489H4.443a1.667 1.667 0 0 1-1.667-1.667V7.776h14.448v7.781a1.66 1.66 0 0 1-.49 1.177"
    ></path>
  </svg>
  );
}

export function GreyCalendar({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6.667 10.167a.833.833 0 1 1 0 1.666.833.833 0 0 1 0-1.666M10 10.167a.833.833 0 1 1 0 1.666.833.833 0 0 1 0-1.666M13.334 10.167a.833.833 0 1 1 0 1.665.833.833 0 0 1 0-1.665M6.667 14.167a.833.833 0 1 1 0 1.666.833.833 0 0 1 0-1.666M10 14.167a.833.833 0 1 1 0 1.666.833.833 0 0 1 0-1.666M13.334 14.167a.833.833 0 1 1 0 1.665.833.833 0 0 1 0-1.665"
      clipRule="evenodd"
    ></path>
    <path
      fill="#fff"
      d="M17.52 3.594a2.76 2.76 0 0 0-1.963-.813h-1.114V1.667h-1.11v1.109H6.667v-1.11h-1.11v1.11H4.443a2.776 2.776 0 0 0-2.776 2.781v10a2.776 2.776 0 0 0 2.776 2.776h11.114a2.776 2.776 0 0 0 2.776-2.776v-10a2.76 2.76 0 0 0-.812-1.963m-14.254.781a1.66 1.66 0 0 1 1.177-.49h1.114V5h1.11V3.89h6.666V5h1.11V3.89h1.11a1.667 1.667 0 0 1 1.666 1.667v1.11H2.776v-1.11a1.66 1.66 0 0 1 .49-1.182m13.468 12.36a1.66 1.66 0 0 1-1.177.489H4.443a1.667 1.667 0 0 1-1.667-1.667V7.776h14.448v7.781a1.66 1.66 0 0 1-.49 1.177"
    ></path>
  </svg>
  );
}