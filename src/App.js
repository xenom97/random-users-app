import "./App.css";
import { useEffect, useState } from "react";
import { getRandomUsers } from "./api/randomuser.api";

// Components
import { DataTable } from "./components/DataTable";
import { SearchAndFilter } from "./components/SearchAndFilter";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [seed, setSeed] = useState("");
  const [page, setPage] = useState(1);

  async function fetchRandomUsers() {
    try {
      setLoading(true);

      const data = await getRandomUsers({
        page,
        gender,
        // if it has a seed and it is not gender specific, then use the previous seed
        seed: seed && !gender ? seed : "",
      });

      setUsers(data.results);
      setPage(data.info.page);
      setSeed(seed || data.info.seed);
      // Set inital data table
      setTableData(data.results);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  }

  const [tableData, setTableData] = useState([]);

  function onChangeSearch(value) {
    if (value === "") {
      setTableData(users);
    } else {
      setTableData(
        users.filter(
          (user) =>
            user.username.toLowerCase().includes(value.toLowerCase()) ||
            user.fullname.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  }

  const [gender, setGender] = useState("");

  function onChangeGender(selectedGender) {
    setGender(selectedGender);
  }

  function onChangePage(page) {
    setPage(page);
  }

  useEffect(() => {
    fetchRandomUsers();
  }, [gender, page]);

  return (
    <div className="bg-gray-100 max-w-5xl mx-auto mt-8 p-4 rounded shadow-md">
      <SearchAndFilter
        gender={gender}
        onChangeGender={onChangeGender}
        onChangeSearch={onChangeSearch}
      />
      <DataTable
        users={tableData}
        loading={loading}
        onChangePage={onChangePage}
      />
    </div>
  );
}

export default App;
