import { useState } from "react";
import "./App.css";

function App() {
  const [mode, setMode] = useState("list");

  const users = {
    user1: {
      fullName: "Иванов Иван Иванович",
      email: "ivanov@ivan.ivan",
      phone: "+70000000001",
    },
    user2: {
      fullName: "Петров Петр Петрович",
      email: "petrov@petr.petr",
      phone: "+70000000002",
    },
    user3: {
      fullName: "Сидоров Сергей Сергеевич",
      email: "sidorov@sidor.sidor",
      phone: "+70000000003",
    },
    user4: {
      fullName: "Никитин Никита Никитович",
      email: "nekitov@nekita.nekita",
      phone: "+70000000004",
    },
  };

  const userList = Object.values(users).map(({ fullName, email, phone }) => {
    return (
      <tr key={email}>
        <td>{fullName}</td>
        <td>{email}</td>
        <td>{phone}</td>
      </tr>
    );
  });

  const userTiles = Object.values(users).map(({ fullName, email, phone }) => {
    return (
      <td key={email}>
        <tr>{fullName}</tr>
        <tr>{email}</tr>
        <tr>{phone}</tr>
      </td>
    );
  });

  return (
    <>
      <div>
        <button className={mode === "list" ? "active" : ""} onClick={() => setMode("list")}>
          List
        </button>
        <button className={mode === "tiles" ? "active" : ""} onClick={() => setMode("tiles")}>
          Tiles
        </button>
      </div>
      <table>{mode === "list" ? userList : userTiles}</table>
    </>
  );
}

export default App;
