import Card from "./UI/Card";
import "./StudentProfile.css"

function StudentProfile(props) {
  return (
    <Card className="student-card">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#000000" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"></rect>
        <circle cx="128" cy="96" r="64" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="16"></circle>
        <path d="M31,216a112,112,0,0,1,194,0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path>
      </svg>
      <h4 className="student-card-elements">{props.meStudent.name}</h4>
      <h5 className="student-card-elements">{props.meStudent.age}</h5>
      <h5 className="student-card-elements">{props.meStudent.height}</h5>
    </Card>
  );
}

export default StudentProfile;