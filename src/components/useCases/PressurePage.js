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
      localStorage.setItem('kColor', color);
      localStorage.setItem('kBgColor', bgColor);
    };
  
    useEffect(() => {
      setPage('use-cases');
  
      // Ensure activeTab is set to default "Waterjet Technology" if not already set
      if (!activeTab) {
        handleTabClick("Waterjet Technology", "#32CBBB", "#0C191D");
      }
    }, [setPage, activeTab]);



    
    return <div className="card-container">
    

    <Link to="/pt1" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/pressure/pcf/pf1.png')})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                transition: "all 0.5s linear",
                height: '334px', 
                width: '299px',
                position: 'relative',
                cursor: 'pointer',
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
                Pressure Tech1{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>




        <Link to="/pt2" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/pressure/pcf/pf2.png')})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                transition: "all 0.5s linear",
                height: '334px', 
                width: '299px',
                position: 'relative',
                cursor: 'pointer',
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
                Pressure Tech2{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>



        <Link to="/pt3" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/pressure/pcf/pf3.png')})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                transition: "all 0.5s linear",
                height: '334px', 
                width: '299px',
                position: 'relative',
                cursor: 'pointer',
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
                Pressure Tech3{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>



        <Link to="/pt4" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/pressure/pcf/pf4.png')})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                transition: "all 0.5s linear",
                height: '334px', 
                width: '299px',
                position: 'relative',
                cursor: 'pointer',
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
                Pressure Tech4{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>




        <Link to="/pt5" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/pressure/pcf/pf5.png')})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                transition: "all 0.5s linear",
                height: '334px', 
                width: '299px',
                position: 'relative',
                cursor: 'pointer',
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
                Pressure Tech5{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>



        <Link to="/pt6" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/pressure/pcf/pf6.png')})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                transition: "all 0.5s linear",
                height: '334px', 
                width: '299px',
                position: 'relative',
                cursor: 'pointer',
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
                Pressure Tech6{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>



        <Link to="/pt7" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card-and-info">
            <div
              className="card"
              style={{
                backgroundImage: `url(${require('../../assets/images/pressure/pcf/pf7.png')})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                transition: "all 0.5s linear",
                height: '334px', 
                width: '299px',
                position: 'relative',
                cursor: 'pointer',
              }}
            ></div>
            <div>
              <p className="info-text rajdhani-semibold" style={{ color: "white" }}>
                Pressure Tech7{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>
    
  </div>
}