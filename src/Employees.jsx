import EmployeeCard from "./EmployeeCard";
const Employees = ({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
}) => {
  return (
    <main className="container">
      <div class="row justify-content-center mt-10 mb-10">
        <div class="col-8">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
          <EmployeeCard
            employees={employees}
            selectedTeam={selectedTeam}
            handleEmployeeCardClick={handleEmployeeCardClick}
          />
        </div>
      </div>
    </main>
  );
};

export default Employees;
