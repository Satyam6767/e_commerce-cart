import 'bootstrap/dist/css/bootstrap.min.css';
import CardsDetails from './components/CardsDetails';
import {Routes,Route} from "react-router-dom";
import HomePage from './components/HomePage';
import Electronics from './components/Electronics';
import Clothes from './components/Clothes';
import Accessories from './components/Accessories';
import Furniture from './components/Furniture';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
  <>
  <Header />
   
   <Routes>
     <Route path='/' element={<HomePage />} />
     <Route path='/electronics' element={<Electronics />} />
     <Route path='/clothes' element={<Clothes />} />
     <Route path='/accessories' element={<Accessories />} />
     <Route path='/furniture' element={<Furniture />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
   <Footer />
   
  </>
  );
}


export default App;


