import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/Home";
import { ShopPage } from "./pages/Shop";
import { Navbar } from "./components/Navbar";
import { Footer } from "./pages/Home/sections/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
