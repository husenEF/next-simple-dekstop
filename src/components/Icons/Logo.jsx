function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      {...props}>
      <path
        fill="url(#paint0_linear_20_167)"
        d="M11 4a7 7 0 106.326 10h4.26c-1.306 4.617-5.55 8-10.586 8-6.075 0-11-4.925-11-11S4.925 0 11 0c5.035 0 9.28 3.383 10.586 8h-4.26A7 7 0 0011 4z"></path>
      <defs>
        <linearGradient
          id="paint0_linear_20_167"
          x1="15.65"
          x2="10.614"
          y1="0"
          y2="21.959"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#BEDCFF"></stop>
          <stop offset="0.411" stopColor="#8EB5FF"></stop>
          <stop offset="1" stopColor="#C6B3FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Logo;
