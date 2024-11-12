import { Route, Routes } from "react-router-dom";
import { PATH } from "./utils/path";
import Layout from "./templates/Layout";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Song from "./pages/Song";
import Artist from "./pages/Artist";
import Genre from "./pages/Genre";

function App() {
  return (
    <Routes>
      <Route path={PATH.LAYOUT} element={<Layout />}>
        <Route path={PATH.DASHBOARD} index element={<Dashboard />} />
        <Route path={PATH.USER} element={<User />} />
        <Route path={PATH.SONG} element={<Song />} />
        <Route path={PATH.ARTIST} element={<Artist />} />
        <Route path={PATH.GENRE} element={<Genre />} />
      </Route>
    </Routes>
  );
}

export default App;
