/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;

  //render campus info when there are no students in the campus
  if (!campus.students.length) {
    return (
      <div>
        <h1>{campus.name}</h1>
        <p><img src={campus.imageUrl} alt = "Campus" width = "400" height = "300" /> </p>
        <p>{campus.address}</p>
        <p>{campus.description}</p>
        <p>There are no students.</p>
       
      </div>
      );
  }
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <p><img src={campus.imageUrl} alt = "Campus" width = "500" height = "400" /> </p>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>             
          </div>
        );
      })}
    </div>
  );
};

export default CampusView;