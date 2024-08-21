import Spline from "@splinetool/react-spline";
import { useContext, useEffect, useRef, useState } from "react";
import Container from "./components/Container";
import Tank from "./components/Tank";
import Globe from "./components/Globe";
import Pressure from "./components/Pressure";
import Contact from "./components/Contact";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PageContext from "../../context/PageContext";
import ColorContext from "../../context/ColorContext";

function World() {
  const navigate = useNavigate();
  const logo = useRef();
  const bridge = useRef();
  const tank = useRef();
  const ship = useRef();
  const globe = useRef();
  const plane = useRef();
  const [container, setContainer] = useState(false);
  const [tankCon, setTankCon] = useState(false);
  const [aboutCon, setAboutCon] = useState(false);
  const [pressureCon, setPressureCon] = useState(false);
  const [contactCon, setContactCon] = useState(false);

  const { color, setColor } = useContext(ColorContext);
  const { page, setPage, activeTab, setActiveTab } = useContext(PageContext);

  const handleTabClick = (tabName, color, bgColor) => {
    setColor({ color, bgColor });
    localStorage.setItem("kColor", color);
    localStorage.setItem("kBgColor", bgColor);
    localStorage.setItem("page", tabName);
    setActiveTab(tabName);
    navigate("/use-cases");
  };

  const { params } = useParams();

  // const handleMouseOver = (e) => {
  //   const object = e.target;
  //   console.log(`ETARGET: ${object}`);
  //   object.material.color.set(0xff0000); // Change color to red when hovered
  // };
  console.log(`PARAMS: ${params}`);

  function onMouseDown(e) {
    console.log(e.target.name);
    console.log(e.target.name.length);

    if (e.target.name === "Waterjet") {
      setContainer((container) => !container);
      console.log("CLICKED");
    }
    if (e.target.name === "Cleaning") {
      setTankCon((tankCon) => !tankCon);
      console.log("CLICKED");
    }
    if (e.target.name === "Environment") {
      setAboutCon((aboutCon) => !aboutCon);
      console.log("CLICKED");
    }
    if (e.target.name.trim() === "Pressure") {
      setPressureCon((pressureCon) => !pressureCon);
      console.log("CLICKED");
    }
    if (e.target.name === "CTA") {
      setContactCon((contactCon) => !contactCon);
    }
  }

  function selectedObject(e) {
    console.log(e);
    console.log(e.target.id);
    switch (e.target.id) {
      case "water-jet":
        if (container === true) {
          console.log("CLICKED");
          return;
        }
        bridge.current.emitEvent("mouseDown");
        // bridge.current.emitEvent("mouseUp");
        setContainer(() => !container);
        setTankCon(() => false);
        setAboutCon(() => false);
        setPressureCon(() => false);
        setContactCon(() => false);
        break;
      case "cleaning":
        if (tankCon === true) {
          return;
        }
        tank.current.emitEvent("mouseDown");
        setTankCon(() => !tankCon);
        setContainer(() => false);
        setAboutCon(() => false);
        setPressureCon(() => false);
        setContactCon(() => false);
        break;
      case "about":
        if (aboutCon === true) {
          return;
        }

        globe.current.emitEvent("mouseDown");
        setAboutCon(() => !aboutCon);
        setContainer(() => false);
        setTankCon(() => false);
        setPressureCon(() => false);
        setContactCon(() => false);
        break;
      case "pressure":
        if (pressureCon === true) {
          return;
        }
        ship.current.emitEvent("mouseDown");
        setPressureCon(() => !pressureCon);
        setContainer(() => false);
        setTankCon(() => false);
        setAboutCon(() => false);
        setContactCon(() => false);

        break;
      case "contact":
        if (contactCon === true) {
          return;
        }
        plane.current.emitEvent("mouseDown");
        setContactCon(() => !contactCon);
        setContainer(() => false);
        setTankCon(() => false);
        setPressureCon(() => false);
        setAboutCon(() => false);

        break;
      default:
        return;
    }
  }

  function onLoad(spline) {
    const logoObj = spline.findObjectByName("Logo");
    const bridgeObj = spline.findObjectByName("Waterjet");
    const tankObj = spline.findObjectByName("Cleaning");
    const globeObj = spline.findObjectByName("Environment");
    const shipObj = spline.findObjectByName("Pressure");
    const planeObj = spline.findObjectByName("CTA");

    logo.current = logoObj;
    bridge.current = bridgeObj;
    tank.current = tankObj;
    ship.current = shipObj;
    globe.current = globeObj;
    plane.current = planeObj;
    // console.log(planeObj);

    // Add hover event listeners
  }

  // useEffect(() => {
  //   logo.current.emitEvent("mouseDown");
  // }, []);

  return (
    <div className="relative view">
      <svg
        className="absolute z-100 top-10 left-20"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        width="1730"
        height="37.858"
        viewBox="0 0 1730 37.858"
      >
        <g id="Layer_3">
          <polyline
            points="1730 36.858 1494 36.858 1461.952 4.811 273.857 1.001 238 36.858 0 36.858"
            fill="none"
            stroke="#222"
            stroke-miterlimit="10"
            stroke-width="2"
          />
        </g>
      </svg>
      <svg
        className="absolute z-100 top-10 left-20"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        width="1730"
        height="37.858"
        viewBox="0 0 1730 37.858"
      >
        <g id="Layer_3">
          <polyline
            points="1730 36.858 1494 36.858 1461.952 4.811 273.857 1.001 238 36.858 0 36.858"
            fill="none"
            stroke="#fff"
            stroke-miterlimit="10"
            stroke-width="2"
          />
        </g>
      </svg>
      <svg
        className="absolute z-100 bottom-10 left-20 rotate"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        width="1730"
        height="37.858"
        viewBox="0 0 1730 37.858"
      >
        <g id="Layer_3">
          <polyline
            points="1730 36.858 1494 36.858 1461.952 4.811 273.857 1.001 238 36.858 0 36.858"
            fill="none"
            stroke="#fff"
            stroke-miterlimit="10"
            stroke-width="2"
          />
        </g>
      </svg>

      {container ? (
        <Container
          object={bridge}
          setContainer={setContainer}
          container={container}
          handleTabClick={handleTabClick}
        />
      ) : null}
      {tankCon ? (
        <Tank
          object={tank}
          setContainer={setTankCon}
          container={tankCon}
          handleTabClick={handleTabClick}
        />
      ) : null}
      {aboutCon ? (
        <Globe
          object={globe}
          setContainer={setAboutCon}
          container={aboutCon}
          handleTabClick={handleTabClick}
        />
      ) : null}
      {pressureCon ? (
        <Pressure
          object={ship}
          setContainer={setPressureCon}
          container={pressureCon}
          handleTabClick={handleTabClick}
        />
      ) : null}

      {contactCon ? (
        <Contact
          object={plane}
          setContainer={setContactCon}
          container={contactCon}
          handleTabClick={handleTabClick}
        />
      ) : null}

      <div>
        <div className="z-50 absolute flex flex-col gap-3 left-8 top-mid">
          <div
            id="water-jet"
            className={`h-2 w-2 bg-slate-500 rounded-xl dot-navigate ${
              container ? "dot-navigate-active" : null
            }`}
            onClick={selectedObject}
          ></div>
          <div
            id="cleaning"
            className={`h-2 w-2 bg-slate-500 rounded-xl dot-navigate ${
              tankCon ? "dot-navigate-active" : null
            }`}
            onClick={selectedObject}
          ></div>
          <div
            id="about"
            className={`h-2 w-2 bg-slate-500 rounded-xl dot-navigate ${
              aboutCon ? "dot-navigate-active" : null
            }`}
            onClick={selectedObject}
          ></div>
          <div
            id="pressure"
            className={`h-2 w-2 bg-slate-500 rounded-xl dot-navigate ${
              pressureCon ? "dot-navigate-active" : null
            }`}
            onClick={selectedObject}
          ></div>
          <div
            id="contact"
            className={`h-2 w-2 bg-slate-500 rounded-xl dot-navigate ${
              contactCon ? "dot-navigate-active" : null
            }`}
            onClick={selectedObject}
          ></div>
        </div>
      </div>
      <Spline
        onLoad={onLoad}
        className="view"
        scene="https://prod.spline.design/Ndegy5iUCaODz5H6/scene.splinecode"
        onMouseDown={onMouseDown}
      />
    </div>
  );
}

export default World;
