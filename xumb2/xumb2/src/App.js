import { Routes,Route } from "react-router-dom";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import NotFoundPage from "./Components/NotFoundPage";
import Layout from "./Components/Layout";
import './App.css'
export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
    </Route>
    </Routes>
  
  )
}
