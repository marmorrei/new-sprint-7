import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import StarshipsList from './pages/StarshipsList/StarshipsList';
import { UserProvider } from './context/UserProvider';
import { ModalsProvider } from './context/ModalsProvider';

export default function App() {
  return (
    <UserProvider>
      <ModalsProvider>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/starships' element={<StarshipsList />} />
        </Routes>
        <Footer />
      </ModalsProvider>
    </UserProvider>
  );
}
