import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      
      
    </div>
  );
}

export default App;
