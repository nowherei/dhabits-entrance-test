import ItemList from "../item-list";
import "./app.css";
import { useState, useEffect } from "react";

const App = () => {
  const [cached, setCached] = useState({});
  const [opened, setOpened] = useState([0]);

  useEffect(() => {
    const fetchData = async () => {
      const lastId = opened[opened.length - 1];
      if (cached[lastId]) return;
      const response = await fetch(
        `http://164.90.161.80:3000/api/content${
          lastId ? "?dirId=" + lastId : ""
        }`
      );
      const data = await response.json();
      setCached({ ...cached, [lastId]: data });
    };

    fetchData();
  });

  return (
    <div className="tree">
      <ItemList cached={cached} opened={opened} setOpened={setOpened} />
    </div>
  );
};

export default App;
