import Wrapper from "../assets/Wrapper/ErrorPage.js";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

export default function Error() {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found page" />
          <h3>Ohh!</h3>
          <p>we can not seem to find page you are looking for !</p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  );
}
