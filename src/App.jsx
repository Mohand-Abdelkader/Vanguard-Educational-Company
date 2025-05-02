import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/NotFound";
import CommercialVideos from "./features/videos/CommercialVideos";
import Blog from "./features/blogs/Blog";
import BlogPage from "./features/blogs/BlogPage";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 0,
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/commercial" element={<CommercialVideos />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:title" element={<BlogPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
