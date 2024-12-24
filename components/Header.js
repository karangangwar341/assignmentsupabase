export default function Header() {
  return (
    <header className=" text-black container gap-20 bg-gray-100 flex justify-between items- p-4">
      {/* Search Input */}
      <div className="flex items-center  w-full">
        <input
          type="text"
          placeholder="Search your course"
          className="px-4 py-3 w-full  rounded-xl"
        />
      </div>

      {/* Icons and Profile */}
      <div className="flex items-center w-[640px] space-x-6">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z"
              fill="#808281"
            />
          </svg>
        </button>
        <button className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z"
              fill="#808281"
            />
          </svg>
          <span className="absolute w-2 h-2 top-0 right-0 border-[0.5px] border-white bg-red-500 text-black rounded-full px-0"></span>
     
        </button>
        <button className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 7C5 6.17157 5.67157 5.5 6.5 5.5C7.32843 5.5 8 6.17157 8 7C8 7.82843 7.32843 8.5 6.5 8.5C5.67157 8.5 5 7.82843 5 7ZM6.5 3.5C4.567 3.5 3 5.067 3 7C3 8.933 4.567 10.5 6.5 10.5C8.433 10.5 10 8.933 10 7C10 5.067 8.433 3.5 6.5 3.5ZM12 8H20V6H12V8ZM16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17ZM17.5 13.5C15.567 13.5 14 15.067 14 17C14 18.933 15.567 20.5 17.5 20.5C19.433 20.5 21 18.933 21 17C21 15.067 19.433 13.5 17.5 13.5ZM4 16V18H12V16H4Z"
              fill="#808281"
            />
          </svg>
          
        </button>
        <button className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_1_77)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.10487 8.25198C5.10487 5.22293 7.89864 2 12 2C16.1014 2 18.8951 5.22293 18.8951 8.25198C18.8951 8.95001 18.9837 9.42413 19.0977 9.77788C19.2123 10.1335 19.3649 10.4089 19.5563 10.7296C19.5757 10.7622 19.5959 10.7958 19.6168 10.8304C19.7933 11.1239 20.0149 11.4922 20.1835 11.9338C20.3805 12.4499 20.5 13.0419 20.5 13.7957C20.5 13.8246 20.4988 13.8534 20.4963 13.8821C20.4278 14.6723 20.1909 15.3872 19.7256 15.9898C19.263 16.5888 18.6318 17.0029 17.8976 17.2908C16.4776 17.8476 14.4844 18 12 18C9.5171 18 7.52388 17.8501 6.10386 17.2947C5.36936 17.0075 4.73769 16.5936 4.27473 15.9936C3.8092 15.3903 3.57239 14.6741 3.50374 13.8821C3.50125 13.8534 3.5 13.8246 3.5 13.7957C3.5 13.0419 3.61952 12.4499 3.81651 11.9338C3.98506 11.4922 4.20666 11.1239 4.38321 10.8304C4.40406 10.7958 4.42427 10.7622 4.4437 10.7296C4.63507 10.4089 4.78771 10.1335 4.9023 9.77788C5.0163 9.42413 5.10487 8.95001 5.10487 8.25198ZM12 4C8.96272 4 7.10487 6.36755 7.10487 8.25198C7.10487 9.12655 6.99282 9.81127 6.80591 10.3913C6.61959 10.9695 6.37101 11.4028 6.16116 11.7545C6.14116 11.788 6.12175 11.8204 6.10292 11.8519C5.91723 12.1621 5.78712 12.3795 5.68501 12.647C5.58401 12.9116 5.50458 13.2483 5.50019 13.7517C5.54698 14.2236 5.67913 14.5398 5.85815 14.7718C6.04503 15.014 6.34162 15.2402 6.83235 15.4321C7.86281 15.8352 9.50799 16 12 16C14.4914 16 16.137 15.8329 17.1675 15.4288C17.6586 15.2363 17.9555 15.0096 18.1426 14.7674C18.3216 14.5356 18.4533 14.2205 18.4998 13.7517C18.4954 13.2483 18.416 12.9116 18.315 12.647C18.2129 12.3795 18.0828 12.1621 17.8971 11.8519C17.8783 11.8204 17.8588 11.788 17.8388 11.7545C17.629 11.4028 17.3804 10.9695 17.1941 10.3913C17.0072 9.81127 16.8951 9.12655 16.8951 8.25198C16.8951 6.36755 15.0373 4 12 4ZM9.35523 19.2356C9.77739 18.8795 10.4083 18.9331 10.7644 19.3552C11.1597 19.8239 11.6086 20.0011 12.0013 20C12.3956 19.9989 12.8446 19.8178 13.2363 19.3544C13.5929 18.9326 14.2239 18.8798 14.6456 19.2363C15.0674 19.5929 15.1202 20.2239 14.7637 20.6456C14.0348 21.5077 13.0495 21.9971 12.0068 22C10.9625 22.0028 9.97158 21.5172 9.23562 20.6448C8.87953 20.2226 8.93308 19.5917 9.35523 19.2356Z"
                fill="#808281"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_77">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="absolute w-2 h-2 top-0 right-1 border-[0.5px] border-white bg-red-500 text-black rounded-full px-0"></span>
        </button>
        <img
          src="/image.png"
          alt="Profile"
          className="w-10 h-10 rounded-[10px]"
        />
        <span className="font-semibold">Adeline H. Dancy</span>
      </div>
    </header>
  );
}
