import { Routes, Route } from 'react-router-dom';
import About from './Components/Pages/About';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import NotFound from './Components/Pages/NotFound';
import SinglePost from './Components/Pages/SinglePost'
import Layout from './Components';
import './App.css'
function App() {
  return (
    <>
     <Routes>
     <Route path='/' element={<Layout/>}>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/blog/:id' element={<SinglePost/>}/>
     <Route path='*' element={<NotFound/>}/>
     </Route>
     </Routes>

   </>
  );
}

export default App;
