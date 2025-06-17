"use client";
import React, { useState, useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/svgs/main-logo.svg";
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const [isNavFixed, setisNavFixed] = useState(false);
  const headerWrapperRef = useRef(null);
  const handleScroll = () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 80) {
      setisNavFixed(true);
    } else {
      setisNavFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const showAnim = gsap
      .from(headerWrapperRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      },
    });
  }, []);
  return (
    <nav>
      <div
        ref={headerWrapperRef}
        id="header-wrapper"
        className={`shadow-lg fixed top-0 left-0 right-0 z-[9999] bg-white`}
      >
        <header className="2xl:py-2 xlg:py-1 py-2 z-50">
          <div className="w-container h-full xlg:py-3 py-1 mt-[2px] flex gap-4 items-center justify-between m-auto">
            <Link href="/">
              <Image
                src={logo}
                alt="Supreme Group Logo"
                className="h-ful cursor-pointer"
              />
            </Link>
          </div>
        </header>
      </div>
    </nav>
  );
};

export default Header;
