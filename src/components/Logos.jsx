import React from "react";
import { IMG } from "../config/images";

const Logos = () => {
  const logos = [
    {
      name: "Facebook Marketing Partner",
      img: IMG.LOGO_FACEBOOK,
      sub: "Premier Partner",
    },
    {
      name: "Google Partner",
      img: IMG.LOGO_GOOGLE,
      sub: "Google Endorsed",
    },
    {
      name: "Forbes",
      img: IMG.LOGO_FORBES,
      sub: "Agency Council",
    },
    {
      name: "Inc 5000",
      img: IMG.LOGO_INC,
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
