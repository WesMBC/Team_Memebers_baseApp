const Header = ({ selectedTeam, teamCount }) => {
  return (
    <header>
      <div className="container text-center">
        <div className="row justify-content-start">
          <h1>Se esta viendo el {selectedTeam}</h1>
          <h2>
            El equipo {selectedTeam} tiene {teamCount} integrantes
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
