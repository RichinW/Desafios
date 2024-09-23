import CardExpense from "./components/cardExpense";
import CardBalance from "./components/cardBalance";
function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-screen h-screen">
      <CardBalance />
      <CardExpense />
    </div>
  );
}

export default App;
