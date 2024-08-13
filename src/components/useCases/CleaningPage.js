import { useContext, useEffect } from "react";
import ColorContext from "../../context/ColorContext";
import PageContext from "../../context/PageContext";
import { Link } from 'react-router-dom';



export default function CleaningPage(){

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
    <Link to="/ct1" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                background: `linear-gradient(30deg, ${color.color} 10%, #000, ${color.color} 90%)`,
                transition: "all 0.5s linear",
                height: '350px', // Ensure card has height
                width: '300px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
                Cleaning Tech1{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>






        <Link to="/ct2" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                background: `linear-gradient(30deg, ${color.color} 10%, #000, ${color.color} 90%)`,
                transition: "all 0.5s linear",
                height: '350px', // Ensure card has height
                width: '300px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
                Cleaning Tech2{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>





        <Link to="/ct3" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                background: `linear-gradient(30deg, ${color.color} 10%, #000, ${color.color} 90%)`,
                transition: "all 0.5s linear",
                height: '350px', // Ensure card has height
                width: '300px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
                Cleaning Tech3{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>

    




        <Link to="/ct4" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                background: `linear-gradient(30deg, ${color.color} 10%, #000, ${color.color} 90%)`,
                transition: "all 0.5s linear",
                height: '350px', // Ensure card has height
                width: '300px', // Ensure card has width
                position: 'relative',
                cursor: 'pointer', // Ensure card looks clickable
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
                Cleaning Tech4{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>


  </div>
}