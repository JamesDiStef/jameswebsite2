import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <span className="flex justify-center align-middle">
      <h1 className="float-bottom text-3xl font-bold underline">Hello Sean!</h1>

      <div class="w-full h-screen bg-gray-200 flex justify-center items-center">
        <div class="bg-gray-400 w-96 h-96 relative z-0">
          <p class="italic text-bold bd-red-100 font-serif">Map</p>
          <div class="absolute inset-0 flex justify-center items-center z-10">
            <p class="text-2xl font-bold">You suck</p>
          </div>
        </div>
      </div>
    </span>
  );
}

export default App;
