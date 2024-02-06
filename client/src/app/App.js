import { Routes, Route } from 'react-router-dom';

import Layout from '../layout/layout/Layout';
import Home from '.././pages/home/Home';
import Login from '../features/auth/Login';
import RequireAuth from './../features/auth/RequireAuth';
import Dashboard from '../features/dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="sign-in" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="user" element={<Dashboard />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
