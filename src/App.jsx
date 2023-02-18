import React, { useState } from "react";

const App = () => {
  const [playing, isPlaying] = useState(false);
  const handleClick = (audiofile) => {
    if (!playing) {
      const audio = new Audio(audiofile);
      audio.play();
      isPlaying(true);
    } else if (playing) {
      audio.pause();
      isPlaying(false);
    }
  };
  return (
    <div>
      <body className="p-8">
        <h1 className="text-3xl font-extrabold tracking-widest">
          Most Famous Game Soundtracks
        </h1>
        <h2>Double Click To Pause Soundtrack</h2>

        <div className="flex p-8 flex-col md:flex-row justify-center md:justify-start md:gap-x-4 gap-y-4 items-center">
          <div className="w-48 h-48 flex justify-center items-center group shadow-2xl hover:scale-110 transition-all">
            <img
              className="group-hover:blur-[1px] rounded-md"
              src="mc logo.jpeg"
            />

            <button
              onClick={() => handleClick("Sweden.mp3")}
              className="absolute text-white text-2xl font-bold hidden group-hover:block"
            >
              Play
            </button>
          </div>

          <div className="w-48 h-48 flex justify-center items-center group shadow-2xl hover:scale-110 transition-all">
            <img
              className="w-full h-full group-hover:blur-[1px] bg-cover rounded-md"
              src="eft_logo_promo.jpg"
            />

            <button
              onClick={() =>
                handleClick("Escape from Tarkov - main music theme.mp3")
              }
              className="absolute text-white text-2xl font-bold hidden group-hover:block"
            >
              Play
            </button>
          </div>

          <div className="w-48 h-48 flex justify-center items-center group shadow-2xl hover:scale-110 transition-all">
            <img
              className="w-full h-full group-hover:blur-[1px] bg-contain rounded-md"
              src="hollow knight.jpeg"
            />

            <button
              onClick={() =>
                handleClick("Hollow Knight OST - main music theme.mp3")
              }
              className="absolute text-white text-2xl font-bold hidden group-hover:block"
            >
              Play
            </button>
          </div>

          <div className="w-48 h-48 flex justify-center items-center group shadow-2xl hover:scale-110 transition-all">
            <img
              className="w-full h-full group-hover:blur-[1px] rounded-md"
              src="download.jpeg"
            />

            <button
              onClick={() =>
                handleClick(
                  "Bloodborne Sountrack OST - Gehrman, The First Hunter.mp3"
                )
              }
              className="absolute text-white text-2xl font-bold hidden group-hover:block"
            >
              Play
            </button>
          </div>
        </div>
      </body>
    </div>
  );
};

export default App;
