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
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute";
import { signIn, signUp, checkToken } from "../../utils/auth";
import Profile from "../Profile/Profile";
import {
  // getCharacters,
  getAkatsuki,
  getClans,
  getKara,
  getKekkeiGenkai,
  getTailedBeasts,
  getTeams,
  getVillages,
} from "../../utils/dattebayoApi";

import "./App.css";

function App() {
  // State for cards content
  // const [characters, setCharacters] = useState([]);
  const [akatsuki, setAkatsuki] = useState([]);
  const [clans, setClans] = useState([]);
  const [kara, setKara] = useState([]);
  const [kekkeiGenkai, setKekkeiGenkai] = useState([]);
  const [tailedBeasts, setTailedBeasts] = useState([]);
  const [teams, setTeams] = useState([]);
  const [villages, setVillages] = useState([]);

  // State for stats
  // const [numOfCharacters, setNumOfCharacters] = useState(0);
  const [numOfAkatsuki, setNumOfAkatsuki] = useState(0);
  const [numOfClans, setNumOfClans] = useState(0);
  const [numOfKara, setNumOfKara] = useState(0);
  const [numOfKekkeiGenkai, setNumOfKekkeiGenkai] = useState(0);
  const [numOfTailedBeasts, setNumOfTailedBeasts] = useState(0);
  const [numOfTeams, setNumOfTeams] = useState(0);
  const [numOfVillages, setNumOfVillages] = useState(0);

  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUpClick = () => {
    setActiveModal("sign-up");
  };

  const handleLogInClick = () => {
    setActiveModal("log-in");
  };

  const onClose = () => {
    setActiveModal("");
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const avatar = e.target.avatar.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    signUp({ name, avatar, email, password })
      .then(() => signIn({ email, password }))
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        return checkToken(data.token);
      })
      .then((userData) => {
        console.log("Auto log-in after signing up:", userData);
        // setCurrentUser(userData);
        setIsLoggedIn(true);
        onClose();
      })
      .catch((err) => console.error(err));
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn({ email, password })
      .then((data) => {
        console.log("Login Successful:", data);
        localStorage.setItem("jwt", data.token);
        return checkToken(data.token);
      })
      .then((/* userData */) => {
        // setCurrentUser(userData);
        setIsLoggedIn(true);
        onClose();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // getCharacters().then((data) => {
    //   setCharacters(data.characters);
    //   setNumOfCharacters(data.total);
    // });

    getAkatsuki().then((data) => {
      setAkatsuki(data.akatsuki);
      setNumOfAkatsuki(data.total);
    });

    getClans().then((data) => {
      setClans(data.clans);
      setNumOfClans(data.total);
    });

    getKara().then((data) => {
      setKara(data.kara);
      setNumOfKara(data.total);
    });

    getKekkeiGenkai().then((data) => {
      setKekkeiGenkai(data["kekkei-genkai"]);
      setNumOfKekkeiGenkai(data.total);
    });

    getTailedBeasts().then((data) => {
      setTailedBeasts(data["tailed-beasts"]);
      setNumOfTailedBeasts(data.total);
    });

    getTeams().then((data) => {
      setTeams(data.teams);
      setNumOfTeams(data.total);
    });

    getVillages().then((data) => {
      setVillages(data.villages);
      setNumOfVillages(data.total);
    });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (token) {
      checkToken(token)
        .then((userData) => {
          console.log("Token valid, user: ", userData);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log("Invalid token: ", err);
          localStorage.removeItem("jwt");
          setIsLoggedIn(false);
        });
    }
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleSignUpClick={handleSignUpClick}
          handleLogInClick={handleLogInClick}
          onSignOut={handleSignOut}
          isLoggedIn={isLoggedIn}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                // numOfCharacters={numOfCharacters}
                numOfAkatsuki={numOfAkatsuki}
                numOfClans={numOfClans}
                numOfKara={numOfKara}
                numOfKekkeiGenkai={numOfKekkeiGenkai}
                numOfTailedBeasts={numOfTailedBeasts}
                numOfTeams={numOfTeams}
                numOfVillages={numOfVillages}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile onSignOutClick={handleSignOut} />
              </ProtectedRoute>
            }
          />
          <Route path="/akatsuki" element={<Akatsuki akatsuki={akatsuki} />} />
          <Route
            path="/characters"
            element={<Characters /* characters={characters} */ />}
          />
          <Route path="/clans" element={<Clans clans={clans} />} />
          <Route path="/kara" element={<Kara kara={kara} />} />
          <Route
            path="/kekkei-genkai"
            element={<KekkeiGenkai kekkeiGenkai={kekkeiGenkai} />}
          />
          <Route
            path="/tailed-beasts"
            element={<TailedBeasts tailedBeasts={tailedBeasts} />}
          />
          <Route path="/teams" element={<Teams teams={teams} />} />
          <Route path="/villages" element={<Villages villages={villages} />} />
        </Routes>
        <Footer />
      </div>
      {activeModal === "sign-up" && (
        <RegisterModal
          isOpen={activeModal === "sign-up"}
          onClose={onClose}
          handleLogInClick={handleLogInClick}
          onRegister={handleRegister}
        />
      )}
      {activeModal === "log-in" && (
        <LoginModal
          isOpen={activeModal === "log-in"}
          onClose={onClose}
          handleSignUpClick={handleSignUpClick}
          onSignIn={handleSignIn}
        />
      )}
    </div>
  );
}

export default App;
