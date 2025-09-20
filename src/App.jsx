import React, { useState } from "react";
import "./index.css";

const memories = [
  {
    id: 1,
    image: "/photo-1.jpg",
    text: "May nagpapicture saken eme */>_</*",
    rotation: "rotate-3",
  },
  {
    id: 2,
    image: "/photo-2.jpg",
    text: "You still remember this??",
    rotation: "-rotate-6",
  },
  {
    id: 3,
    image: "/photo-3.jpg",
    text: "Happy Kaithe",
    rotation: "rotate-4",
  },
  {
    id: 4,
    image: "/photo-4.jpg",
    text: "Sportsfest with youu!",
    rotation: "-rotate-2",
  },
  {
    id: 5,
    image: "/photo-5.jpg",
    text: "Nagpapicture ulet 🙄",
    rotation: "rotate-5",
  },
  {
    id: 6,
    image: "/photo-6.jpg",
    text: "Luhh, hinigit ako sumama",
    rotation: "-rotate-4",
  },
  { id: 7, image: "/photo-7.jpg", text: "SM Date!", rotation: "rotate-2" },
  {
    id: 8,
    image: "/photo-8.jpg",
    text: "Kaithe the bully😃",
    rotation: "-rotate-5",
  },
];

const flowerMessages = [
  {
    id: 1,
    text: "You're as beautiful as a bouquet of freshly bloomed flowers",
  },
  {
    id: 2,
    text: "Spending time with you is like receiving a surprise bouquet",
  },
  {
    id: 3,
    text: "Being around you feels like walking through a field of flowers",
  },
  {
    id: 4,
    text: "Just like flowers, you make everything around you more vibrant",
  },
  {
    id: 5,
    text: "You brighten up the day just like a bunch of blooming flowers",
  },
  {
    id: 6,
    text: "Your presence is as comforting as holding a warm bouquet close",
  },
  {
    id: 7,
    text: "Your kindness spreads like the scent of flowers in the spring",
  },
  {
    id: 8,
    text: "You bring color to life, the way flowers bring color to the earth",
  },
  {
    id: 9,
    text: "You're as lovely as a garden full of flowers after the rain",
  },
  {
    id: 10,
    text: "You're as gentle and graceful as petals dancing in the breeze",
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState("main");

  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
    setShowMessage(false);
  };

  if (currentPage === "main") {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center">
        <img
          src="/cat-icon.png"
          alt="cat with a heart"
          className="w-16 h-16 mb-4"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-700 mb-2">
          Happy Birthday
          <span className="block text-pink-600">My Love!</span>
        </h1>
        <p className="text-lg md:text-xl text-purple-600 mb-8">
          Do you want to see your gift?
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => handleButtonClick("yes")}
            className="bg-transparent border-2 border-purple-400 text-purple-800 font-bold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300"
          >
            YES!!!
          </button>
          <button
            onClick={() => handleButtonClick("no")}
            className="bg-transparent border-2 border-purple-400 text-purple-800 font-bold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300"
          >
            NO THANKS
          </button>
        </div>
      </div>
    );
  } else if (currentPage === "yes") {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-800 mb-2">
          THESE ARE MY GIFTS FOR YOU!
        </h1>

        <p className="text-lg md:text-xl text-red-500 mb-8">
          I hope you'll like it
        </p>

        <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-lg w-full">
          <div
            onClick={() => handleButtonClick("memories")}
            className="flex flex-col items-center justify-center p-6 border-2 border-red-800 rounded-2xl aspect-square cursor-pointer hover:bg-red-50 transition duration-300"
          >
            <img
              src="/picture-icon.png"
              alt="picture icon"
              className="w-24 h-24"
            />
          </div>

          <div
            onClick={() => handleButtonClick("flowers")}
            className="flex flex-col items-center justify-center p-6 border-2 border-red-800 rounded-2xl aspect-square cursor-pointer hover:bg-red-50 transition duration-300"
          >
            <img
              src="/flowers-icon.png"
              alt="flowers icon"
              className="w-24 h-24"
            />
          </div>

          <div
            onClick={() => handleButtonClick("song")}
            className="flex flex-col items-center justify-center p-6 border-2 border-red-800 rounded-2xl aspect-square cursor-pointer hover:bg-red-50 transition duration-300"
          >
            <img
              src="/padlocks-icon.png"
              alt="padlocks icon"
              className="w-24 h-24"
            />
          </div>

          <div
            onClick={() => handleButtonClick("letter")}
            className="flex flex-col items-center justify-center p-6 border-2 border-red-800 rounded-2xl aspect-square cursor-pointer hover:bg-red-50 transition duration-300"
          >
            <img
              src="/letter-icon.png"
              alt="letter icon"
              className="w-24 h-24"
            />
          </div>
        </div>
      </div>
    );
  } else if (currentPage === "no") {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center">
        <img src="/sad-cat-icon.png" alt="sad cat" className="w-20 h-20 mb-6" />

        <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-pink-600 mb-8">
          I promise you'll like it
        </p>

        <button
          onClick={() => handleButtonClick("main")}
          className="bg-transparent border-2 border-red-400 text-red-700 font-bold py-2 px-6 rounded-full hover:bg-red-100 transition duration-300"
        >
          TRY AGAIN
        </button>
      </div>
    );
  } else if (currentPage === "memories") {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-16">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className={`relative max-w-[200px] ${memory.rotation}`}
            >
              <img
                src={memory.image}
                alt="A cherished memory"
                className="w-full h-auto object-cover border-4 border-white shadow-xl"
              />
              <p className="absolute text-center mt-2 w-48 text-red-600 -bottom-8 transform rotate-3">
                {memory.text}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-extrabold text-red-800 mt-28 mb-8">
          Captured Memories
        </h2>
        <button
          onClick={() => handleButtonClick("yes")}
          className="bg-transparent border-2 border-red-400 text-red-700 font-bold py-2 px-6 rounded-full hover:bg-red-100 transition duration-300"
        >
          RETURN
        </button>
      </div>
    );
  } else if (currentPage === "flowers") {
    return (
      <div className="flex flex-col justify-between items-center min-h-screen text-center px-4 py-8">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full max-w-4xl flex-grow pt-8 md:pt-0">
          {/* Left-side messages */}
          <div className="flex flex-col space-y-4 md:space-y-6 md:w-1/2 md:pr-4">
            <div className="bg-purple-200 p-4 rounded-xl border-2 border-purple-400 text-purple-800 text-sm md:text-base">
              <p>You're as beautiful as a bouquet of freshly bloomed flowers</p>
            </div>
            <div className="bg-purple-200 p-4 rounded-xl border-2 border-purple-400 text-purple-800 text-sm md:text-base">
              <p>
                Being around you feels like walking through a field of flowers
              </p>
            </div>
            <div className="bg-purple-200 p-4 rounded-xl border-2 border-purple-400 text-purple-800 text-sm md:text-base">
              <p>
                You brighten up the day just like a bunch of blooming flowers
              </p>
            </div>
            <div className="bg-purple-200 p-4 rounded-xl border-2 border-purple-400 text-purple-800 text-sm md:text-base">
              <p>
                Your kindness spreads like the scent of flowers in the spring.
              </p>
            </div>
            <div className="bg-purple-200 p-4 rounded-xl border-2 border-purple-400 text-purple-800 text-sm md:text-base">
              <p>
                You're as lovely as a garden full of flowers after the rain.
              </p>
            </div>
          </div>

          {/* Central Flower Image and Text */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center my-8 md:my-0">
            <img
              src="/cute-character-icon.png"
              alt="cute character with flowers"
              className="w-48 h-auto"
            />
            <h3 className="text-xl md:text-2xl font-extrabold text-purple-800 mt-4">
              FLOWERS FOR YOU!!!
            </h3>
          </div>

          {/* Right-side messages */}
          <div className="flex flex-col space-y-4 md:space-y-6 md:w-1/2 md:pl-4">
            <div className="bg-purple-200 p-4 rounded-xl border-2 border-purple-400 text-purple-800 text-sm md:text-base">
              <p>Spending time with you is like receiving a surprise bouquet</p>
            </div>
            <div className="bg-purple-200 p-4 rounded-xl border-2 border-purple-400 text-purple-800 text-sm md:text-base">
              <p>
                Just like flowers, you make everything around you more vibrant.
              </p>
            </div>
            <div className="bg-purple-200 p-4 rounded-xl border-2 border-purple-400 text-purple-800 text-sm md:text-base">
              <p>
                Your presence is as comforting as holding a warm bouquet close.
              </p>
            </div>
            <div className="bg-purple-200 p-4 rounded-xl border-2 border-purple-400 text-purple-800 text-sm md:text-base">
              <p>
                You bring color to life, the way flowers bring color to the
                earth.
              </p>
            </div>
            <div className="bg-purple-200 p-4 rounded-xl border-2 border-purple-400 text-purple-800 text-sm md:text-base">
              <p>
                You're as gentle and graceful as petals dancing in the breeze.
              </p>
            </div>
          </div>
        </div>

        {/* The horizontal rule and button section */}
        <div className="w-full flex flex-col items-center mt-auto pb-4">
          <div className="w-full h-[2px] bg-red-400 my-8 max-w-lg"></div>
          <h2 className="text-3xl font-extrabold text-red-800 mb-8">
            Virtual Flowers
          </h2>
          <button
            onClick={() => handleButtonClick("yes")}
            className="bg-transparent border-2 border-red-400 text-red-700 font-bold py-2 px-6 rounded-full hover:bg-red-100 transition duration-300"
          >
            RETURN
          </button>
        </div>
      </div>
    );
  } else if (currentPage === "song") {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center px-4 md:px-0">
        <p className="text-xl font-semibold mb-4 text-red-700">
          This song reminds me of you (&gt;u&lt;)
        </p>
        <div className="w-full max-w-lg aspect-video rounded-xl overflow-hidden border-4 border-red-800 shadow-lg mb-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZnLq0huSa4I?si=wSAARHrNV8Ddeyg7"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <p className="text-md font-semibold text-red-600 mb-2">
          My Favorite Movie - Gilyan Saludes
        </p>
        <p className="text-sm font-semibold text-red-600 mb-8">
          secret message: 0:35 - 1:09
        </p>
        <div className="w-full h-[2px] bg-red-400 my-8 max-w-lg"></div>
        <h2 className="text-3xl font-extrabold text-red-800 mb-8">
          Song about you
        </h2>
        <button
          onClick={() => handleButtonClick("yes")}
          className="bg-transparent border-2 border-red-400 text-red-700 font-bold py-2 px-6 rounded-full hover:bg-red-100 transition duration-300"
        >
          RETURN
        </button>
      </div>
    );
  } else if (currentPage === "letter") {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center px-4 md:px-0">
        <div className="bg-red-100 p-6 rounded-xl border-2 border-red-500 text-red-800 max-w-2xl mb-8">
          <p className="whitespace-pre-wrap text-md md:text-lg">
            {`HAPPY 18TH BIRTHDAY, KAITHE!
            Time flies fast, 18 kana. It feels like just yesterday lang tayo nagkakilala and now you're stepping into this new chapter of your life.
            I'm so lucky to have you. Through all the ups and downs, laughter and tears, you're always there by my side. I can't wait to make more unforgettable memories with you as we both grow. 
            As you enter adulthood, I'm very proud of you. You're amazing and I have no doubt that you're going to do amazing things. I'll always be here cheering you every step of the way!
            Wishing you more laughter, more adventures, and more late-night talks. May you enjoy life filled with love, joy, and happiness that you deserve.
            
            Happy Birthday!!
            
            ---Nicolai >_<`}
          </p>
        </div>
        <div className="w-full h-[2px] bg-red-400 my-8 max-w-lg"></div>
        <h2 className="text-3xl font-extrabold text-red-800 mb-8">
          Message for my love
        </h2>
        <button
          onClick={() => handleButtonClick("yes")}
          className="bg-transparent border-2 border-red-400 text-red-700 font-bold py-2 px-6 rounded-full hover:bg-red-100 transition duration-300"
        >
          RETURN
        </button>
      </div>
    );
  }
}

export default App;
