import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Import Pages
import Home from "./Pages/Home";
import Event from "./Pages/Event";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/eventos/:slug" element={<Event />}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
