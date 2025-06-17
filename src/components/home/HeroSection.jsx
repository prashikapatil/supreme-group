import React from "react";
const HeroSection = () => {
  return (
    <section className="relative lg:h-screen min-h-[450px] overflow-hidden bg-blueDark">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          // poster={bannerPoster}
          playsInline
          loop
          className="h-full w-full object-cover object-center"
        >
          <source src="/videos/heroSectionVideo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="absolute inset-0 grid place-content-center place-items-center pt-10 md:pt-5 lg:pt-10 gap-2 text-center w-11/12 mx-auto">
        <span className="sg-translate font-light pt-2 pb-3 text-lg xl:text-xl 2xl:text-[1.375rem] text-white block leading-snug">
          Driven by performance
        </span>
        <h2 className="sg-translate text-white font-light leading-tight pb-2">
          <span className="font-semibold">
            Soft trims and <span className="text-blue">NVH solutions</span>
          </span>
          <br className="hidden md:block" /> for seamless rides
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
