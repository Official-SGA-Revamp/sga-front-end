/**
 * slideshow.tsx
 * 
 * Displays looping video for front page
 * 
 */
 import {useState,useEffect} from 'react';

export function SlideShowSection() {
 
  return (
    <div className="flex flex-row w-full h-2/3 justify-center">
      <div className="flex flex-col justify-end h-full w-2/3 bg-background-paper text-center text-text-primary items-center">

        {<video className={"max-w-fit h-full z-70"} 
                    muted
                    autoPlay={true}
                    preload={'auto'}
                    loop>

          <source src="/videos/Proj2Demo.mp4" type="video/mp4"/>
          Your browser does not support mp4 video types.

        </video>}
        </div>
    </div>
  );
}