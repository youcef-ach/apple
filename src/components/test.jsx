import { hightlightsSlides } from "../constants";

export default function Test() {

  return (
    <>
      <div className="flex items-center w-auto">
        {hightlightsSlides.map((highlight) => (
          <div>
            <div className="relative rounded-xl px-20 w-[75vw] h-[70vh] flex-center">
              <video autoPlay muted playsInline={true} className="w-full h-full">
                <source src={highlight.video}></source>
              </video>
              <div className="absolute top-0 left-0">
                {highlight.textLists.map((text) => (
                  <p>{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

}