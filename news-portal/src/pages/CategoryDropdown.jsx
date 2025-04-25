import Dropdown from "react-bootstrap/Dropdown";
import "./categorydropdown.css";
import React from "react";
function CategoryDropdown({ category, handleCategoryChange }) {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          // onChange={(e) => setcategory(e.target.value)}
          // value={category}
          className="Dropdown"
        >
          Categories
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              handleCategoryChange("Business");
            }}
          >
            Business
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              handleCategoryChange("Technology");
            }}
          >
            Technology
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              handleCategoryChange("Entertainment");
            }}
          >
            Entertainment
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              handleCategoryChange("Health");
            }}
          >
            Health
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              handleCategoryChange("Sports");
            }}
          >
            Sports
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default CategoryDropdown;
