import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
export default function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <div>
      <NavBar />
      {isPageLoading ? (
        <div className="loading"></div>
      ) : (
        <section className="page">
          <Outlet />
        </section>
      )}
    </div>
  );
}
