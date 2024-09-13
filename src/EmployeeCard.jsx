import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const EmployeeCard = ({ employees, selectedTeam, handleEmployeeCardClick }) => {
  return (
    <div class="card-collection">
      {employees.map((employee) => (
        <div
          id={employee.id}
          class={
            employee.teamName == selectedTeam ? "card m-2 standout" : "card m-2"
          }
          className="card m-2"
          style={{ cursor: "pointer" }}
          onClick={handleEmployeeCardClick}
        >
          {employee.gender === "male" ? (
            <img src={maleProfile} alt="perfil" className="card-img-top" />
          ) : (
            <img src={femaleProfile} alt="perfil" className="card-img-top" />
          )}

          <div className="card-body">
            <h5 className="card-title">Full name: {employee.fullName}</h5>
            <p className="card-text">
              <b>Designation: {employee.designation}</b>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCard;
