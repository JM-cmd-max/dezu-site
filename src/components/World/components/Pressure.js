import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Pressure({ object, setContainer, container, handleTabClick }) {
  const { elRef, cursorRef } = useConsoleText(["PRESSURE"], ["#fff"], "text");
  function useConsoleText(words, colors, id) {
    const elRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
      const target = elRef.current;
      const cursor = cursorRef.current;
      let letterCount = 1;
      let x = 1;
      let waiting = false;
      const colorsRef = [...colors];
      const wordsRef = [...words];

      const updateText = () => {
        if (letterCount === 0 && !waiting) {
          waiting = true;
          target.innerHTML = wordsRef[0].substring(0, letterCount);
          setTimeout(() => {
            const usedColor = colorsRef.shift();
            colorsRef.push(usedColor);
            const usedWord = wordsRef.shift();
            wordsRef.push(usedWord);
            x = 1;
            target.setAttribute("style", "color:" + colorsRef[0]);
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === wordsRef[0].length + 1 && !waiting) {
          waiting = true;
          setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (!waiting) {
          target.innerHTML = wordsRef[0].substring(0, letterCount);
          letterCount += x;
        }
      };

      const textInterval = setInterval(() => {
        if (letterCount > wordsRef[0].length) {
          clearInterval(textInterval);
          return;
        }
        updateText();
      }, 120);

      const blinkCursor = () => {
        cursor.classList.toggle("hidden");
      };

      const cursorInterval = setInterval(blinkCursor, 400);

      return () => {
        clearInterval(textInterval);
        clearInterval(cursorInterval);
      };
    }, [colors, words]);

    return { elRef, cursorRef };
  }

  function handleClick() {
    object.current.emitEventReverse("mouseDown");
    // object.current.emitEvent("mouseUp");
    setContainer(() => !container);
  }

  useGSAP(() => {
    gsap.fromTo(
      "#container",
      { translateX: -300, opacity: 0 },
      { translateX: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  });
  // useEffect(() => {
  //   const bridgeObj = spline.findObjectByName("Water Jet");
  //   object.current = bridgeObj;
  // }, []);

  return (
    <div
      id="container"
      className={
        "absolute bg-gradient-to-r from-gray-900 to to-transparent h-[100vh] w-[75vw] top-0 z-10"
      }
    >
      <div className="flex flex-col pt-72 px-32 h-full w-[75vw] justify-center items-start">
        <h2
          className="text-red-600 border-b-inherit go-back-btn mb-4"
          onClick={handleClick}
        >
          Go back
        </h2>
        <div>
          <span
            id="text"
            style={{
              fontFamily: "rajdhani",
              fontWeight: "500",
              fontSize: "80px",
              color: "#fff",
            }}
            ref={elRef}
          ></span>
          <div
            className="console-underscore"
            id="console"
            style={{ color: "#fff", fontSize: "80px" }}
            ref={cursorRef}
          >
            &#95;
          </div>
        </div>
        <p className="text-white text-22px pt-3">
          Elegant cleaning lorem ipsum dolor sclere. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div
          className="contact-us-btn learn-more-btn"
          onClick={() => {
            handleTabClick("Pressure Technology", "#FF5050", "#1D0C0C");
          }}
        >
          <Link
            className="contact-link"
            style={{
              color: "black",
              backgroundColor: "#FF5050",
              textDecoration: "none",
              display: "inline-block",
              padding: "3px 30px",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = `0px 0px 41px 0px #FF5050`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pressure;
