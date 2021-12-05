import ItemList from "../item-list";
import "./app.css";
import { useState, useEffect } from "react";

const App = () => {
  const [cached, setCached] = useState({});
  const [opened, setOpened] = useState([0]);

  const lastId = opened[opened.length - 1];

  useEffect(() => {
    const fetchData = async () => {
      if (cached[lastId]) return;
      const response = await fetch(
        `http://164.90.161.80:3000/api/content${
          lastId ? "?dirId=" + lastId : ""
        }`
      );
      const data = await response.json();
      console.log(data);
      setCached({ ...cached, [lastId]: data });
    };

    fetchData();
  }, [opened]);

  // if (cached[lastId]) return false;

  return (
    <div className="tree">
      <ItemList cached={cached} opened={opened} setOpened={setOpened} />
    </div>
  );
};

export default App;
