const SVGComponent = (props) => (
    <svg
      width="80px"
      height="80px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>
          {
            ".a{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}"
          }
        </style>
      </defs>
      <path
        className="a"
        d="M28.764,25.966c0-4.4888-1.9362-5.9908-4.764-5.9908s-4.764,1.502-4.764,5.9908"
      />
      <path
        className="a"
        d="M18.6855,25.966h.55a0,0,0,0,1,0,0V31.29a0,0,0,0,1,0,0h-.55A1.8259,1.8259,0,0,1,16.86,29.4644V27.7919A1.8259,1.8259,0,0,1,18.6855,25.966Z"
      />
      <path
        className="a"
        d="M30.59,25.966h.55a0,0,0,0,1,0,0V31.29a0,0,0,0,1,0,0h-.55a1.8259,1.8259,0,0,1-1.8259-1.8259V27.7919A1.8259,1.8259,0,0,1,30.59,25.966Z"
        transform="translate(59.9044 57.2563) rotate(180)"
      />
      <polyline
        className="a"
        points="24 42.476 12.938 33.58 12.938 5.524 24 16.351"
      />
      <polyline
        className="a"
        points="24 42.476 9.125 35.557 9.125 7.501 24 16.351"
      />
      <polyline className="a" points="24 42.476 5.5 38.004 5.5 9.948 24 16.351" />
      <polyline
        className="a"
        points="24 42.476 35.062 33.58 35.062 5.524 24 16.351"
      />
      <polyline
        className="a"
        points="24 42.476 38.875 35.557 38.875 7.501 24 16.351"
      />
      <polyline
        className="a"
        points="24 42.476 42.5 38.004 42.5 9.948 24 16.351"
      />
    </svg>
  );
  export default SVGComponent;