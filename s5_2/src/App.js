import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import StudentList from "./StudentList";
import StudentDetail from "./StudentDetail";
import NotFound from "./NotFound";

function App() {
  const studentList = [
    { id: 1, name: "Tu", avatar: "/images/Tu.jpg", position: "Team Lead" },
    { id: 2, name: "Quan", avatar: "/images/Quan.jpg", position: "Coder" },
    { id: 3, name: "Anh", avatar: "/images/Anh.jpg", position: "Tester" },
    { id: 4, name: "Dung", avatar: "/images/Dung.jpg", position: "Reporter" },
  ];

  return (
    <div className="App">
      <nav>
        <Link to="/">PHONG</Link>
        <Link to="/students">STUDENT LIST</Link>
      </nav>
      {/* main content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/students"
          element={<StudentList stuList={studentList} />}
        />
        <Route
          path="/students/:id"
          element={<StudentDetail stuList={studentList} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
