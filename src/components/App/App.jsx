import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

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
  getCharacters,
  getAkatsuki,
  getClans,
  getKara,
  getKekkeiGenkai,
  getTailedBeasts,
  getTeams,
  getVillages,
} from "../../utils/dattebayoApi";
import RouteElement from "../RouteElement/RouteElement";

function App() {
  // State for cards content
  const [characters, setCharacters] = useState(null);
  const [akatsuki, setAkatsuki] = useState(null);
  const [clans, setClans] = useState(null);
  const [kara, setKara] = useState(null);
  const [kekkeiGenkai, setKekkeiGenkai] = useState(null);
  const [tailedBeasts, setTailedBeasts] = useState(null);
  const [teams, setTeams] = useState(null);
  const [villages, setVillages] = useState(null);

  // State for stats
  const [numOfAkatsuki, setNumOfAkatsuki] = useState(0);
  const [numOfCharacters, setNumOfCharacters] = useState(0);
  const [numOfClans, setNumOfClans] = useState(0);
  const [numOfKara, setNumOfKara] = useState(0);
  const [numOfKekkeiGenkai, setNumOfKekkeiGenkai] = useState(0);
  const [numOfTailedBeasts, setNumOfTailedBeasts] = useState(0);
  const [numOfTeams, setNumOfTeams] = useState(0);
  const [numOfVillages, setNumOfVillages] = useState(0);

  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [akatsukiError, setAkatsukiError] = useState("");
  const [charactersError, setCharactersError] = useState("");
  const [clansError, setClansError] = useState("");
  const [karaError, setKaraError] = useState("");
  const [kekkeiGenkaiError, setKekkeiGenkaiError] = useState("");
  const [tailedBeastsError, setTailedBeastsError] = useState("");
  const [teamsError, setTeamsError] = useState("");
  const [villagesError, setVillagesError] = useState("");

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
    const avatar = e.target.avatarUrl.value;
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
    getCharacters()
      .then((data) => {
        setCharacters(data.characters);
        setNumOfCharacters(data.total);
      })
      .catch((err) => {
        console.error("Failed to fetch characters:", err);
        setCharactersError(
          "Could not load Characters data. Please try again later."
        );
      });

    getAkatsuki()
      .then((data) => {
        setAkatsuki(data.akatsuki);
        setNumOfAkatsuki(data.total);
      })
      .catch((err) => {
        console.error("Failed to fetch akatsuki:", err);
        setAkatsukiError(
          "Could not load Akatsuki data. Please try again later."
        );
      });

    getClans()
      .then((data) => {
        setClans(data.clans);
        setNumOfClans(data.total);
      })
      .catch((err) => {
        console.error("Failed to fetch clans:", err);
        setClansError("Could not load Clans data. Please try again later.");
      });

    getKara()
      .then((data) => {
        setKara(data.kara);
        setNumOfKara(data.total);
      })
      .catch((err) => {
        console.error("Failed to fetch kara:", err);
        setKaraError("Could not load Kara data. Please try again later.");
      });

    getKekkeiGenkai()
      .then((data) => {
        setKekkeiGenkai(data["kekkei-genkai"]);
        setNumOfKekkeiGenkai(data.total);
      })
      .catch((err) => {
        console.error("Failed to fetch kekkei-genkai:", err);
        setKekkeiGenkaiError(
          "Could not load Kekkei-Genkai data. Please try again later."
        );
      });

    getTailedBeasts()
      .then((data) => {
        setTailedBeasts(data["tailed-beasts"]);
        setNumOfTailedBeasts(data.total);
      })
      .catch((err) => {
        console.error("Failed to fetch tailed-beasts:", err);
        setTailedBeastsError(
          "Could not load Tailed-Beasts data. Please try again later."
        );
      });

    getTeams()
      .then((data) => {
        setTeams(data.teams);
        setNumOfTeams(data.total);
      })
      .catch((err) => {
        console.error("Failed to fetch teams:", err);
        setTeamsError("Could not load Teams data. Please try again later.");
      });

    getVillages()
      .then((data) => {
        setVillages(data.villages);
        setNumOfVillages(data.total);
      })
      .catch((err) => {
        console.error("Failed to fetch villages:", err);
        setVillagesError(
          "Could not load Villages data. Please try again later."
        );
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
        <main className="page__main" aria-live="polite">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  numOfCharacters={numOfCharacters}
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
            <Route
              path="/akatsuki"
              element={
                <RouteElement
                  error={akatsukiError}
                  loading={akatsuki === null}
                  label="Akatsuki"
                >
                  <Akatsuki akatsuki={akatsuki} />
                </RouteElement>
              }
            />
            <Route
              path="/characters"
              element={
                <RouteElement
                  error={charactersError}
                  loading={characters === null}
                  label="Characters"
                >
                  <Characters />
                </RouteElement>
              }
            />
            <Route
              path="/clans"
              element={
                <RouteElement
                  error={clansError}
                  loading={clans === null}
                  label="Clans"
                >
                  <Clans />
                </RouteElement>
              }
            />
            <Route
              path="/kara"
              element={
                <RouteElement
                  error={karaError}
                  loading={kara === null}
                  label="Kara"
                >
                  <Kara />
                </RouteElement>
              }
            />
            <Route
              path="/kekkei-genkai"
              element={
                <RouteElement
                  error={kekkeiGenkaiError}
                  loading={kekkeiGenkai === null}
                  label="Kekkei-Genkai"
                >
                  <KekkeiGenkai />
                </RouteElement>
              }
            />
            <Route
              path="/tailed-beasts"
              element={
                <RouteElement
                  error={tailedBeastsError}
                  loading={tailedBeasts === null}
                  label="Tailed-Beasts"
                >
                  <TailedBeasts />
                </RouteElement>
              }
            />
            <Route
              path="/teams"
              element={
                <RouteElement
                  error={teamsError}
                  loading={teams === null}
                  label="Teams"
                >
                  <Teams />
                </RouteElement>
              }
            />
            <Route
              path="/villages"
              element={
                <RouteElement
                  error={villagesError}
                  loading={villages === null}
                  label="Villages"
                >
                  <Villages />
                </RouteElement>
              }
            />
          </Routes>
        </main>
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
