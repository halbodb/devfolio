import { useState, useEffect } from "react";
import { gsap } from "gsap";
import Meta from "@/components/Seo/Meta";
import Loader from "@/components/Loader/Loader";
import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu/Menu";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Cursor from "@/components/Cursor/Cursor";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Hero from "@/components/Hero/Hero";
import About1 from "@/components/About/About1";
import Skills from "@/components/Skills/Skills";
import About2 from "@/components/About/About2";
import Projects from "@/components/Projects/Projects";
import Work from "@/components/Work/Work";
import Collaboration from "@/components/Collaboration/Collabaration";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Scripts from "@/components/Scripts/Scripts";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    consoleLog()
    setTimeout(() => {
      setIsLoading(false);
    }, 2700);
  }, []);

  useEffect(() => {
    const result =
      typeof window.orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    window.history.scrollRestoration = "manual";

    setIsDesktop(result);
    setClientHeight(window.innerHeight);
    setClientWidth(window.innerWidth);
  }, [isDesktop, clientHeight]);

  const consoleLog = () => {
    // console.log(
    //   `%c          /$$                                                   /$$ \n          | $$                                                  | $$\n  /$$$$$$$| $$$$$$$   /$$$$$$   /$$$$$$  /$$  /$$$$$$   /$$$$$$ | $$\n /$$_____/| $$__  $$ |____  $$ /$$__  $$|__/ /$$__  $$ /$$__  $$| $$\n|  $$$$$$ | $$  \ $$  /$$$$$$$| $$  \__/ /$$| $$$$$$$$| $$$$$$$$| $$\n \____  $$| $$  | $$ /$$__  $$| $$      | $$| $$_____/| $$_____/| $$\n /$$$$$$$/| $$  | $$|  $$$$$$$| $$      | $$|  $$$$$$$|  $$$$$$$| $$\n|_______/ |__/  |__/ \_______/|__/      | $$ \_______/ \_______/|__/\n                                   /$$  | $$                        \n                                  |  $$$$$$/                        \n                                   \______/                         \n`,
    //   "background: #212121; color: #6b17e8;"
    // );

    // console.log(
    //   "%c Hope you like what you see :)",
    //   "background: #212121; color: #6b17e8; padding: 6px;"
    // );

    // console.log = () => { };
    console.warn = () => { };
    console.error = () => { };
  };

  return (
    <>
      <Meta>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header>
              <Menu />
            </Header>
            <ProgressIndicator />
            <Cursor isDesktop={isDesktop} />
            <main className="flex flex-col">
              <div
                role="img"
                className="text-gray-light-1 opacity-10 sm:text-9xl xs:text-8xl inline-block -z-10 absolute rotate-90 right-0 md:top-52 xs:top-96"
              >
                DEV
              </div>
              <div className="fixed top-0 left-0 h-screen w-screen -z-1"></div>
              <Hero />
              <About1 clientHeight={clientHeight} />
              <Skills />
              <About2 clientHeight={clientHeight} />
              <Projects isDesktop={isDesktop} clientHeight={clientHeight} />
              <Work clientWidth={clientWidth} />
              <Collaboration clientHeight={clientHeight} />
              <div className="pt-10 sm:pt-16 bg-gray-dark-4"></div>
              <Contact />
            </main>
            <Footer />
            <Scripts />
          </>
        )}
       
      </Meta>
    </>
  );
}