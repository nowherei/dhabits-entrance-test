import "./app.css";

function App() {
  return (
    <ul>
      <li>
        Test 1
        <ul>
          <li>Test 1</li>
          <li>
            Test 2
            <ul>
              <li>Test 1</li>
              <li>Test 2</li>
              <li>Test 3</li>
            </ul>
          </li>
          <li>Test 3</li>
        </ul>
      </li>
      <li>Test 2</li>
      <li>Test 3</li>
    </ul>
  );
}

export default App;
