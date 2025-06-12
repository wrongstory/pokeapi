import { useEffect } from "react";
import "./App.scss";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav className="flex gap-[20px] justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"favorite"}>찜목록</Link>
        <span>🔍</span>
        <input
          onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
          className="w-[120px]  border-b border-[darkgray] px-2"
        />
      </nav>
      <main className="flex flex-wrap gap-[20px] pt-[20px] justify-center">
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/detail/:pokemonId"} element={<Detail />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/favorite"} element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
