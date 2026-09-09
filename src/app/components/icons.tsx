import svgPaths from "../../imports/Home/svg-eoj8yryyml";
import { imgGroup } from "../../imports/Home/svg-96sp3";
import imgImage5 from "../../imports/Home/370fdcf2b4c0c275d4e57fe08ce5aae3fa853a2c.webp";
import imgImage7 from "../../imports/Home/4c6639c02171bd6897575ed41792d4e38400c1e3.webp";
import imgImage8 from "../../imports/Home/316a38861af4782d782f23cc3f41db3b065d2945.webp";
import imgImage6 from "../../imports/Home/2673e561688c2e8c06e592989147b990ec3b0a5f.webp";

// ---------- Badge wrapper ----------
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#141414] overflow-clip relative rounded-[200px] shrink-0 size-[100px]">
      {children}
    </div>
  );
}

// ---------- Front-End ----------
export function Html5Badge() {
  return (
    <Badge>
      <div className="absolute left-[24.5px] size-[51px] top-[24.5px]" data-name="Logos/html5-plain">
        <div className="absolute inset-[1.56%_7.06%_1.18%_7.06%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.8026 49.6031">
            <path d={svgPaths.p343c47a0} fill="#E44D26" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function JavascriptBadge() {
  return (
    <Badge>
      <div className="absolute left-[24.67px] size-[50px] top-[25px]" data-name="Logos/javascript-plain">
        <div className="absolute inset-[0.78%_0.78%_1.56%_1.56%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8281 48.8281">
            <path d={svgPaths.p8f71100} fill="#F0DB4F" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function TypescriptBadge() {
  return (
    <Badge>
      <div className="absolute left-[25.33px] size-[50px] top-[25px]" data-name="Logos/typescript-plain">
        <div className="absolute inset-[1.1%_0.78%_1.24%_1.56%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.8281 48.8281">
            <path d={svgPaths.p8a4500} fill="#007ACC" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function NextjsBadge() {
  return (
    <Badge>
      <div className="absolute h-[59px] left-[20px] top-[20px] w-[60px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 59">
          <ellipse cx="30" cy="29.5" fill="#D9D9D9" rx="30" ry="29.5" />
        </svg>
      </div>
      <div className="absolute left-[19px] size-[61px] top-[19px]" data-name="Logos/nextjs-original">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 61">
          <path d={svgPaths.pfad6ef0} fill="black" />
        </svg>
      </div>
    </Badge>
  );
}

export function ReduxBadge() {
  return (
    <Badge>
      <div className="absolute left-[25px] size-[50px] top-[25px]" data-name="Logos/redux-original">
        <div className="absolute inset-[2.53%_0]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.9987 47.4688">
            <path d={svgPaths.p2cc30b00} fill="#764ABC" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function ReactBadge() {
  return (
    <Badge>
      <div className="absolute left-[20px] size-[60px] top-[20px]" data-name="Logos/react-original">
        <div className="absolute inset-[6.33%_1.09%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.6875 52.4062">
            <g>
              <path d={svgPaths.p32abb380} fill="#61DAFB" />
              <path d={svgPaths.p3ae61400} fill="#61DAFB" />
            </g>
          </svg>
        </div>
      </div>
    </Badge>
  );
}

// ---------- Back-End ----------
export function NodejsBadge() {
  return (
    <Badge>
      <div className="absolute left-[14.5px] size-[70px] top-[14.5px]" data-name="Logos/nodejs">
        <div className="absolute inset-[36.78%_3.18%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.5495 18.5123">
            <path d={svgPaths.p2e25b480} fill="#83CD29" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function ExpressBadge() {
  return (
    <Badge>
      <div className="absolute left-[15.5px] size-[70px] top-[18px]" data-name="Logos/express">
        <div className="absolute inset-[39.22%_1.64%_39.2%_1.66%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.6898 15.1057">
            <path d={svgPaths.p46cd200} fill="white" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function DjangoBadge() {
  return (
    <Badge>
      <div className="absolute left-[15.5px] size-[70px] top-[15px]" data-name="Logos/django">
        <div className="absolute inset-[32.53%_82.74%_41.41%_0]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.081 18.2427">
            <path d={svgPaths.p48721b0} fill="#00F599" />
          </svg>
        </div>
        <div className="absolute inset-[32.56%_0_32.53%_15.13%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.4109 24.436">
            <path d={svgPaths.p28a5000} fill="#00F599" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function RailsBadge() {
  return (
    <Badge>
      <div className="absolute left-[15.5px] size-[70px] top-[15px]" data-name="Logos/rails">
        <div className="absolute inset-[49.53%_0_32.34%_32.19%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.4688 12.6875">
            <path d={svgPaths.p17ec3680} fill="#CC0000" />
          </svg>
        </div>
        <div className="absolute inset-[33.91%_42.73%_32.42%_1.72%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.8828 23.5703">
            <path d={svgPaths.pb14d800} fill="#CC0000" />
          </svg>
        </div>
        <div className="absolute inset-[32.42%_56.56%_33.2%_-0.08%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4609 24.0625">
            <path d={svgPaths.pa7a7480} fill="#CC0000" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

// ---------- Styling & Design ----------
export function Css3Badge() {
  return (
    <Badge>
      <div className="absolute left-[25px] size-[50px] top-[25px]" data-name="Logos/css3-plain">
        <div className="absolute inset-[0.78%_6.84%_1.2%_6.84%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.1562 49.009">
            <path d={svgPaths.p24607900} fill="#1572B6" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function TailwindBadge() {
  return (
    <Badge>
      <div className="absolute left-[25px] size-[50px] top-[25px]" data-name="Logos/tailwindcss">
        <div className="absolute inset-[20%_0]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 29.9984">
            <path d={svgPaths.p3708d400} fill="#38B2AC" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function BootstrapBadge() {
  return (
    <Badge>
      <div className="absolute left-[20px] size-[60px] top-[20px]" data-name="Logos/bootstrap">
        <div className="absolute inset-[11.42%_0.87%_10.28%_0.87%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.9594 46.9828">
            <path d={svgPaths.p39895a00} fill="url(#paint0_linear_bs)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_bs" x1="8.7612" x2="60.2808" y1="1.24342" y2="42.1403">
                <stop stopColor="#9013FE" />
                <stop offset="1" stopColor="#6610F2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[30.02%_33.02%_28.33%_35.31%]">
          <div className="absolute inset-[-12.29%_-21.33%_-20.15%_-21.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.107 33.095">
              <g id="Vector">
                <path d={svgPaths.p37892700} fill="url(#paint0_linear_bs2)" />
                <path d={svgPaths.p37892700} stroke="white" strokeWidth="0.24566" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_bs2" x1="5.85116" x2="17.3665" y1="4.71514" y2="24.191">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#F1E5FC" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </Badge>
  );
}

export function SassBadge() {
  return (
    <Badge>
      <div className="absolute left-[20px] size-[60px] top-[20px]" data-name="Logos/sass">
        <div className="absolute inset-[13.28%_0.96%_13.36%_0.95%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.8534 44.0166">
            <path clipRule="evenodd" d={svgPaths.p29499f00} fill="#CB6699" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function MaterialUiBadge() {
  return (
    <Badge>
      <div className="absolute left-[20px] size-[60px] top-[20px]" data-name="Logos/materialui">
        <div className="absolute inset-[10.47%_62.5%_39.22%_0.16%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4062 30.1875">
            <path d={svgPaths.p30155180} fill="#1FA6CA" />
          </svg>
        </div>
        <div className="absolute inset-[10.47%_25.08%_32.03%_37.5%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4531 34.5">
            <path d={svgPaths.p259cd980} fill="#1C7FB6" />
          </svg>
        </div>
        <div className="absolute inset-[60.78%_37.5%_10.47%_37.5%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17.25">
            <path d={svgPaths.p37432200} fill="#1FA6CA" />
          </svg>
        </div>
        <div className="absolute inset-[10.47%_0.08%_10.47%_62.5%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4531 47.4375">
            <path d={svgPaths.p5390580} fill="#1C7FB6" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

// ---------- Web Animations ----------
export function FramerMotionBadge() {
  return (
    <Badge>
      <div className="absolute left-[25px] size-[50px] top-[25px]" data-name="framer-motion">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
          <g clipPath="url(#clip0_fm)">
            <path d={svgPaths.p318cef80} fill="#59529D" />
            <path d="M50 25V50L37.5 37.5L50 25Z" fill="#5271B4" />
            <path d={svgPaths.p39382c00} fill="#BB4B96" />
          </g>
          <defs>
            <clipPath id="clip0_fm">
              <rect fill="white" height="50" width="50" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Badge>
  );
}

export function Image5Badge() {
  return (
    <Badge>
      <div className="absolute h-[57.978px] left-[16px] top-[21px] w-[50px]">
        <img alt="GSAP" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} loading="lazy" decoding="async" />
      </div>
    </Badge>
  );
}

export function LottieBadge() {
  return (
    <Badge>
      <div className="absolute left-[25px] overflow-clip size-[50px] top-[25px]" data-name="lottiefiles">
        <div
          className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[50px_50px]"
          style={{ maskImage: `url("${imgGroup}")` }}
        >
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
            <g>
              <path d={svgPaths.p1e21d900} fill="#00DDB3" />
              <path d={svgPaths.p1bf07500} fill="white" />
            </g>
          </svg>
        </div>
      </div>
    </Badge>
  );
}

// ---------- Cloud & Deployment ----------
export function DockerBadge() {
  return (
    <Badge>
      <div className="absolute left-[19px] size-[60px] top-[19px]" data-name="Logos/docker">
        <div className="absolute inset-[18.75%_1.25%_18.44%_1.14%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.5657 37.6875">
            <path d={svgPaths.p34672800} fill="#019BC6" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function AzureBadge() {
  return (
    <Badge>
      <div className="absolute left-[25px] size-[50px] top-[25px]" data-name="Logos/azure">
        <div className="absolute inset-[3.49%_37.24%_3.49%_0.64%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0607 46.5085">
            <path d={svgPaths.p2e345300} fill="url(#paint0_linear_az1)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_az1" x1="21.7784" x2="6.60995" y1="3.44712" y2="48.2579">
                <stop stopColor="#114A8B" />
                <stop offset="1" stopColor="#0669BC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[63.76%_12.6%_3.49%_27.53%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.9357 16.3762">
            <path d={svgPaths.p19f3f100} fill="#0078D4" />
          </svg>
        </div>
        <div className="absolute inset-[3.49%_0.64%_3.49%_33.9%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.7299 46.5085">
            <path d={svgPaths.p35d0c840} fill="url(#paint0_linear_az2)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_az2" x1="7.95795" x2="24.6084" y1="2.13928" y2="46.4988">
                <stop stopColor="#3CCBF4" />
                <stop offset="1" stopColor="#2892DF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function Image7Badge() {
  return (
    <Badge>
      <div className="absolute left-[25px] size-[50px] top-[25px]">
        <img alt="Netlify" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} loading="lazy" decoding="async" />
      </div>
    </Badge>
  );
}

export function Image8Badge() {
  return (
    <Badge>
      <div className="absolute h-[40.234px] left-[25px] top-[30px] w-[50px]">
        <img alt="AWS" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} loading="lazy" decoding="async" />
      </div>
    </Badge>
  );
}

export function VercelBadge() {
  return (
    <Badge>
      <div className="absolute left-[15px] size-[70px] top-[15px]" data-name="vercel">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
          <g clipPath="url(#clip0_vc)">
            <path d={svgPaths.p1da09180} fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_vc">
              <rect fill="white" height="70" width="70" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Badge>
  );
}

// ---------- Testing & Debugging ----------
export function PostmanBadge() {
  return (
    <Badge>
      <div className="absolute left-[19px] overflow-clip size-[60px] top-[19px]" data-name="postman">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <g>
            <path d={svgPaths.p19f17680} fill="#FF6C37" />
            <g>
              <path d={svgPaths.p14ff6c00} fill="white" />
              <path d={svgPaths.p10267c00} fill="#FF6C37" />
              <path d={svgPaths.p1f792f00} fill="white" />
              <path d={svgPaths.p4536e80} fill="#FF6C37" />
              <path d={svgPaths.p101a6940} fill="white" />
              <path d={svgPaths.p8db77c0} fill="#FF6C37" />
              <path d={svgPaths.p1db3e300} fill="white" />
              <path d={svgPaths.p2e724700} fill="#FF6C37" />
              <path d={svgPaths.p1ed3ea40} fill="white" />
              <path d={svgPaths.pe93c680} fill="#FF6C37" />
              <path d={svgPaths.p2eac8b00} fill="white" />
              <path d={svgPaths.p14d15900} fill="#FF6C37" />
              <path d={svgPaths.p3e413380} fill="white" />
              <path d={svgPaths.p13320200} fill="#FF6C37" />
              <path d={svgPaths.pef13c00} fill="white" />
              <path d={svgPaths.p342d2370} fill="#FF6C37" />
              <path d={svgPaths.p1274a280} fill="#FF6C37" />
              <path d={svgPaths.p26f5a700} fill="white" />
              <path d={svgPaths.pfdf9700} fill="#FF6C37" />
              <path d={svgPaths.p38c38000} fill="#FF6C37" />
            </g>
          </g>
        </svg>
      </div>
    </Badge>
  );
}

export function JestBadge() {
  return (
    <Badge>
      <div className="absolute left-[30px] size-[40px] top-[30px]" data-name="Logos/jest">
        <div className="absolute inset-[0.09%_0_0.12%_0.01%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.9957 39.9184">
            <path d={svgPaths.p3ea93200} fill="#99425B" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function SeleniumBadge() {
  return (
    <Badge>
      <div className="absolute left-[25px] size-[50px] top-[25px]" data-name="Logos/selenium">
        <div className="absolute inset-[62.88%_27.81%_30.55%_57.66%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.26562 3.28807">
            <path d={svgPaths.p162f3400} fill="#CF0A2C" />
          </svg>
        </div>
        <div className="absolute inset-[1.48%_3.75%_1.56%_3.75%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.25 48.4766">
            <path d={svgPaths.p3ea8d500} fill="#CF0A2C" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

// ---------- Programming Languages ----------
export function PythonBadge() {
  return (
    <Badge>
      <div className="absolute left-[19.5px] size-[60px] top-[19.5px]" data-name="Logos/python">
        <div className="absolute inset-[9.57%_30.78%_30.64%_10.01%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.5269 35.8729">
            <path d={svgPaths.p1a98e080} fill="url(#paint0_linear_py1)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_py1" x1="-1.16035" x2="25.5367" y1="1.37973" y2="24.1469">
                <stop stopColor="#5A9FD4" />
                <stop offset="1" stopColor="#306998" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[30.19%_10.01%_9.57%_30.66%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.5993 36.1476">
            <path d={svgPaths.p208e5600} fill="url(#paint0_linear_py2)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_py2" x1="23.1909" x2="13.6169" y1="25.9281" y2="12.5021">
                <stop stopColor="#FFD43B" />
                <stop offset="1" stopColor="#FFE873" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function CBadge() {
  return (
    <Badge>
      <div className="absolute left-[20.5px] size-[60px] top-[20px]" data-name="Logos/c">
        <div className="absolute inset-[1.72%_7.97%_25.47%_7.81%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.5312 43.6875">
            <path d={svgPaths.p1ae298c0} fill="#659AD3" />
          </svg>
        </div>
        <div className="absolute inset-[26.02%_7.89%_1.72%_8.36%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.25 43.3594">
            <path d={svgPaths.p2565baa0} fill="#03599C" />
          </svg>
        </div>
        <div className="absolute inset-[19.14%_23.2%_19.14%_19.14%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.5938 37.0312">
            <path d={svgPaths.p3d0f2e80} fill="white" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function CppBadge() {
  return (
    <Badge>
      <div className="absolute left-[20.5px] size-[60px] top-[20px]" data-name="cplusplus">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <g>
            <ellipse cx="31.5" cy="29.5" fill="white" rx="24.5" ry="19.5" />
            <path d={svgPaths.p146c200} fill="#659AD2" />
            <path d={svgPaths.p2051b000} fill="#004482" />
            <path d={svgPaths.p27eab900} fill="#00599C" />
          </g>
        </svg>
      </div>
    </Badge>
  );
}

export function RubyBadge() {
  return (
    <Badge>
      <div className="absolute left-[25.5px] size-[50px] top-[25px]" data-name="Logos/ruby">
        <div className="absolute inset-[22.07%_2.97%_3.1%_22.14%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.4445 37.416">
            <path d={svgPaths.p1bb7b580} fill="url(#paint0_linear_rb)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_rb" x1="31.7344" x2="21.8133" y1="41.6813" y2="24.1648">
                <stop stopColor="#FB7655" />
                <stop offset="0.41" stopColor="#E42B1E" />
                <stop offset="0.99" stopColor="#990000" />
                <stop offset="1" stopColor="#990000" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[3.1%_32.2%_33.63%_3.89%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9539 31.634">
            <path d={svgPaths.p34f72080} fill="white" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

// ---------- Database Management ----------
export function MysqlBadge() {
  return (
    <Badge>
      <div className="absolute left-[15px] size-[70px] top-[10px]" data-name="Logos/mysql">
        <div className="absolute inset-[24.84%_1.56%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.812 35.2186">
            <path d={svgPaths.p2b876600} fill="#00618A" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function PostgresBadge() {
  return (
    <Badge>
      <div className="absolute left-[25px] size-[50px] top-[25px]" data-name="Logos/postgresql">
        <div className="absolute inset-[2.34%_3.64%_2.45%_3.91%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.2256 47.6055">
            <path clipRule="evenodd" d={svgPaths.p32df7980} fill="#336791" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function MongoBadge() {
  return (
    <Badge>
      <div className="absolute left-[20px] size-[60px] top-[20px]" data-name="Logos/mongodb">
        <div className="absolute inset-[2.42%_2%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.595 57.0946">
            <path clipRule="evenodd" d={svgPaths.p1aa04000} fill="#4FAA41" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function FirebaseBadge() {
  return (
    <Badge>
      <div className="absolute left-[20px] size-[60px] top-[20px]" data-name="Logos/firebase">
        <div className="absolute inset-[7.8%_19.3%_7.79%_19.3%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.8344 50.6432">
            <path d={svgPaths.p20500200} fill="#F58220" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

// ---------- Mobile ----------
export function Image6Badge() {
  return (
    <Badge>
      <div className="absolute h-[65.709px] left-0 top-[17px] w-[100px]">
        <img alt="Flutter" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} loading="lazy" decoding="async" />
      </div>
    </Badge>
  );
}

// ---------- Version Control ----------
export function GithubBadge() {
  return (
    <Badge>
      <div className="absolute left-[20px] size-[60px] top-[20px]" data-name="Logos/github">
        <div className="absolute inset-[3.99%_2.82%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.6142 55.2158">
            <g>
              <path clipRule="evenodd" d={svgPaths.p2bdb3f80} fill="white" fillRule="evenodd" />
              <path d={svgPaths.pee73e00} fill="white" />
            </g>
          </svg>
        </div>
      </div>
    </Badge>
  );
}

export function GitBadge() {
  return (
    <Badge>
      <div className="absolute left-[20px] size-[60px] top-[20px]" data-name="Logos/git">
        <div className="absolute inset-[0.69%_0.69%_0.69%_0.67%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.1858 59.1722">
            <path d={svgPaths.p213db940} fill="#F34F29" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

// ---------- UI/UX ----------
export function FigmaBadge() {
  return (
    <Badge>
      <div className="absolute left-[24px] size-[50px] top-[24px]" data-name="Logos/figma">
        <div className="absolute inset-[67.19%_47.66%_-0.78%_18.75%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7969 16.7969">
            <path d={svgPaths.p3764e8f0} fill="#0ACF83" />
          </svg>
        </div>
        <div className="absolute inset-[33.59%_47.66%_32.81%_18.75%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7969 16.7969">
            <path d={svgPaths.p177b0800} fill="#A259FF" />
          </svg>
        </div>
        <div className="absolute inset-[0_47.66%_66.41%_18.75%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7969 16.7969">
            <path d={svgPaths.p177b0800} fill="#F24E1E" />
          </svg>
        </div>
        <div className="absolute inset-[0_14.06%_66.41%_52.34%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7969 16.7969">
            <path d={svgPaths.pa007c00} fill="#FF7262" />
          </svg>
        </div>
        <div className="absolute inset-[33.59%_14.06%_32.81%_52.34%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7969 16.7969">
            <path d={svgPaths.p36cbccf0} fill="#1ABCFE" />
          </svg>
        </div>
      </div>
    </Badge>
  );
}

// ---------- Arrow (Up-Left contained, used for links) ----------
export function ArrowUpLeftContained({ size = 48, color = "black" }: { size?: number; color?: string }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }} data-name="Arrow Up Left Contained">
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-2.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
            <path d={svgPaths.p180d4000} fill={color} />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ---------- Nav dock icons (24px stroke icons) ----------
export function HomeIcon({ color = "#D4D4D4" }: { color?: string }) {
  return (
    <div className="relative size-[24px]" data-name="Home 02">
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p204f8680} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function CubeScanIcon({ color = "#D4D4D4" }: { color?: string }) {
  return (
    <div className="relative size-[24px]" data-name="3d Cube Scan">
      <div className="absolute inset-[8.33%]">
        <div className="absolute inset-[-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
            <path d={svgPaths.pc976b00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function FileIcon({ color = "#D4D4D4" }: { color?: string }) {
  return (
    <div className="relative size-[24px]" data-name="File 05">
      <div className="absolute inset-[10%_17.5%]">
        <div className="absolute inset-[-3.91%_-4.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1004 20.7">
            <path d={svgPaths.p1c34600} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function GithubStrokeIcon({ color = "#D4D4D4" }: { color?: string }) {
  return (
    <div className="relative size-[24px]" data-name="github">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.p737a500} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export function ArrowUpRightIcon({ color = "#D4D4D4" }: { color?: string }) {
  return (
    <div className="relative size-[24px]" data-name="Arrow Up Right Contained">
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p23283300} fill={color} />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function BrowserIcon({ color = "#D4D4D4" }: { color?: string }) {
  return (
    <div className="relative size-[24px]" data-name="Browser">
      <div className="absolute border-solid rounded-[4px]" style={{ borderColor: color, borderWidth: "1.5px", height: 20, width: 23, left: 0, top: 0 }} />
      <div className="absolute h-[13px] left-[2px] top-[4px] w-[15px]">
        <div className="absolute inset-[0_-3.33%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 13">
            <g>
              <path d={svgPaths.p23079900} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M10 9.5H15" stroke={color} strokeLinecap="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
