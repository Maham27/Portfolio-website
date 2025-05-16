// ContactForm.jsx
import { FaDribbble, FaBehance, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const sendEmail = (data) => {
    emailjs
      .send(
        "your_service_id",     // Replace with your EmailJS service ID
        "your_template_id",    // Replace with your EmailJS template ID
        data,
        "your_public_key"      // Replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          reset();
        },
        () => {
          toast.error("Oops! Something went wrong.");
        }
      );
  };

  return (
    <div className="bg-gradient-to-br from-[#f3f4ff] to-[#e5e7ff] py-16 px-4 md:px-12 lg:px-24 font-outfit">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-white shadow-xl rounded-xl overflow-hidden font-outfit">
        {/* Left Info Panel */}
        <div className="bg-[#0a0f2c] text-white p-8 h-full flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-bold">Contact Information</h3>
          <p className="opacity-90">
            Feel free to reach out — I’ll respond as soon as possible!
          </p>
          <div className="space-y-2 text-white">
  <div className="flex items-center space-x-2">
    <FaPhoneAlt className="text-lg" />
    <span>+1234567890</span>
  </div>
  <div className="flex items-center space-x-2">
    <FaEnvelope className="text-lg" />
    <span>Toobanavid.artist@gmail.com</span>
  </div>
  <div className="flex items-center space-x-2">
    <FaMapMarkerAlt className="text-lg" />
    <span>Lahore, Pakistan</span>
  </div>
</div>
          {/* Social Icons */}
<div className="flex space-x-4 pt-4">
  <a
    href="https://dribbble.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-300 text-white text-2xl"
  >
    <FaDribbble />
  </a>
  <a
    href="https://www.behance.net/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-300 text-white text-2xl"
  >
    <FaBehance />
  </a>
  <a
    href="https://www.instagram.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-400 text-white text-2xl"
  >
    <FaInstagram />
  </a>
</div>

        </div>

        {/* Right Form Panel */}
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-[#0a0f2c] mb-2">
            Get In Touch
          </h2>
          <p className="text-blue-400 mb-6">
            Let’s collaborate! Whether it’s a new project or something cool.
          </p>
          <form onSubmit={handleSubmit(sendEmail)} className="space-y-4">
            <input
              className="w-full p-3 bg-gradient-to-br from-white via-[#f8f8ff] to-[#e7eaff] rounded-md focus:ring-2 focus:ring-[#4f46e5]"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-blue-800 text-sm">{errors.name.message}</p>
            )}

            <input
              className="w-full p-3 bg-gradient-to-br from-white via-[#f8f8ff] to-[#e7eaff] rounded-md focus:ring-2 focus:ring-[#4f46e5]"
              placeholder="Your Email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}

        

            <textarea
              className="w-full p-3 bg-gradient-to-br from-white via-[#f8f8ff] to-[#e7eaff] rounded-md focus:ring-2 focus:ring-[#4f46e5]"
              placeholder="Your Message"
              rows="5"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm">{errors.message.message}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#0a0f2c] hover:bg-[#4338ca] text-white py-3 rounded-full px-4 transition duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default ContactForm;
