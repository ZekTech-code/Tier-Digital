import React from "react";

const Logos = () => {
  const logos = [
    {
      name: "Facebook Marketing Partner",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      sub: "Premier Partner",
    },
    {
      name: "Google Partner",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      sub: "Google Endorsed",
    },
    {
      name: "Forbes",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Forbes_logo.svg",
      sub: "Agency Council",
    },
    {
      name: "Inc 5000",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/94/Inc._magazine_logo.svg",
      sub: "Fastest Growing",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-6 pb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              src={logo.img}
              alt={logo.name}
              className="h-10 object-contain grayscale opacity-80 hover:opacity-100 transition"
            />

            <p className="text-sm text-gray-300">{logo.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
