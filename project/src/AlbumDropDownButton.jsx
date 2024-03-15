import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function AlbumDropDownButton() {
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Albums">
        <Dropdown.Item href="#/solo">Solo</Dropdown.Item>
        <Dropdown.Item href="#/band">Band</Dropdown.Item>
        <Dropdown.Item href="#/movie">Movie</Dropdown.Item>
        <Dropdown.Item href="#/magazine">Magazine</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default AlbumDropDownButton;
