import { NavLink, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header className="flex items-center justify-center py-5 gap-x-5 text-white mb-10">
        <span className="text-primary">TV Series</span>
        <span>Movies</span>
        <span>Anime</span>
      </header>
      <div className="page-content h-[400px]">
        <div className="banner relative w-full h-full rounded-lg">
          <img className="w-full h-full object-cover rounded-lg" src="https://cdnimg.vietnamplus.vn/t1200/Uploaded/Mtpyelagtpy/2019_04_29/avengersendgame2904.jpg" alt="banner"></img>
        </div>
      </div>
    </>
  );
}

export default App;
