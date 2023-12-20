import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./lib/context/userContext";

// axios.defaults.baseURL = "http://localhost:8000"; 
axios.defaults.baseURL = "https://lionfish-app-z7ifi.ondigitalocean.app";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
