import SocialCard from "~/components/Template/SocialCard";
import type { ReactElement } from 'react';

const ContactMe= () => {
    // Define your icons here as React Elements
    const LinkedinIcon: ReactElement = (
      // Your LinkedIn SVG icon
      <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="26" height="26" viewBox="0 0 192 192">
      {
      <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
      <path d="M0,192v-192h192v192z" fill="none"></path>
      <g fill="currentColor"><g id="surface1">
      <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
      </g>
      </g>
      </g>
      }
  </svg></span>
    );
  
    const EmailIcon: ReactElement = (
      // Your Email SVG icon
      <span><svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="20"
      width="20"
    >
      <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" />
    </svg></span>
    );
  
    const GithubIcon: ReactElement = (
      // Your GitHub SVG icon
      <span><svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="20"
      width="20"
      
    >
      <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
    </svg></span>
    );
  
    return (
        
       <div className="flex flex-col items-center p-8 min-h-screen "> {/* This ensures the content is centered vertically and horizontally in the viewport */}
  <h1 className="text-4xl font-bold p-4 mb-6">My Socials</h1> {/* Adjust the margin-bottom (mb-8) as needed */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
       
        <SocialCard
          username="delvi-fitri-assary"
          service="LinkedIn"
          href="https://www.linkedin.com/in/delvi-fitri-assary/"
          icon={LinkedinIcon}
        
          
        />
        <SocialCard
          username="delvifass@gmail.com"
          service="Email"
          href="mailto:delvifass@gmail.com"
          icon={EmailIcon}
        />
        <SocialCard
          username="delvifitri"
          service="GitHub"
          href="https://github.com/delvifitri"
          icon={GithubIcon}
        />
      </div>
      </div>
    );
  };
  
  export default ContactMe;