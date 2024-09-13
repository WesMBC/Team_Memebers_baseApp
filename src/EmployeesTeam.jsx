const EmployeesTeam = ({ handleClickTeam, groupedEmployees }) => {
  return (
    <div className="container text-center">
      <div className="row row-cols-3">
        {groupedEmployees.map((item) => {
          return (
            <div className="col">
              <div key={item.team} className="card mb-4">
                <h4
                  id={item.team}
                  className="card-header"
                  onClick={handleClickTeam}
                >
                  Team Name: {item.team}
                </h4>
                <div
                  className={item.collapse === true ? "collapse" : ""}
                  id={"collapse_" + item.team}
                >
                  {item.members.map((member) => {
                    return (
                      <div className="container mb-3">
                        <h5 className="card-title">{member.fullName}</h5>
                        <h6 className="card-subtitle mt-2 text-boy-secondary">
                          {member.designation}
                        </h6>
                        <p className="card-text">{member.gender}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeesTeam;
