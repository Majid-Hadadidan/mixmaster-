import axios from "axios";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigation } from "react-router-dom";

export default function NewsLetter() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          required
        />
      </div>
      {/* Lastname */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          name="lastName"
          id="name"
          className="form-input"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-input"
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting" : "Submit"}
      </button>
    </Form>
  );
}

//action after Submit Form with POST method
const newsletterUrl =
  "https://mixmaster-project-244fc-default-rtdb.firebaseio.com/cocktail-newsletter.json";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success("success check your email");
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    return error;
  }
};
