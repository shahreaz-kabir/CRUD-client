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
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h2><p><img src={student.imageUrl} alt = "Avatar" width = "200" height = "200" /> </p></h2>
      <Link to={`/campus/${student.campus.id}`}>
          <h3>{student.campus.name}</h3>
      </Link>
      <h4>ID: {student.id}</h4>
      <p>{student.email}</p>
      <p>GPA: {student.gpa}</p>
    </div>
  );

};

export default StudentView;