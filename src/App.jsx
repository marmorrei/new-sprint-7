import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import StarshipsList from './pages/StarshipsList/StarshipsList';
import Login from './components/Login/Login';
import { UserProvider } from './context/UserProvider';
import { ModalsProvider } from './context/ModalsProvider';
import { PathProvider } from './context/PathProvider';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

export default function App() {
  return (
    <UserProvider>
      <ModalsProvider>
        <PathProvider>
          <Header />
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/starships' element={<StarshipsList />} />
            </Route>
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </PathProvider>
      </ModalsProvider>
    </UserProvider>
  );
}
