/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div key = {student.campus.id}>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h2><p><img src={student.imageUrl} alt = "Avatar" width = "200" height = "200" /> </p></h2>
      <Link to={`/campus/${student.campus.id}`}>
          <h2>{student.campus.name}</h2>
      </Link>
      <p>{student.email}</p>
      <p>GPA: {student.gpa}</p>
      <Link to={`/editstudent/${student.id}`}>
          <button>Edit</button>
      </Link>
    </div>

  );

};

export default StudentView;