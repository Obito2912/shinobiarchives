import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Characters from "../Characters/Characters";
import Clans from "../Clans/Clans";
import Villages from "../Villages/Villages";
import KekkeiGenkai from "../KekkeiGenkai/KekkeiGenkai";
import TailedBeasts from "../TailedBeasts/TailedBeasts";
import Teams from "../Teams/Teams";
import Akatsuki from "../Akatsuki/Akatsuki";
import Kara from "../Kara/Kara";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { getCharacters } from "../../utils/api";

import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [numOfCharacters, setNumOfCharacters] = useState(0);

  useEffect(() => {
    getCharacters().then((data) => {
      setNumOfCharacters(data.total);
      setCharacters(data.characters);
    });
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Main numOfCharacters={numOfCharacters} />}
          />
          <Route
            path="/characters"
            element={<Characters characters={characters} />}
          />
          <Route path="/clans" element={<Clans />} />
          <Route path="/villages" element={<Villages />} />
          <Route path="/kekkei-genkai" element={<KekkeiGenkai />} />
          <Route path="/tailed-beasts" element={<TailedBeasts />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/akatsuki" element={<Akatsuki />} />
          <Route path="/kara" element={<Kara />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
