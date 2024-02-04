import './App.scss';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/NavBar';
import AddYourMovie from './pages/AddYourMovie/AddYourMovie';
import DetailPage from './pages/DetailPage/DetailPage';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/favorites'
						element={<Favorites />}
					/>
					<Route
						path='/addmovie'
						element={<AddYourMovie />}
					/>
					<Route
						path='/moviedetail/:movieid'
						element={<DetailPage />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
