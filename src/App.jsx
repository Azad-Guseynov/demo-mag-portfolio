import './App.css';
import Header from './Components/Header/Header';
import Categories from './Components/Categories/Categories';
import Form from './Components/Form/Form';
import MainFooter from './Components/Footer/MainFooter';
import { Route, Routes } from 'react-router-dom';
import Root from './routes/root';
import MainCategories from './Pages/MainCategories';
import ErrorPage from './routes/error-page';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/MainCategories' element={<MainCategories />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
