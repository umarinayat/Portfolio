import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
} from "./container/index";
import { Navbar } from "./components/index";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
