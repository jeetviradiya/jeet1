import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          text
        </a>
      </header>
      <table>
        <tr>
          <th>id</th>
          <th>userId</th>
          <th>last_name</th>
        </tr>
        {data.map((i) => {
          return (
            <tr>
              <td>{i.id}</td>
              <td>{i.userId}</td>
              <td>{i.title}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
