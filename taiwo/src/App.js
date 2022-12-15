import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Navbar from "./Component/Navbar"; 
import Create from "./Pages/Create";
import Footer from "./Component/Footer";

function App() {
  const [data, setData] = useState(null);

  async function getData(url) {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "Error"));
  }

  useEffect(() => {
    getData("http://localhost:3000/blogs");
  }, [data]);

  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
