"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import commercialposter from "@/assets/images/Commercial Alpha-poster.webp";
import commercialCabinPoster from "@/assets/images/Commercial Cabin-poster.png";
import commercialEnginePoster from "@/assets/images/Commercial engine-poster.png";
import commercialCabinTab from "@/assets/svgs/commercial-cabin.svg";
import commercialEngineTab from "@/assets/svgs/commercial-engine.svg";
import commercialBodyTab from "@/assets/svgs/commercial-body.svg";
import bodyTab from "@/assets/images/body.png";
import bodyPoster from "@/assets/images/Passenger Alpha-poster.webp";
import frontTab from "@/assets/images/front.png";
import frontPoster from "@/assets/images/Front-poster.webp";
import cabinTab from "@/assets/images/cabin.png";
import cabinPoster from "@/assets/images/Cabin-poster.webp";
import trunkTab from "@/assets/images/trunk.png";
import trunkPoster from "@/assets/images/Trunk-poster.webp";
import exteriorTab from "@/assets/images/exerior.png";
import exteriorPoster from "@/assets/images/Exterior-poster.webp";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: "1",
    title: "Complete body",
    tabImage: bodyTab,
    video: "/videos/Passenger Alpha.mp4",
    poster: bodyPoster,
  },
  {
    id: "2",
    title: "Front",
    tabImage: frontTab,
    video: "/videos/Front.mp4",
    poster: frontPoster,
  },
  {
    id: "3",
    title: "Cabin ",
    tabImage: cabinTab,
    video: "/videos/Cabin.mp4",
    poster: cabinPoster,
  },
  {
    id: "4",
    title: "Trunk",
    tabImage: trunkTab,
    video: "/videos/Trunk.mp4",
    poster: trunkPoster,
  },
  {
    id: "5",
    title: "Exterior",
    tabImage: exteriorTab,
    video: "/videos/Exterior.mp4",
    poster: exteriorPoster,
  },
];

const commercialSolutions = [
  {
    id: "1",
    title: "Complete Body",
    tabImage: commercialBodyTab,
    video: "/videos/Commercial Alpha.mp4",
    poster: commercialposter,
  },
  {
    id: "2",
    title: "Engine",
    tabImage: commercialEngineTab,
    video: "/videos/Commercial-Engine.mp4",
    poster: commercialEnginePoster,
  },
  {
    id: "3",
    title: "Cabin",
    tabImage: commercialCabinTab,
    video: "/videos/Commercial-Cabin.mp4",
    poster: commercialCabinPoster,
  },
];

function SolutionCard({ video, title, poster }) {
  return (
    <div className="text-white flex flex-col justify-between text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="object-cover mb-8 mt-10"
      >
        <source src={video} />
      </video>

      <span className="sg-translate ">{title}</span>
    </div>
  );
}

function CircularProgressBarButton({ progress, togglePlayPause, isPlaying }) {
  const radius = 23;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-block z-50">
      <button
        type="button"
        onClick={togglePlayPause}
        className="p-3 2xl:p-4 rounded-full z-10 relative"
      >
        {!isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 12 12"
          >
            <path
              fill="currentColor"
              d="M4.496 1.994A1 1 0 0 0 3 2.862v6.277a1 1 0 0 0 1.496.868l5.492-3.139a1 1 0 0 0 0-1.736z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2"
            />
          </svg>
        )}
      </button>
      <svg
        className="absolute top-0 left-0 z-0"
        width="100%"
        height="100%"
        viewBox="0 0 48 48"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="2.5"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
    </div>
  );
}

