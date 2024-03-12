import { useNavigate } from "react-router-dom";

function Student({ name, avatar, position, id }) {
  const navigate = useNavigate();
  return (
    <div className="student" onClick={() => navigate(`/students/${id}`)}>
      <h1 className="user-name">{name}</h1>
      <img src={avatar} alt="Son" className="usr-avatar" />
      <h2 className="user-position">Position: {position}</h2>
    </div>
  );
}

export default Student;
