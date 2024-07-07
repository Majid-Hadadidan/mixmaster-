import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/Wrapper/SearchForm";

export default function SearchForm({searchTerm}) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Searching..." : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
}