function Tab({ title, index, activeIndex, tabImage, onClick }) {
  return (
    <button
      id={`control-${index}`}
      type="button"
      onClick={() => onClick(index)}
      aria-label={title}
      className={`flex flex-col font-light items-center justify-center transition-opacity duration-300 hover:opacity-100 
      cursor-pointer
                      ${activeIndex === index ? "opacity-100" : " opacity-50 "}
                    `}
    >
      <Image
        src={tabImage}
        alt={title}
        className="max-h-16 pt-1 2xl:max-h-20"
        width={60}
        height={60}
      />
      <span className="sg-translate -mt-1 text-sm 2xl:text-base">{title}</span>
    </button>
  );
}

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollController, setScrollController] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isLargeDevice, setIsLargeDevice] = useState(false);
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRefSlide2 = useRef(null);
  const [refresher, setRefresher] = useState(false);
  useEffect(() => {
    // This runs only on client, so no need for typeof window
    const handleResize = () => {
      setIsLargeDevice(window.innerWidth >= 1024);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (!isLargeDevice) return;

    const ctx = gsap.context(() => {
      const animPhase1 = gsap.from(containerRef.current, {});
      const newController = ScrollTrigger.create({
        animation: animPhase1,
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
      });

      const timelinePhase1 = gsap.timeline({ paused: true });

      timelinePhase1
        .from(".animated-heading", {
          y: "30vh",
          duration: 2,
          ease: "power1.inOut",
        })
        .addLabel("lbl-1", 4)
        .from(
          ".slider-parent",
          {
            y: "40vh",
            opacity: 0,
            duration: 2.5,
            ease: "power1.inOut",
          },
          0.5
        )
        .from(
          ".card-details-1",
          {
            y: "40vh",
            opacity: 0,
            duration: 2,
            ease: "power1.inOut",
          },
          0.7
        )
        .from(
          ".card-details-2",
          {
            y: "40vh",
            opacity: 0,
            duration: 2,
            ease: "power1.inOut",
          },
          0.8
        )
        .from(
          ".video-slide-1",
          {
            y: "50vh",
            opacity: 0,
            duration: 2,
            ease: "power1.inOut",
            onUpdate: () => {
              setActiveSlide(0);
            },
          },
          1.1
        )
        .from(
          ".controls-slide-1",
          {
            y: 50,
            opacity: 0,
            duration: 2,
            ease: "power1.inOut",
          },
          2
        )
        .from(
          ".video-control-1",
          {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: "power1.inOut",
          },
          2
        )
        .to(
          ".video-slide-1",
          {
            y: 0,
            duration: 2,
            ease: "power1.inOut",
          },
          4.1
        )
        .to(
          ".video-slide-1",
          {
            y: -100,
            opacity: 0,
            scale: 0.5,
            duration: 3,
            ease: "power1.inOut",
            onUpdate: () => {
              setActiveSlide(0);
            },
          },
          5.5
        )
        .to(
          ".controls-slide-1",
          {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power1.inOut",
          },
          6
        )
        .addLabel("lbl-2", 12)
        .to(
          ".video-slide-2",
          {
            top: -20,
            opacity: 1,
            scale: 1,
            duration: 4,
            ease: "power1.inOut",
            onUpdate: () => {
              setActiveSlide(1);
              setActiveIndex(0);
            },
          },
          6.1
        )
        .to(
          ".card-details-1",
          {
            opacity: 0.2,
            duration: 2,
            ease: "power1.inOut",
          },
          6.5
        )
        .to(
          ".slider-height",
          {
            y: "100%",
            duration: 2,
            ease: "power1.inOut",
          },
          6.5
        )
        .to(
          ".card-details-2",
          {
            opacity: 1,
            duration: 2,
            ease: "power1.inOut",
          },
          6.5
        )
        .to(
          ".video-slide-2",
          {
            opacity: 1,
            duration: 5,
            ease: "power1.inOut",
          },
          8
        )
        .from(
          ".commercial-controls",
          {
            y: 50,
            delay: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power1.inOut",
          },
          8.2
        );

      setScrollController(newController);

      ScrollTrigger.create({
        animation: timelinePhase1,
        trigger: containerRef.current,
        start: "top top",
        end: "bottom -200%",
        scrub: 3,
        pin: true,
        snap: {
          snapTo: "labelsDirectional",
          delay: 0,
          duration: 1,
          ease: "power1.inOut",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, [isLargeDevice, refresher]);

  useEffect(() => {
    setTimeout(() => {
      setRefresher((p) => !p);
    }, 1000);
  }, []);

  const togglePlayPause = useCallback(() => {
    let video;
    if (activeSlide === 0) {
      video = videoRef.current;
      videoRefSlide2.current?.pause();
    } else {
      video = videoRefSlide2.current;
      videoRef.current?.pause();
    }
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, activeSlide]);

  useEffect(() => {
    setProgress(0);
    setIsPlaying(true);
  }, [activeIndex, activeSlide]);

  useEffect(() => {
    if (activeSlide === 0) {
      videoRef.current?.play();
      videoRefSlide2.current?.pause();
      videoRefSlide2.current.currentTime = 0;
    } else {
      videoRef.current?.pause();
      videoRef.current.currentTime = 0;
      videoRefSlide2.current?.play();
    }
  }, [activeSlide]);

  useEffect(() => {
    if (activeIndex === 0) {
      videoRef.current.currentTime = 0;
      videoRef.current?.pause();
    }
  }, [activeIndex]);

  const handleSlide = (update) => {
    scrollController?.scroll(
      scrollController.start +
        (update / 2) * (scrollController.end - scrollController.start)
    );
  };

  const handleTimeUpdate = useCallback(
    (e) => {
      const { currentTime, duration } = e.target;
      const vidProgress = (currentTime / duration) * 100;
      setProgress(vidProgress);
    },
    [setProgress]
  );

  return (
    <div className="blade-top-padding blade-bottom-padding bg-black">
      <section
        ref={containerRef}
        className="bg-black blade-top-padding blade-bottom-padding text-white lg:h-screen lg:overflow-hidden"
      >
        <div className="w-container max-w-none flex flex-col h-full justify-between gap-4 2xl:gap-10 w-full">
          <h2
            className="animated-heading hidde w-fit mx-auto md:block text-white font-light text-center 
          blade-top-padding-sm xl:pt-6 z-10"
          >
            <span className="sg-translate">
              Evolving the drive with{" "}
              <span className="font-bold">360-degree</span>{" "}
              <br className="hidden md:block" /> comprehensive solutions
            </span>
          </h2>

          {/* Desktop view */}
          <div className="hidden lg:grid grid-cols-[35%_65%] relative ">
            <div className="cards-wrp pl-14 self-cente ml-[15%] relative 2xl:ml-[25%] 2xl:py-10 py-5 flex flex-col ">
              <button
                onClick={() => handleSlide(2)}
                type="button"
                className="card-details-1"
              >
                <h3 className="sg-translate font-medium text-left pb-2">
                  Passenger vehicles
                </h3>
                <h6 className="sg-translate font-light text-left 2xl:text-lg">
                  Revving up innovation from <br /> interior to exterior.
                </h6>
              </button>

              <button
                onClick={() => handleSlide(6)}
                type="button"
                className="card-details-2 opacity-20 mt-14"
              >
                <h3 className="sg-translate font-medium text-left pb-2">
                  Commercial vehicles
                </h3>
                <h6 className="sg-translate font-light text-left 2xl:text-lg">
                  Advancing engineering <br /> for heavy-duty vehicles.
                </h6>
              </button>

              <div className="slider-parent absolute left-0 h-full w-[2px] rounded-md bg-gray top-0 ">
                <div className="slider-height h-[50%] w-[2px] bg-white rounded-md" />
              </div>
            </div>

            <div className="relative flex items-center">
              <div className="video-slide-1 self-center mx-auto">
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key={activeIndex}
                    timeout={400}
                    classNames="fade-show"
                    nodeRef={videoRef}
                  >
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      playsInline
                      className="w-auto max-h-[360px] min-h-[230px] 2xl:h-[40vh] h-24"
                      onTimeUpdate={handleTimeUpdate}
                      poster={solutions[activeIndex]?.poster}
                    >
                      <source src={solutions[activeIndex].video} />
                    </video>
                  </CSSTransition>
                </SwitchTransition>
              </div>

              <div className="video-slide-2 z-20 w-[580px] xl:w-[750px] 2xl:w-[900px] h-[110%] absolute top-[80vh] flex items-center justify-center">
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key={activeIndex}
                    timeout={300}
                    classNames="fade-show"
                    nodeRef={videoRefSlide2}
                  >
                    <video
                      ref={videoRefSlide2}
                      autoPlay
                      muted
                      playsInline
                      className="w-auto max-h-[360px] scale-105 min-h-[230px] 2xl:h-[40vh] h-24 "
                      onTimeUpdate={handleTimeUpdate}
                      poster={commercialSolutions[activeIndex]?.poster}
                    >
                      <source src={commercialSolutions[activeIndex]?.video} />
                    </video>
                  </CSSTransition>
                </SwitchTransition>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="hidden lg:flex justify-end items-center relative w-container">
            <div className="flex justify-center w-[640px] xl:w-[720px] 2xl:w-[900px] relative">
              <div className="grid grid-cols-5 controls-slide-1">
                {solutions.map((item, index) => {
                  return (
                    <Tab
                      key={item.id}
                      index={index}
                      title={item.title}
                      activeIndex={activeIndex}
                      tabImage={item.tabImage}
                      onClick={(selectedIndex) => setActiveIndex(selectedIndex)}
                    />
                  );
                })}
              </div>

              <div className="grid grid-cols-3 xl:gap-x-8 place-content-center commercial-controls absolute inset-0 w-fit mx-auto">
                {commercialSolutions.map((item, index) => {
                  return (
                    <Tab
                      key={item.id}
                      index={index}
                      title={item.title}
                      activeIndex={activeIndex}
                      tabImage={item.tabImage}
                      onClick={(selectedIndex) => setActiveIndex(selectedIndex)}
                    />
                  );
                })}
              </div>

              <div className="video-control-1 absolute right-0 top-0 bottom-0 my-auto z-50 flex items-center">
                <CircularProgressBarButton
                  progress={progress}
                  isPlaying={isPlaying}
                  togglePlayPause={togglePlayPause}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="lg:hidden blade-top-padding-lg mt-2 text-center w-container">
          <div>
            <h4 className="sg-translate text-xl text-blue mb-2 font-semibold">
              Passenger vehicles
            </h4>
            <p className="sg-translate ">
              Revving up innovation <br className="md:hidden" /> from interior
              to exterior.
            </p>

            <Swiper
              modules={[Navigation, Pagination, Autoplay, A11y]}
              pagination={{
                clickable: true,
              }}
              speed={600}
              spaceBetween={20}
              className="cursor-grab my-4"
            >
              {solutions.map((item) => {
                return (
                  <SwiperSlide
                    key={item.id}
                    className="pb-16 flex flex-col justify-end"
                  >
                    <SolutionCard
                      title={item.title}
                      video={item.video}
                      poster={item.poster}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="blade-top-padding ">
            <h3 className="sg-translate text-xl mb-2 text-blue font-semibold">
              Commercial vehicles
            </h3>
            <p className="sg-translate ">
              Advancing engineering <br className="md:hidden" /> for heavy-duty
              vehicles.
            </p>

            <Swiper
              modules={[Navigation, Pagination, Autoplay, A11y]}
              pagination={{
                clickable: true,
              }}
              speed={600}
              spaceBetween={20}
              className="cursor-grab my-4 h-full"
              autoHeight
            >
              {commercialSolutions.map((item) => {
                return (
                  <SwiperSlide
                    key={item.id}
                    className="pb-16 flex flex-col justify-end self-stretch h-auto"
                  >
                    <SolutionCard
                      title={item.title}
                      video={item.video}
                      poster={item.poster}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
