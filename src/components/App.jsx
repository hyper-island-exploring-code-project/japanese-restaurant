import BestSection from "./Best/Best";

function App() {
  return (
    <>
      <h1 className="font-thin text-slate-400 text-6xl">Test</h1>
      <div>
        <p
          className="text-red hover:text-blue bg-green-500 font-bold text-2x"
          style={{ height: "100vh" }}
        >
          test2
        </p>
      </div>
      <BestSection />
    </>
  );
}

export default App;
