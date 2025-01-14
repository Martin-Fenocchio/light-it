import Button from "../commons/button/Button";
import { usePatients } from "../../hooks/usePatients";

function Header() {
  const { searchController, handleonChangeSearch } = usePatients({});

  return (
    <header className="header-layout">
      <div className="input-text-container">
        <input
          type="search"
          placeholder="Search a patient..."
          value={searchController}
          onChange={handleonChangeSearch}
        />
      </div>
      <Button text="Add patient" theme="primary" />
    </header>
  );
}

export default Header;
