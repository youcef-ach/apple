import { hightlightsSlides } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

export default function Test() {

  const [startPlaying,setStartPlaying] = useState(false)

  return (
    <>
    <div className="flex items-center h-[100vh]">
      {
        hightlightsSlides.map( highlight => (
          <div className="relative w-[100vw] h-[70vh] px-[25vw] flex-shrink-0">
            <video controls autoPlay muted preload="auto" playsInline={true} className="w-full h-full"
            onLoadedMetadata={setStartPlaying}
            >
              <source src={highlight.video}>
              </source>
            </video>
            <div className="absolute top-0 left-0">
              {
                highlight.textLists.map(
                  text => (
                    <p>{text}</p>
                  )
                )
              }
            </div>
          </div>
        )
      )
    }
    </div>
    </>
  );

}