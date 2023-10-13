import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import StarshipsList from './components/StarshipsList/StarshipsList';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <StarshipsList />
      <Footer />
    </>
  );
}
