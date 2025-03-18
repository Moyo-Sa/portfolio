import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactMe = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields");
      return;
    }
    setLoading(true);
    // Create a FormData object to send data
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("_captcha", "false"); // Optional: Disable CAPTCHA

    // Submit the form to FormSubmit
    fetch("https://formsubmit.co/zimoyosaliu@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // alert("Message sent successfully!");
          navigate("/thank-you"); // Redirect on success
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-12">
      <div>
        <h1 className="text-3xl justify-center font-bold text-gray-800">
          &nbsp;&nbsp;&nbsp;Contact Me
        </h1>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Fill out this form to contact me
        </p>
      </div>
      <div>
        <form
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl"
          onSubmit={handleSubmit}
        >
          {/* Name Field */}
          <div className="flex items-center space-x-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name &nbsp; &nbsp;
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none w-96 p-3"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center space-x-2 mt-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email &nbsp; &nbsp; &nbsp;
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none w-96 p-3"
              required
            />
          </div>

          {/* Message Field */}
          <div className="flex items-center space-x-2 mt-3">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="40"
              value={form.message}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none w-96 p-3"
              required
            ></textarea>
          </div>

          {/* Hidden Field for CAPTCHA */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 bg-[#740b72] text-white text-sm font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-[#bb5ae8] focus:ring-4 focus:ring-[#4649ff] disabled:bg-gray-400 disabled:cursor-not-allowed mx-auto block"
            >
              {loading ? "Contacting..." : "Contact Me"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
