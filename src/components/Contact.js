import React from "react";
import FeedbackForm from "../components/FeedbackForm"; // Import the FeedbackForm component

function ContactUsPage() {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us!</p>
      <p>
        <strong>Our Address:</strong>
        <br />
        Near Sahyadri Campus, Adyar, Mangaluru, 574222
      </p>
      <p>
        <strong>Email:</strong> info@sagarscakehouse.com
      </p>
      <p>
        <strong>Phone:</strong> 6360510620, 6360510630
      </p>

      {/* Feedback Form Component */}
      <FeedbackForm />
    </div>
  );
}

export default ContactUsPage;


