import { Route, Routes } from "react-router-dom";
import Mailing from "./components/mailings/Mailing";
import CreateMailing from "./components/create-mailing/CreateMailing";
import Profile from "./components/profile/Profile";
import Report from "./components/report/Report";
import { Client } from "./components/clients/Client";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mailing />} />
      <Route path="/create-mailing" element={<CreateMailing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/report" element={<Report />} />
      <Route path="/clients" element={<Client />} />
    </Routes> 
  );
};
