import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import imageBg from "./assets/bg.svg";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import SingleBlog from "./pages/blog/SingleBlog";
import Footer from "./components/Footer";

function App() {
  const categoryColor = {
    STORIES: "red",
    "MEETUP LIVE": "teal",
    "MEETUP PRO": "teal",
    "KEEP CONNECTED PODCAST": "orange",
    "PRODUCT UPDATES": "brown",
  };

  return (
    <Router>
      <Box position="absolute" left={0} top={0} right={0}>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/blog"
            element={<Blog categoryColor={categoryColor} />}
          />
          <Route
            path="/blog/:slug"
            element={<SingleBlog categoryColor={categoryColor} />}
          />
        </Routes>
        <Footer />
      </Box>
      <Box
        position="relative"
        top={0}
        bottom={0}
        right={0}
        left={0}
        height="100vh"
        zIndex={-1}
      >
        <Image w="80%" m="auto" objectFit="cover" sizes="300" src={imageBg} />
      </Box>
    </Router>
  );
}

export default App;
