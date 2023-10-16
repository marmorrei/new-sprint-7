import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import StarshipsList from './pages/StarshipsList/StarshipsList';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/starships' element={<StarshipsList />} />
      </Routes>
      <Footer />
    </>
  );
}
