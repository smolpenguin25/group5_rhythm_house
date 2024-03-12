import { useParams } from "react-router-dom";

function StudentDetail({ stuList }) {
  const { id } = useParams();
  console.log("ID: " + id);

  // lay student dua vao id
  const stu = stuList[id];
  return (
    <div>
      <h1>Student Detail</h1>

      <h1 className="user-name">{stu.name}</h1>
      <img src={stu.avatar} alt={stu.name} className="usr-avatar" />
      <h2 className="user-position">Position: {stu.position}</h2>
    </div>
  );
}

export default StudentDetail;
