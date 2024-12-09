import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    background: #0f0f0f;
    color: #ffffff;
  }

  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  header {
    background: #1a1a1a;
    padding: 20px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;

    nav {
      max-width: 900px; /* Increased width */
      margin: 0 auto;
      padding: 0 20px;
    }

    nav ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      padding: 10;
      margin: 0;
    }

    nav ul li {
      margin: 0 10px;
    }

    nav ul li a {
      color: #00e5ff;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.3s;
      font-size: 1.5rem; /* Adjust font size for nav links */
    }

    nav ul li a:hover {
      color: #ff00e5;
    }
  }

  section {
    padding: 60px 20px 20px; /* Adjusted top padding */
    height: auto; /* Auto height for sections */
    width: 100%; /* Ensure sections take full width */
    max-width: 1500px; /* Increased width */
    margin: 0 auto 40px; /* Bottom margin for spacing between sections */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center align all content */
  }

  #home {
    margin-top: 80px; /* Ensure the "Home" section clears the header */
    text-align: center; /* Center align text */
    padding: 100px 20px; /* Increase padding for larger section */
    height: 1200px; /* Fixed height */
  }

  .profile-container {
    text-align: center;
    margin-bottom: 20px;
  }

  .profile-picture {
    width: 450px;  /* Updated size */
    height: 450px;  /* Updated size */
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #00e5ff;
    margin-bottom: 20px;
  }

  .home-heading {
    font-size: 4rem; /* Larger heading */
    margin-bottom: 20px;
    color: #ffffff;
  }

  .home-subheading {
    font-size: 2.5rem; /* Larger subheading */
    margin-bottom: 20px;
    color: #ffffff;
  }

  .home-description {
    font-size: 2rem; /* Larger description */
    margin-bottom: 40px;
    color: #a9a9a9;
  }

  .home-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  .home-buttons button {
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    background: linear-gradient(90deg, #00e5ff, #ff00e5);
    color: #0f0f0f;
    cursor: pointer;
    transition: background 0.3s;
    font-size: 1.5rem;
  }

  .home-buttons button:hover {
    background: linear-gradient(90deg, #ff00e5, #00e5ff);
  }

  footer {
    background: #1a1a1a;
    padding: 20px;
    text-align: center;
    font-size: 1rem; /* Adjust font size for footer */
    width: 100%; /* Ensure footer takes full width */
    margin: 0 auto; /* Center footer within the page */
  }

  h2 {
    border-bottom: 2px solid #00e5ff;
    padding-bottom: 10px;
    font-size: 3rem; /* Adjusted heading size */
  }

  p {
    font-size: 2rem; /* Adjusted paragraph size */
    width: 100%; /* Ensure paragraphs take full width */
    max-width: 1500px; /* Increased width */
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%; /* Ensure grid takes full width */
    max-width: 1500px; /* Increased width */
  }

  .project {
    background: #1a1a1a;
    border-radius: 10px;
    box-shadow: 0 0 10px #00e5ff;
    transition: box-shadow 0.3s;
    overflow: hidden;
    position: relative;
    aspect-ratio: 16 / 9; /* Maintain consistent aspect ratio */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .project:hover {
    box-shadow: 0 0 20px #00e5ff;
  }

  .project img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure images scale properly without stretching */
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
  }

  .project:hover img {
    opacity: .75; /* Show image on hover */
  }

  .project h3 {
    font-size: 2rem;
    text-align: center;
    z-index: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .project p {
    font-size: 1.5rem;
    text-align: center;
    z-index: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .project:hover h3, .project:hover p {
  opacity: 0; /* Make text invisible */
  transition: opacity 0.7s ease-in-out; /* Smooth transition */
}

  @media (max-width: 1200px) { /* Medium-large screens (e.g., laptops or large tablets) */
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
    .project h3 {
    font-size: 1.25rem; /* Slightly smaller for medium-large screens */
  }
  .project p {
    font-size: .75rem; /* Adjust paragraph size */
  }
}

  @media (max-width: 768px) { /* Medium screens (tablets and small devices) */
  .projects-grid {
    grid-template-columns: 1fr; /* One column */
  }
  .project h3 {
    font-size: 1.75rem; /* Slightly smaller for medium-large screens */
  }
  .project p {
    font-size: 1.25rem; /* Adjust paragraph size */
  }
}

@media (max-width: 480px) { /* Small screens (phones) */
  .projects-grid {
    grid-template-columns: 1fr; /* Still one column */
  }
  .project h3 {
    font-size: 1.25rem; /* Slightly smaller for medium-large screens */
  }
  .project p {
    font-size: 1rem; /* Adjust paragraph size */
  }
}

@media (max-width: 400px) { /* Small screens (phones) */
  .projects-grid {
    grid-template-columns: 1fr; /* Still one column */
  }
  .project h3 {
    font-size: 1rem; /* Slightly smaller for medium-large screens */
  }
  .project p {
    font-size: .75rem; /* Adjust paragraph size */
  }
}

@media (max-width: 400px) { /* Small screens (phones) */
  .projects-grid {
    grid-template-columns: 1fr; /* Still one column */
  }
  .project h3 {
    font-size: .75rem; /* Slightly smaller for medium-large screens */
  }
  .project p {
    font-size: .50rem; /* Adjust paragraph size */
  }
}

  ul {
    list-style: none;
    font-size: 2rem; /* Adjusted list item size */
    width: 100%; /* Ensure list takes full width */
    max-width: 1500px; /* Increased width */
  }

  ul li {
    margin-bottom: 10px;
  }

  a {
    color: #00e5ff;
    font-size: 2rem; /* Adjusted link size */
  }

  a:hover {
    text-decoration: underline;
    color: #ff00e5;
  }

  .contact-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
    max-width: 600px;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
  }

  .contact-info h1 {
    font-size: 4rem;
    margin-bottom: 20px;
    color: #ffffff;
  }

  .contact-info p {
    font-size: 1.5rem;
    color: #a9a9a9;
    margin-bottom: 20px;
  }

  .contact-info a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #00e5ff;
    text-decoration: none;
    margin-bottom: 10px;
  }

  .contact-info a:hover {
    color: #ff00e5;
  }

  .contact-info svg {
    margin-right: 10px;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 1.5rem;
    width: 100%;
    max-width: 600px;
    padding: 25px;
    background: #1a1a1a;
    border-radius: 10px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    margin-bottom: 5px;
  }

  .form-group input,
  .form-group textarea {
    padding: 10px;
    border: 1px solid #00e5ff;
    border-radius: 5px;
    background: #1a1a1a;
    color: #ffffff;
  }

  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }

  .social-links a {
  margin-right: 10px;
  font-size: 3em; /* Increase the font size for larger icons */
  transition: transform 0.3s;
}

.social-links a:hover {
  transform: scale(1.2); /* Slightly enlarge the icons on hover */
}


  button {
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    background: linear-gradient(90deg, #00e5ff, #ff00e5);
    color: #0f0f0f;
    cursor: pointer;
    transition: background 0.3s;
    font-size: 1.5rem;
  }

  button:hover {
    background: linear-gradient(90deg, #ff00e5, #00e5ff);
  }
`;

export default GlobalStyle;
