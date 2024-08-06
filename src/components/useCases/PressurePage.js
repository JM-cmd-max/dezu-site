import { useContext, useEffect } from "react";
import ColorContext from "../../context/ColorContext";
import PageContext from "../../context/PageContext";
import { Link } from 'react-router-dom';



export default function PressurePage(){

    const { color, setColor } = useContext(ColorContext);
    const { page, setPage, activeTab, setActiveTab } = useContext(PageContext);
  
    const handleTabClick = (tabName, color, bgColor) => {
      setActiveTab(tabName);
      setColor({ color, bgColor });
    };
  
    useEffect(() => {
      setPage('use-cases');
  
      // Ensure activeTab is set to default "Waterjet Technology" if not already set
      if (!activeTab) {
        handleTabClick("Waterjet Technology", "#32CBBB", "#0C191D");
      }
    }, [setPage, activeTab]);



    
    return <div className="card-container">
    <div className="card-and-info">
      <div
        className="card"
        style={{
          background: `linear-gradient(30deg, ${color.color} 10%, #000, ${color.color} 90%)`,
          transition: "all 0.5s linear",
        }}
      ></div>

      <Link to="/ps1" style={{ textDecoration: 'none', color: 'inherit' }}>
        <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
        Pressure Tech1{" "}
        </p>
        <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
          (Insert Waterjet Product Use Case Description){" "}
        </p>
      </Link>
    </div>

    <div className="card-and-info">
      <div
        className="card"
        style={{
          background: `linear-gradient(30deg, ${color.color} 10%, #000, ${color.color} 90%)`,
          transition: "all 0.5s linear",
        }}
      ></div>
      <Link to="/ps2" style={{ textDecoration: 'none', color: 'inherit' }}>
        <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
        Pressure Tech2{" "}
        </p>
        <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
          (Insert Waterjet Product Use Case Description){" "}
        </p>
      </Link>
    </div>

    <div className="card-and-info">
      <div
        className="card"
        style={{
          background: `linear-gradient(30deg, ${color.color} 10%, #000, ${color.color} 90%)`,
          transition: "all 0.5s linear",
        }}
      ></div>
      <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
      Pressure Tech3{" "}
      </p>
      <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
        (Insert Waterjet Product Use Case Description){" "}
      </p>
    </div>

    <div className="card-and-info">
      <div
        className="card"
        style={{
          background: `linear-gradient(30deg, ${color.color} 10%, #000, ${color.color} 90%)`,
          transition: "all 0.5s linear",
        }}
      ></div>
      <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
      Pressure Tech4{" "}
      </p>
      <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
        (Insert Waterjet Product Use Case Description){" "}
      </p>
    </div>
    <div className="card-and-info">
      <div
        className="card"
        style={{
          background: `linear-gradient(30deg, ${color.color} 10%, #000, ${color.color} 90%)`,
          transition: "all 0.5s linear",
        }}
      ></div>
      <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
      Pressure Tech5{" "}
      </p>
      <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
        (Insert Waterjet Product Use Case Description){" "}
      </p>
    </div>
    <div className="card-and-info">
      <div
        className="card"
        style={{
          background: `linear-gradient(30deg, ${color.color} 10%, #000, ${color.color} 90%)`,
          transition: "all 0.5s linear",
        }}
      ></div>
      <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
      Pressure Tech6{" "}
      </p>
      <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
        (Insert Waterjet Product Use Case Description){" "}
      </p>
    </div>



    <div className="card-and-info">
      <div
        className="card"
        style={{
          background: `linear-gradient(30deg, ${color["color"]}  10%, #000,  ${color["color"]} 90%)`,
          transition: "all 0.5s linear",
        }}
      ></div>
      <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
      Pressure Tech7{" "}
      </p>
      <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
      (Insert Waterjet Product Use Case Description){" "}
      </p>
    </div>
  </div>
}