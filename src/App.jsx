import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/NotFound";
import CommercialVideos from "./features/videos/CommercialVideos";
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/commercial" element={<CommercialVideos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
