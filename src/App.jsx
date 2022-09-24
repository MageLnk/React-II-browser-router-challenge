import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { NavBar, Footer } from "./Components";
// Pages
import { Home, Error404, ContactPage } from "./pages";

const App = () => {
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
