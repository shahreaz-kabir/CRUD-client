/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h2><p><img src={student.imageUrl} alt = "Avatar" width = "200" height = "200" /> </p></h2>
      <h3>{student.campus.name}</h3>
      <p>{student.email}</p>
      <p>GPA: {student.gpa}</p>
    </div>
  );

};

export default StudentView;