import './App.css';
import Input from './components/input/input';

function App() {
  // const [count, setCount] = useState(0);
  //
  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank" rel="noreferrer">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
  //   </>
  // );
  return (
    <>
      <h1> API searcher </h1>
      <section>
        <Input />
        <button>Search</button>
      </section>
      <section>
        <div> Data 1</div>
        <div> Data 2</div>
        <div> Data 3</div>
        <div> Data 4</div>
        <div> Data 5</div>
      </section>
    </>
  );
}

export default App;
