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
            <rect x="11.763" y="32.109" width="272.474" height="603.782" rx="20" />
          </clipPath>
          <clipPath id={`main-clip-${uniqueId}`}>
            <rect width="296" height="648" rx="20" fill="white"/>
          </clipPath>
          <linearGradient id={`shimmer-gradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="35%" stopColor="white" stopOpacity="0.2" />
            <stop offset="50%" stopColor="white" stopOpacity="0.5" />
            <stop offset="65%" stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g clipPath={`url(#main-clip-${uniqueId})`}>
          <rect
            x="11.763" 
            y="32.109" 
            width="272.474" 
            height="603.782"
            fill="#F5F5F5"
          />
          
          <image
            href={image} 
            x="11.763" 
            y="32.109" 
            width="272.474" 
            height="603.782" 
            clipPath={`url(#screen-clip-${uniqueId})`}
            preserveAspectRatio="none"
          />
          
          <rect
            x="11.763"
            y="32.109"
            width="136.237"
            height="603.782"
            fill={`url(#shimmer-gradient-${uniqueId})`}
            clipPath={`url(#screen-clip-${uniqueId})`}
            style={{
              mixBlendMode: 'screen',
              transform: 'translateX(-100%) skewX(-25deg)',
              animation: `shimmer-move-${index} 5s ease-in-out infinite`,
              animationDelay: animationDelay,
            }}
          />
          
          <path fillRule="evenodd" clipRule="evenodd" d="M296 20V628C296 639.038 287.038 648 276 648H20C8.962 648 0 639.038 0 628V20C0 8.962 8.962 0 20 0H276C287.038 0 296 8.962 296 20ZM284.237 32.109C284.237 21.071 275.275 12.109 264.237 12.109H31.763C20.725 12.109 11.763 21.071 11.763 32.109V615.891C11.763 626.929 20.725 635.891 31.763 635.891H264.237C275.275 635.891 284.237 626.929 284.237 615.891V32.109Z" fill="#BFA6E9"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M292.452 23.4666V624.533C292.452 635.571 283.49 644.533 272.452 644.533H23.5476C12.5097 644.533 3.54785 635.571 3.54785 624.533V23.4666C3.54785 12.429 12.5097 3.46698 23.5476 3.46698H272.452C283.49 3.46698 292.452 12.429 292.452 23.4666ZM284.237 32.1092C284.237 21.0706 275.275 12.1085 264.236 12.1085H31.7638C20.725 12.1085 11.7631 21.0706 11.7631 32.1092V615.891C11.7631 626.929 20.725 635.891 31.7638 635.891H264.236C275.275 635.891 284.237 626.929 284.237 615.891V32.1092Z" fill="#0F1412"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M189.632 34.3363C189.632 40.9653 184.249 46.3491 177.618 46.3491H118.381C111.751 46.3491 106.368 40.9653 106.368 34.3363C106.368 27.7053 111.751 22.3217 118.381 22.3217H177.618C184.249 22.3217 189.632 27.7053 189.632 34.3363Z" fill="#0F1412"/>
          <path d="M175.331 38.2258C177.48 38.2258 179.222 36.4838 179.222 34.3348C179.222 32.1859 177.48 30.4438 175.331 30.4438C173.182 30.4438 171.44 32.1859 171.44 34.3348C171.44 36.4838 173.182 38.2258 175.331 38.2258Z" fill="#282A28"/>
          <path d="M173.88 33.512C174.261 33.512 174.571 33.2026 174.571 32.8209C174.571 32.4393 174.261 32.1299 173.88 32.1299C173.498 32.1299 173.189 32.4393 173.189 32.8209C173.189 33.2026 173.498 33.512 173.88 33.512Z" fill="#B8BABC"/>
          <path d="M177.764 35.6062C177.977 35.6062 178.15 35.4333 178.15 35.22C178.15 35.0068 177.977 34.8339 177.764 34.8339C177.55 34.8339 177.377 35.0068 177.377 35.22C177.377 35.4333 177.55 35.6062 177.764 35.6062Z" fill="#B8BABC"/>
        </g>
        <style>
          {`
            @keyframes shimmer-move-${index} {
              0% {
                transform: translateX(-100%) skewX(-25deg);
                opacity: 0;
              }
              5% {
                opacity: 1;
              }
              25% {
                transform: translateX(300%) skewX(-25deg);
                opacity: 1;
              }
              30%, 100% {
                transform: translateX(300%) skewX(-25deg);
                opacity: 0;
              }
            }
          `}
        </style>
      </svg>
    );
  } else {
    return (
      <svg width="184" height="400" viewBox="0 0 184 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id={`screen-clip-${uniqueId}`}>
            <rect x="7.312" y="19.820" width="169.376" height="360.360" rx="12" />
          </clipPath>
          <clipPath id={`main-clip-${uniqueId}`}>
            <rect width="184" height="400" rx="12" fill="white"/>
          </clipPath>
          <linearGradient id={`shimmer-gradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="35%" stopColor="white" stopOpacity="0.2" />
            <stop offset="50%" stopColor="white" stopOpacity="0.5" />
            <stop offset="65%" stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g clipPath={`url(#main-clip-${uniqueId})`}>
          <rect
            x="7.312" 
            y="19.820" 
            width="169.376" 
            height="360.360"
            fill="#F5F5F5"
          />
          
          <image 
            href={image} 
            x="7.312" 
            y="19.820" 
            width="169.376" 
            height="360.360" 
            clipPath={`url(#screen-clip-${uniqueId})`}
            preserveAspectRatio="none"
          />
          
          <rect
            x="7.312"
            y="19.820"
            width="84.688"
            height="360.360"
            fill={`url(#shimmer-gradient-${uniqueId})`}
            clipPath={`url(#screen-clip-${uniqueId})`}
            style={{
              mixBlendMode: 'screen',
              transform: 'translateX(-100%) skewX(-25deg)',
              animation: `shimmer-move-${index} 5s ease-in-out infinite`,
              animationDelay: animationDelay,
            }}
          />
          
          <path fillRule="evenodd" clipRule="evenodd" d="M184 12.3457V387.654C184 394.468 178.429 400 171.568 400H12.4324C5.57097 400 0 394.468 0 387.654V12.3457C0 5.5321 5.57097 0 12.4324 0H171.568C178.429 0 184 5.5321 184 12.3457ZM176.688 19.8204C176.688 13.0068 171.117 7.47469 164.255 7.47469H19.7446C12.8831 7.47469 7.31213 13.0068 7.31213 19.8204V380.18C7.31213 386.993 12.8831 392.525 19.7446 392.525H164.255C171.117 392.525 176.688 386.993 176.688 380.18V19.8204Z" fill="#BFA6E9"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M181.795 14.4856V385.514C181.795 392.328 176.224 397.86 169.362 397.86H14.6379C7.77646 397.86 2.20557 392.328 2.20557 385.514V14.4856C2.20557 7.67227 7.77646 2.14014 14.6379 2.14014H169.362C176.224 2.14014 181.795 7.67227 181.795 14.4856ZM176.688 19.8205C176.688 13.0065 171.117 7.47441 164.255 7.47441H19.7452C12.8832 7.47441 7.31232 13.0065 7.31232 19.8205V380.179C7.31232 386.993 12.8832 392.525 19.7452 392.525H164.255C171.117 392.525 176.688 386.993 176.688 380.179V19.8205Z" fill="#0F1412"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M117.88 21.1952C117.88 25.2873 114.533 28.6106 110.411 28.6106H73.5881C69.467 28.6106 66.1206 25.2873 66.1206 21.1952C66.1206 17.1021 69.467 13.7788 73.5881 13.7788H110.411C114.533 13.7788 117.88 17.1021 117.88 21.1952Z" fill="#0F1412"/>
          <path d="M108.99 23.5962C110.326 23.5962 111.408 22.5208 111.408 21.1943C111.408 19.8678 110.326 18.7925 108.99 18.7925C107.654 18.7925 106.571 19.8678 106.571 21.1943C106.571 22.5208 107.654 23.5962 108.99 23.5962Z" fill="#282A28"/>
          <path d="M108.088 20.6864C108.325 20.6864 108.517 20.4954 108.517 20.2598C108.517 20.0242 108.325 19.8333 108.088 19.8333C107.85 19.8333 107.658 20.0242 107.658 20.2598C107.658 20.4954 107.85 20.6864 108.088 20.6864Z" fill="#B8BABC"/>
          <path d="M110.502 21.9791C110.634 21.9791 110.742 21.8724 110.742 21.7408C110.742 21.6091 110.634 21.5024 110.502 21.5024C110.369 21.5024 110.262 21.6091 110.262 21.7408C110.262 21.8724 110.369 21.9791 110.502 21.9791Z" fill="#B8BABC"/>
        </g>
        <style>
          {`
            @keyframes shimmer-move-${index} {
              0% {
                transform: translateX(-100%) skewX(-25deg);
                opacity: 0;
              }
              5% {
                opacity: 1;
              }
              25% {
                transform: translateX(300%) skewX(-25deg);
                opacity: 1;
              }
              30%, 100% {
                transform: translateX(300%) skewX(-25deg);
                opacity: 0;
              }
            }
          `}
        </style>
      </svg>
    );
  }
};

export default PhoneMockup;
