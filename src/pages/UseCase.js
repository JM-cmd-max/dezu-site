import UseCases from "../components/useCases/UseCases";
import Contact from "../components/contact/Contact";
import Navbar from "../components/hero/components/Navbar";
import Footer from "../components/footer/Footer";

function UseCase() {
  return (
    <div>
      <Navbar />
      <UseCases />
      <Contact />
      <Footer />
    </div>
  );
}

export default UseCase;
