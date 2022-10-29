import { Provider } from "react-redux";

import Navigation from "./components/Navigation";

import Home from "./pages/Home";

import { store } from './store'

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Navigation />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
