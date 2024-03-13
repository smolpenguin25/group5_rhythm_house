import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link, Outlet } from "react-router-dom";

function AlbumDropDownButton() {
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Albums">
        <Dropdown.Item>
          <Link to="/EventSolo">Solo</Link>
        </Dropdown.Item>
        <Dropdown.Item>Band</Dropdown.Item>
        <Dropdown.Item>Movie</Dropdown.Item>
        <Dropdown.Item>Magazine</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default AlbumDropDownButton;
