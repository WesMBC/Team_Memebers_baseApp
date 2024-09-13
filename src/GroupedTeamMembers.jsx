import { useState, useContext } from "react";
import EmployeesTeam from "./EmployeesTeam";
const GroupedTeamMembers = ({ employees, selectedTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupedTeams());

  function groupedTeams() {
    const team = ["TeamA", "TeamB", "TeamC", "TeamD"];
    var teams = [];

    team.forEach((item) => {
      const teamMembers = employees.filter(
        (employee) => employee.teamName === item
      );
      teams.push({
        team: item,
        members: teamMembers,
        collapse: selectedTeam === item ? false : true,
      });
    });
    console.log(teams);
    return teams;
  }

  function handleClickTeam(event) {
    const newgroupdata = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapse: !groupedData.collapse }
        : groupedData
    );
    setGroupedData(newgroupdata);
  }

  return (
    <main className="container text-center">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Grouped Team Members</h1>
          <EmployeesTeam
            groupedEmployees={groupedEmployees}
            handleClickTeam={handleClickTeam}
          />
        </div>
      </div>
    </main>
  );
};

export default GroupedTeamMembers;
