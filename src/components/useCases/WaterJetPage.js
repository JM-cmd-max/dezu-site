import { useContext, useEffect } from "react";
import ColorContext from "../../context/ColorContext";
import PageContext from "../../context/PageContext";
import { Link } from 'react-router-dom';

export default function WaterJetPage() {

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

    return (
      <div className="card-container">
        <Link to="/wj1" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                Waterjet Tech1{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>

        <Link to="/wj2" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                Waterjet Tech2{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>

        <Link to="/wj3" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                Waterjet Tech3{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>

        <Link to="/wj4" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                Waterjet Tech4{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>

        <Link to="/wj5" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                Waterjet Tech5{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>

        <Link to="/wj6" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                Waterjet Tech6{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>

        <Link to="/wj7" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                Waterjet Tech7{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>


        <Link to="/wj8" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                Waterjet Tech8{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>


        <Link to="/wj9" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                Waterjet Tech9{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>


        <Link to="/wj10" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                Waterjet Tech10{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>


        <Link to="/wj11" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                Waterjet Tech11{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>


        <Link to="/wj12" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                Waterjet Tech12{" "}
              </p>
              <p className="info-subtext rajdhani-regular" style={{ color: "white" }}>
                (Insert Waterjet Product Use Case Description){" "}
              </p>
            </div>
          </div>
        </Link>


      </div>
    );
}
