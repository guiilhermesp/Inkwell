import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Search from "./Components/Search/Search";
import BookContent from "./Pages/BookContent/BookContent";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Login from "./Pages/Login/Login";
import Dexie from "dexie";
import SignUp from "./Pages/SignUp/SignUp";

export const db = new Dexie("myDatabase");
db.version(1).stores({ users: "++id,username,email" });

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="book/:id" element={<BookContent />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
