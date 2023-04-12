import { Route, Routes } from "react-router-dom";



import Layout from "./components/layout";
import TaskPage from "./pages/task";
import UserPage from "./pages/user";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/manage-users" element={<UserPage />} />
      </Routes>
    </Layout>
  )
}