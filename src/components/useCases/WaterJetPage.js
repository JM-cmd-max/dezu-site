import { useContext, useEffect } from "react";
import ColorContext from "../../context/ColorContext";
import PageContext from "../../context/PageContext";
import { Link } from 'react-router-dom';



export default function WaterJetPage(){

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


{/* WJ1 */}
      <Link to="/wj1" style={{ textDecoration: 'none', color: 'inherit' }}>
        <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
          Waterjet Tech1{" "}
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


{/* WJ2 */}
      <Link to="/wj2" style={{ textDecoration: 'none', color: 'inherit' }}>
        <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
          Waterjet Tech2{" "}
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



{/* WJ3 */}
      <Link to="/wj3" style={{ textDecoration: 'none', color: 'inherit' }}>
        <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
          Waterjet Tech3{" "}
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




{/* WJ4 */}
      <Link to="/wj4" style={{ textDecoration: 'none', color: 'inherit' }}>
        <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
          Waterjet Tech4{" "}
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



{/* WJ5 */}
<Link to="/wj5" style={{ textDecoration: 'none', color: 'inherit' }}>
        <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
          Waterjet Tech5{" "}
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




{/* WJ6 */}
<Link to="/wj6" style={{ textDecoration: 'none', color: 'inherit' }}>
        <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
          Waterjet Tech6{" "}
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
        Waterjet Tech7{" "}
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
        Waterjet Tech8{" "}
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
          transition: "background 0.5s linear",
        }}
      ></div>
      <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
        Waterjet Tech9{" "}
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
        Waterjet Tech10{" "}
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
        Waterjet Tech11{" "}
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
          transition: "background 0.5s linear",
        }}
      ></div>
      <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
        Waterjet Tech12{" "}
      </p>
      <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
      (Insert Waterjet Product Use Case Description){" "}
      </p>
    </div>






  </div>
}