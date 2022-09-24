import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Context
import GeneralContext from "./Context/GeneralContext";
// Components
import { NavBar, Footer } from "./Components";
// Pages
import { Home, Error404, ContactPage } from "./pages";

const App = () => {
  const { test } = useContext(GeneralContext);

  console.log("Así se usa el context", test);

  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
