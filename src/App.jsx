import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/Footer/Footer";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/Home/Home";
import Premium from "./pages/Premium/Premium";
import Download from "./pages/Download/Download";
import Playlists from "./pages/Playlists/Playlists";
import PlaylistInfo from "./pages/Playlists/PlaylistInfo";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logado from "./pages/HomeLogado/Logado";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route exact path="/Playlists" component={Playlists} />
        <Route path="/Playlists/:id" component={PlaylistInfo} />
        <Route path="/Logado" component={Logado} />
        <Route exact path="/Download" component={Download} />
        <Route exact path="/Premium" component={Premium} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
