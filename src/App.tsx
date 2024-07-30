import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetail from "./components/UserDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:userId" element={<UserDetail />} />
        <Route path="/" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
