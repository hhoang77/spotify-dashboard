import { Route, Routes } from "react-router-dom";
import { PATH } from "./utils/path";
import Layout from "./templates/Layout";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Song from "./pages/Song";
import Artist from "./pages/Artist";
import Genre from "./pages/Genre";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Create_Song from "./pages/add-new/Song";
import Create_genre from "./pages/add-new/Genre";
import Create_Artist from "./pages/add-new/Artist";

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
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.REGISTER} element={<Register />} />
      <Route path={PATH.CREATE_SONG} element={<Create_Song />} />
      <Route path={PATH.CREATE_GENRE} element={<Create_genre />} />
      <Route path={PATH.CREATE_ARTIST} element={<Create_Artist />} />
    </Routes>
  );
}

export default App;
