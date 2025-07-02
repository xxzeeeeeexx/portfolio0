import React from "react";
import "./App.css";
import Gallery from "./components/Gallery.jsx";
import { FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function App() {

    /* Portfolio Text Line Functions */

    const scrollRef = useRef(null);
    const [smoothedY, setSmoothedY] = useState(0);
    const targetY = useRef(0);

    useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let animationFrame;
  const smoothingFactor = 0.1;
  const threshold = 0.5; // stop updating if change is super tiny

  const smoothScroll = () => {
    const diff = targetY.current - smoothedY;
    if (Math.abs(diff) > threshold) {
      setSmoothedY(smoothedY + diff * smoothingFactor);
    }
    animationFrame = requestAnimationFrame(smoothScroll);
  };

  const handleScroll = () => {
    targetY.current = container.scrollTop;
  };

  container.addEventListener("scroll", handleScroll);
  animationFrame = requestAnimationFrame(smoothScroll);

  return () => {
    container.removeEventListener("scroll", handleScroll);
    cancelAnimationFrame(animationFrame);
  };
}, [smoothedY]);


    /* Gallery Functions */
    const photographyObjects = import.meta.glob("/src/assets/images/photography/*.{jpg,png}", { eager: true });

    const photographyPhotos = Object.values(photographyObjects).map((module, i) => ({
    src: module.default,
    alt: `Photo ${i + 1}`,
    }));

    const graphicsObjects = import.meta.glob("/src/assets/images/graphics/*.{jpg,png}", { eager: true });

    const graphicsPhotos = Object.values(graphicsObjects).map((module, i) => ({
    src: module.default,
    alt: `Photo ${i + 1}`,
    }));

    const webDevObjects = import.meta.glob("/src/assets/images/webdev/*.{jpg,png}", { eager: true });

    const webDevPhotos = Object.values(webDevObjects).map((module, i) => ({
    src: module.default,
    alt: `Photo ${i + 1}`,
    }));

    /*Button Functions */

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    /* main App content */
    return (
        <div className="app-container">

            <div className="portfolio-text-lines">
                <div className="portfolio-text-line-1" style={{ transform: `translateY(-${smoothedY * 2}px)` }}>25 PORTFOLIO — ’25 PORTFOLIO — ’25 PORTFOLIO — ’25 PORTFOLIO — ’25PORTFOLIO — ’25 PORTFOLIO — ’25 PORTFOLIO — ’25 PORTFOLIO — ’25</div>
                <div className="portfolio-text-line-2" style={{ transform: `translateY(-${smoothedY * 0.5}px)` }}>. PORTFOLIO — ’25 PORTFOLIO — ’25 PORTFOLIO — ’25 PORTFOLIO — ’25PORTFOLIO — ’25 PORTFOLIO — ’25 PORTFOLIO — ’25 PORTFOLIO — ’25</div>
            </div>

            <div className="divider"></div>

            <div className="right-side" ref={scrollRef}>

                <div className="above-nav"></div>

                <nav className="navbar">
                    <ul>
                        <li><button className="button" onClick={()=>scrollToSection('home')}>HOME</button></li>
                        <li><button className="button" onClick={()=>scrollToSection('photography')}>PHOTOGRAPHY</button></li>
                        <li><button className="button" onClick={()=>scrollToSection('graphics')}>GRAPHICS</button></li>
                        <li><button className="button" onClick={()=>scrollToSection('web-dev')}>WEB DEV</button></li>
                        <li><button className="button" onClick={()=>scrollToSection('reach-me')}>REACH ME</button></li>
                    </ul>
                </nav>
        
                <section id="home" className="home">
                    <div className="main-text">
                        <p className="hiya">
                            Hiya. I'm
                        </p>
                        <p className="home-name">
                            Zayan Bangara—
                        </p>
                        <div className="things-i-am">
                            <p className="thing" onClick={() => scrollToSection('photography')} style={{ cursor: "pointer" }}>
                                a photographer.
                            </p>
                            <p className="thing" onClick={() => scrollToSection('graphics')} style={{ cursor: "pointer" }}>
                                a graphic designer.
                            </p>
                            <p className="thing" onClick={() => scrollToSection('web-dev')} style={{ cursor: "pointer" }}>
                                a web developer.
                            </p>
                        </div>
                    </div>
                </section>
        
                <section id="photography" className="content photography">
                    <div className="main-text">
                        <p className="hiya">
                            Hiya. I'm
                        </p>
                        <p className ="big-text">a photographer.</p>
                        <p className="description">
                            A growing part of my life for well over 5 years,
                            what began as a hobby has evolved into a pursuit for perfection
                            in still frames— a craft that I now carry with confidence.
                        </p>
                    </div>
                    <div className="works">
                        <Gallery photos={photographyPhotos} />
                    </div>
                </section>

                <section id="graphics" className="content graphics">
                    <div className="main-text">
                        <p className="hiya">
                            Hiya. I'm
                        </p>
                        <p className="big-text">a graphic designer.</p>
                        <p className="description">
                            Early in my journey, and while my design eye is still growing,
                            the skills to create are already there.
                            These first pieces mark the beginning.
                        </p>
                    </div>
                    <div className="works">
                        <Gallery photos={graphicsPhotos} className="graphics-gallery" />
                    </div>
                </section>

                <section id="web-dev" className="content web-dev">
                    <div className="main-text">
                        <p className="hiya">
                            Hiya. I'm
                        </p>
                        <p className="big-text">a web developer.</p>
                        <p className="description">
                            This journey begins right here—
                            my very first fully functional page.
                            Glad to have you be a part of it.
                        </p>
                    </div>
                    <div className="works">
                        <Gallery photos={webDevPhotos} className="web-dev-gallery" />
                    </div>
                </section>

                <section id="reach-me" className="content reach-me">
                    <div className="main-text">
                        <p className="say-hiya">
                            Say hiya.
                        </p>
                        <p className="big-text">Let's Talk.</p>
                        <p className="description">
                                Reach me on any of these platforms if you want to create something togehter, hire me, or just chat.
                        </p>
                    </div>
                    <div className="contact-section">
                        <a href="mailto:zenzauae@gmail.com">
                            <FaEnvelope className="icon" /><p className="my-id">zenzauae@gmail.com</p>
                        </a>
                        <a href="https://instagram.com/zenzalabs" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="icon" /><p className="my-id">@zenzalabs</p>
                        </a>
                        <a href="https://wa.me/971502254347" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="icon" /><p className="my-id">+971 50 225 4347</p>
                        </a>
                        <a href="https://github.com/ZenzaLabs" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon" /><p className="my-id">ZenzaLabs</p>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
} 