import React from 'react'
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import './App.scss'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Detail from './pages/detail/Detail';
import Catalog from './pages/Catalog';
import Gototop from './components/gototop/Gototop';

const App = () => {
  return (
    <div>
      <Header/>
      <Gototop/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path='/:category/search/:keyword'element={<Catalog />}/>
        <Route path='/:category/:id' element={<Detail/>}></Route>
        <Route path='/:category' element={<Catalog/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App