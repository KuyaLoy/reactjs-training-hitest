import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">Hello world!</h1>
      <Card username="Robin Tapiru" />
      <Card username="mary ann" post="staff engineer" />
    </>
  );
}

export default App;
