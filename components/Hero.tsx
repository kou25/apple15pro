"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState("");

  const handleVideoSrc = () => {
    const source = window.innerWidth < 768 ? smallHeroVideo : heroVideo;
    setVideoSrc(source);
  };

  useEffect(() => {
    // This code will only run on the client side
    handleVideoSrc();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);
    return () => window.removeEventListener("resize", handleVideoSrc);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero-title" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          {videoSrc && (
            <video
              className="pointer-events-none"
              autoPlay
              muted
              playsInline={true}
              key={videoSrc}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 traslate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From ₹129800.00*</p>
      </div>
    </section>
  );
};

export default Hero;
