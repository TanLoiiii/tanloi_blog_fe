import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PostPage from "./pages/PostPage";
import PostDetailPage from "./pages/PostDetailPage";
import Chatbox from "./components/Chatbox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
      </Routes>
      <Chatbox />
    </BrowserRouter>
  );
}

export default App;
