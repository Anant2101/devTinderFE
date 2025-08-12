import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from './components/Feed';
import Body from './components/Body'; // ✅ Import Body

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="login" element={<Login />} />
            <Route path="feed" element={<Feed />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
