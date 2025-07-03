import { Routes, Route, Link } from "react-router-dom";
import BoardList from "./routes/BoardList";
import BoardWrite from "./routes/BoardWrite";
import BoardDetail from "./routes/BoardDetail";

function App() {
  return (
    <div>
      <nav>
        <Link to="/board">게시판</Link>
      </nav>
      <Routes>
        <Route path="/board" element={<BoardList />} />
        <Route path="/board/write" element={<BoardWrite />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
