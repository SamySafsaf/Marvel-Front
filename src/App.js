import "./App.scss";
import Header from "./components/Header";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import CharacterInComics from "./containers/CharacterInComics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/comics/:id">
            <CharacterInComics />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/">
            <Characters server={server} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
