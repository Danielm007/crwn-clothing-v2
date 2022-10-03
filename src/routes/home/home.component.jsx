import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import categories from "../../categories.json";

const Home = () => {
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
