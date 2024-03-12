import Student from "./Student";

function StudentList({ stuList }) {
  return (
    <div>
      <h1>STUDENT LIST</h1>
      <div className="student-list">
        {stuList.map((stu, index) => (
          <Student
            name={stu.name}
            avatar={stu.avatar}
            position={stu.position}
            id={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
