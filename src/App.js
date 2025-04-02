import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import Home from "./components/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginSignup />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}