import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import HomePage from './components/homePages/homePage';
import HelpDesk from './components/helpDeskPage/helpDeskPage';
function App() {
  return (
    <div className="App">
        
        <Router>
          <Routes>
            <Route path={"/"} element={<HomePage/>}></Route>
            <Route path={"/helpdesk"} element={<HelpDesk/>}></Route>

          </Routes>
        </Router>
      {/* <header className="App-header"> */}
       
      {/* </header> */}
    </div>
  );
}

export default App;
