
function App() {
  return (
    <>
      <header className="flex items-center justify-center py-5 gap-x-5 text-white mb-10">
        <span className="text-primary">TV Series</span>
        <span>Movies</span>
        <span>Anime</span>
      </header>
      <div className="page-content h-[600px] pb-20">
        <div className="banner relative w-full h-full rounded-lg">
          <div className="overlay absolute w-full h-full inset-0 bg-gradient-to-t from-[#000005]"></div>
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://cdnimg.vietnamplus.vn/t1200/Uploaded/Mtpyelagtpy/2019_04_29/avengersendgame2904.jpg"
            alt="banner"
          ></img>
          <div className="absolute text-white left-5 bottom-0">
            <h2 className="mb-5 font-bold text-3xl">Avengers: Endgame</h2>
            <div className="type mb-10 gap-x-3 flex">
              <span className="py-2 px-4 text-xs rounded-lg border border-solid">
                Action
              </span>
              <span className="py-2 px-4 text-xs rounded-lg border border-solid">
                Adventure
              </span>
              <span className="py-2 px-4 text-xs rounded-lg border border-solid">
                Drama
              </span>
            </div>
            <button className="mb-5 bg-primary px-4 py-2 rounded-lg text-lg">
              Watch
            </button>
          </div>
        </div>
      </div>
      <div className="now-playing page-content pb-20 text-white">
        <h2 className=" text-3xl font-bold capitalize mb-10">
          now playing
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card bg-slate-800 rounded-lg p-3">
            <img
              src="https://znews-photo.zingcdn.me/w660/Uploaded/neg_yslewlx/2021_01_13/8_years_of_the_avengers_how_joss_whedons_risk_became_crucial_5z9w.jpg"
              alt="image"
              className="h-[300px] w-full object-cover rounded-lg mb-5"
            ></img>
            <h3 className="capitalize text-lg font-bold mb-5">spiderman: homecoming</h3>
            <div className="flex items-center justify-between text-sm opacity-70 mb-5">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="w-full text-lg bg-primary py-2 rounded-lg">Watch now</button>
          </div>
        </div>
      </div>
      <div className="now-playing page-content pb-20 text-white">
        <h2 className=" text-3xl font-bold mb-10">
          Top rated movies
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card bg-slate-800 rounded-lg p-3">
            <img
              src="https://znews-photo.zingcdn.me/w660/Uploaded/neg_yslewlx/2021_01_13/8_years_of_the_avengers_how_joss_whedons_risk_became_crucial_5z9w.jpg"
              alt="image"
              className="h-[300px] w-full object-cover rounded-lg mb-5"
            ></img>
            <h3 className="capitalize text-lg font-bold mb-5">spiderman: homecoming</h3>
            <div className="flex items-center justify-between text-sm opacity-70 mb-5">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="w-full text-lg bg-primary py-2 rounded-lg">Watch now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
