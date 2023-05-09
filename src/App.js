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
          <div className="overlay absolute w-full h-full inset-0 bg-gradient-to-t from-[#000005]"></div>
          <img className="w-full h-full object-cover rounded-lg" src="https://cdnimg.vietnamplus.vn/t1200/Uploaded/Mtpyelagtpy/2019_04_29/avengersendgame2904.jpg" alt="banner"></img>
          <div className="absolute text-white left-5 bottom-0">
            <h2 className="mb-5 font-bold text-3xl">Avengers: Endgame</h2>
            <div className="type mb-10 gap-x-3 flex">
              <span className="py-2 px-4 text-xs rounded-lg border border-solid">Action</span>
              <span className="py-2 px-4 text-xs rounded-lg border border-solid">Adventure</span>
              <span className="py-2 px-4 text-xs rounded-lg border border-solid">Drama</span>
            </div>
            <button className="mb-5 bg-primary px-4 py-2 rounded-lg text-lg">Watch</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
