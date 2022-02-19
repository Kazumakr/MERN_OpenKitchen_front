import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Setting from "./pages/Setting/Setting";
import SingleRecipePage from "./pages/SingleRecipe/SingleRecipePage";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

const App = () => {
	const { user } = useContext(Context);
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/recipes" element={<Home />} />
				<Route path="/register" element={user ? <Home /> : <Register />} />
				<Route path="/login" element={user ? <Home /> : <Login />} />
				<Route path="/recipes/:id" element={<SingleRecipePage />} />
				<Route path="/addrecipe" element={user ? <AddRecipe /> : <Login />} />
				<Route path="/settings" element={user ? <Setting /> : <Login />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
