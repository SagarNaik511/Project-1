import React, { useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5); 


  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const feedbackData = {
      name,
      email,
      message,
      rating,
    };

    
    console.log("Customer Feedback: ", feedbackData);

    setName("");
    setEmail("");
    setMessage("");
    setRating(5);
  };

  return (
    <div className="feedback-form">
      <h2>Customer Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Rating (1-5):</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div>
          <button type="submit">Submit Feedback</button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;


