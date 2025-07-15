// src/components/Logo.tsx
import React from "react";

interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const Logo: React.FC<LogoProps> = ({ className = "", width = 200, height = 150 }) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 787.2 267.6"
    width={width}
    height={height}
    className={className}
    xmlSpace="preserve"
  >
    <style type="text/css">
      {`
        .st0{fill:#004F5F;}
        .st1{fill:#B7E000;}
        .st2{fill:#FFB21E;}
        .st3{fill:#00A09A;}
        .st4{fill:#EC008C;}
        .st5{fill:#FF6200;}
        .st6{fill:#FFFFFF;}
      `}
    </style>
    <g>
      <circle className="st0" cx="134.4" cy="134.4" r="134.4" />
      <circle className="st1" cx="134.4" cy="134.4" r="116.2" />
      <polygon className="st0" points="112.6,67.2 156.1,189.3 200.3,133.5 188.6,133.5 212.1,119.2 184.4,119.2 203.2,110.4 156.2,94.5 112.6,67.2" />
      <polygon className="st2" points="156.1,189.3 94.8,167.7 111.9,150.6 94.5,151.7 112.3,132.5 127.4,136.3 104.4,122.8 112.6,67.2 156.1,189.3" />
      <polygon className="st3" points="112.3,132.5 94.5,151.7 127.4,136.3" />
      <polygon className="st4" points="104.4,122.8 127.4,136.3 112.3,132.5" />
      <polygon className="st5" points="104.4,122.8 127.4,136.3 111.9,150.6" />
      <polygon className="st6" points="144.6,111.9 152.4,119.7 160.2,111.9 152.4,104.1 144.6,111.9" />
    </g>
    <g>
      <path className="st0" d="M291.4,165.2h-14.6L266,126h11.2l7.8,25.5l8-25.5h11L291.4,165.2z" />
      <path className="st0" d="M317.2,165.2v-3.7c-2,2.8-5.6,4.3-9.4,4.3c-7.8,0-12.3-5.1-12.3-13.2v-24.3h10.5v22.1c0,3.8,1.9,6,5.2,6c3.1,0,5.5-2.2,5.5-6.1v-21.9h10.5v36.8H317.2z" />
      <path className="st0" d="M346.7,165.2v-2.5c-1.8,1.9-4.6,3-7.9,3c-6.6,0-10.8-4.1-10.8-10.1c0-5.9,4.3-9.6,11.5-9.6c2.5,0,5.1,0.5,7.2,1.4v-0.2c0-2.5-1.9-4.1-5-4.1c-2.7,0-5.3,1-7.9,2.6l-3.5-6.8c4-2.4,8.3-3.6,13.1-3.6c8.3,0,13,4.2,13,11.5v18.3H346.7z M346.7,153.4c-1.4-0.9-3.3-1.4-5.2-1.4c-2.9,0-4.6,1.3-4.6,3.5c0,2.2,1.7,3.6,4.3,3.6c2.3,0,4.2-1.2,5.5-3V153.4z" />
      <path className="st0" d="M379.4,165.2l-5.8-10.4h-2.4v10.4h-10.5v-47.2h10.5v28.7h2.2l5.4-9.3h12.1l-8.3,13.3l9.5,14.5H379.4z" />
      <path className="st0" d="M405.2,165.2v-2.5c-1.8,1.9-4.6,3-7.9,3c-6.6,0-10.8-4.1-10.8-10.1c0-5.9,4.3-9.6,11.5-9.6c2.5,0,5.1,0.5,7.2,1.4v-0.2c0-2.5-1.9-4.1-5-4.1c-2.7,0-5.3,1-7.9,2.6l-3.5-6.8c4-2.4,8.3-3.6,13.1-3.6c8.3,0,13,4.2,13,11.5v18.3H405.2z M405.2,153.4c-1.4-0.9-3.3-1.4-5.2-1.4c-2.9,0-4.6,1.3-4.6,3.5c0,2.2,1.7,3.6,4.3,3.6c2.3,0,4.2-1.2,5.5-3V153.4z" />
      <path className="st0" d="M419.7,165.2v-47.2h10.5v47.2H419.7z" />
    </g>
  </svg>
);

export default Logo;