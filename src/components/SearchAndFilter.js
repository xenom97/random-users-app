import { useState } from "react";
import { Input, Select, Button } from "antd";
const { Search } = Input;
const { Option } = Select;

export const SearchAndFilter = ({ gender, onChangeGender, onChangeSearch }) => {
  const [internalSearchValue, setInternalSearchValue] = useState("");

  function resetSearchAndFilter() {
    setInternalSearchValue("");
    onChangeGender("");
    onChangeSearch("");
  }

  return (
    <div className="flex mb-4">
      <Search
        placeholder="Search by username or full name in current page..."
        onChange={(e) => setInternalSearchValue(e.target.value)}
        value={internalSearchValue}
        onPressEnter={() => onChangeSearch(internalSearchValue)}
        enterButton
      />

      <Select
        className="!ml-4"
        defaultValue={""}
        onChange={onChangeGender}
        value={gender}
        style={{ width: "150px" }}
      >
        <Option value="">All Gender</Option>
        <Option value="male">Male</Option>
        <Option value="female">Female</Option>
      </Select>

      <Button className="ml-1" onClick={resetSearchAndFilter}>
        Reset
      </Button>
    </div>
  );
};
