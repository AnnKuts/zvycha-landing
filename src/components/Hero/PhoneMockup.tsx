interface PhoneMockupProps {
  image: string;
  alt: string;
  variant?: 1 | 2;
  index?: number;
}

const PhoneMockup = ({ image, variant = 1, index = 0 }: PhoneMockupProps) => {
  const uniqueId = `shimmer-${variant}-${index}-${Date.now()}`;
  const delays = ['0s', '1.7s', '3.4s'];
  const animationDelay = delays[index] || '0s';

  if (variant === 1) {
    return (
      <svg width="296" height="648" viewBox="0 0 296 648" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id={`screen-clip-${uniqueId}`}>
            <rect x="11.763" y="12.109" width="272.474" height="623.782" rx="20" ry="20" />
          </clipPath>
          <clipPath id={`main-clip-${uniqueId}`}>
            <rect width="296" height="648" rx="20" />
          </clipPath>
          <linearGradient id={`shimmer-gradient-${uniqueId}`} gradientUnits="userSpaceOnUse" x1="-296" y1="-648" x2="0" y2="0">
            <stop offset="0%"   stopColor="white" stopOpacity="0" />
            <stop offset="40%"  stopColor="white" stopOpacity="0" />
            <stop offset="50%"  stopColor="white" stopOpacity="0.5" />
            <stop offset="60%"  stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
            <animate attributeName="x1" values="-296; 296; 296" keyTimes="0; 0.35; 1" dur="5s" begin={animationDelay} repeatCount="indefinite" />
            <animate attributeName="y1" values="-648; 648; 648" keyTimes="0; 0.35; 1" dur="5s" begin={animationDelay} repeatCount="indefinite" />
            <animate attributeName="x2" values="0; 592; 592"   keyTimes="0; 0.35; 1" dur="5s" begin={animationDelay} repeatCount="indefinite" />
            <animate attributeName="y2" values="0; 1296; 1296" keyTimes="0; 0.35; 1" dur="5s" begin={animationDelay} repeatCount="indefinite" />
          </linearGradient>
        </defs>

        <g clipPath={`url(#main-clip-${uniqueId})`}>
          <rect x="0" y="0" width="296" height="648" fill="#F5F5F5"
                clipPath={`url(#screen-clip-${uniqueId})`} />
          <image
            href={image}
            x="0" y="0" width="296" height="648"
            clipPath={`url(#screen-clip-${uniqueId})`}
            preserveAspectRatio="xMidYMid slice"
          />
          <rect
            x="0" y="0" width="296" height="648"
            fill={`url(#shimmer-gradient-${uniqueId})`}
            clipPath={`url(#screen-clip-${uniqueId})`}
            style={{ mixBlendMode: 'soft-light' }}
          />
          <path fillRule="evenodd" clipRule="evenodd" d="M296 20V628C296 639.038 287.038 648 276 648H20C8.962 648 0 639.038 0 628V20C0 8.962 8.962 0 20 0H276C287.038 0 296 8.962 296 20ZM284.237 32.109C284.237 21.071 275.275 12.109 264.237 12.109H31.763C20.725 12.109 11.763 21.071 11.763 32.109V615.891C11.763 626.929 20.725 635.891 31.763 635.891H264.237C275.275 635.891 284.237 626.929 284.237 615.891V32.109Z" fill="#BFA6E9"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M292.452 23.4667V624.533C292.452 635.571 283.49 644.533 272.452 644.533H23.5476C12.5097 644.533 3.54785 635.571 3.54785 624.533V23.4667C3.54785 12.4291 12.5097 3.46704 23.5476 3.46704H272.452C283.49 3.46704 292.452 12.4291 292.452 23.4667ZM284.237 32.1092C284.237 21.0706 275.275 12.1086 264.236 12.1086H31.7638C20.725 12.1086 11.7631 21.0706 11.7631 32.1092V615.891C11.7631 626.929 20.725 635.891 31.7638 635.891H264.236C275.275 635.891 284.237 626.929 284.237 615.891V32.1092Z" fill="#0F1412"/>
        </g>
      </svg>
    );
  } else {
    return (
      <svg width="184" height="400" viewBox="0 0 184 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id={`screen-clip-${uniqueId}`}>
            <rect x="7.312" y="7.474" width="169.376" height="385.051" rx="12" ry="12" />
          </clipPath>
          <clipPath id={`main-clip-${uniqueId}`}>
            <rect width="184" height="400" rx="12"/>
          </clipPath>
          <linearGradient id={`shimmer-gradient-${uniqueId}`} gradientUnits="userSpaceOnUse" x1="-184" y1="-400" x2="0" y2="0">
            <stop offset="0%"   stopColor="white" stopOpacity="0" />
            <stop offset="40%"  stopColor="white" stopOpacity="0" />
            <stop offset="50%"  stopColor="white" stopOpacity="0.5" />
            <stop offset="60%"  stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
            <animate attributeName="x1" values="-184; 184; 184" keyTimes="0; 0.35; 1" dur="5s" begin={animationDelay} repeatCount="indefinite" />
            <animate attributeName="y1" values="-400; 400; 400" keyTimes="0; 0.35; 1" dur="5s" begin={animationDelay} repeatCount="indefinite" />
            <animate attributeName="x2" values="0; 368; 368"   keyTimes="0; 0.35; 1" dur="5s" begin={animationDelay} repeatCount="indefinite" />
            <animate attributeName="y2" values="0; 800; 800"   keyTimes="0; 0.35; 1" dur="5s" begin={animationDelay} repeatCount="indefinite" />
          </linearGradient>
        </defs>

        <g clipPath={`url(#main-clip-${uniqueId})`}>
          <rect x="0" y="0" width="184" height="400" fill="#F5F5F5"
                clipPath={`url(#screen-clip-${uniqueId})`} />
          <image
            href={image}
            x="0" y="0" width="184" height="400"
            clipPath={`url(#screen-clip-${uniqueId})`}
            preserveAspectRatio="xMidYMid slice"
          />
          <rect
            x="0" y="0" width="184" height="400"
            fill={`url(#shimmer-gradient-${uniqueId})`}
            clipPath={`url(#screen-clip-${uniqueId})`}
            style={{ mixBlendMode: 'soft-light' }}
          />
          <path fillRule="evenodd" clipRule="evenodd" d="M184 12.3457V387.654C184 394.468 178.429 400 171.568 400H12.4324C5.57097 400 0 394.468 0 387.654V12.3457C0 5.5321 5.57097 0 12.4324 0H171.568C178.429 0 184 5.5321 184 12.3457ZM176.688 19.8204C176.688 13.0068 171.117 7.47469 164.255 7.47469H19.7446C12.8831 7.47469 7.31213 13.0068 7.31213 19.8204V380.18C7.31213 386.993 12.8831 392.525 19.7446 392.525H164.255C171.117 392.525 176.688 386.993 176.688 380.18V19.8204Z" fill="#BFA6E9"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M181.795 14.4856V385.514C181.795 392.328 176.224 397.86 169.362 397.86H14.6379C7.77646 397.86 2.20557 392.328 2.20557 385.514V14.4856C2.20557 7.67227 7.77646 2.14014 14.6379 2.14014H169.362C176.224 2.14014 181.795 7.67227 181.795 14.4856ZM176.688 19.8205C176.688 13.0065 171.117 7.47441 164.255 7.47441H19.7452C12.8832 7.47441 7.31232 13.0065 7.31232 19.8205V380.179C7.31232 386.993 12.8832 392.525 19.7452 392.525H164.255C171.117 392.525 176.688 386.993 176.688 380.179V19.8205Z" fill="#0F1412"/>
        </g>
      </svg>
    );
  }
};

export default PhoneMockup;