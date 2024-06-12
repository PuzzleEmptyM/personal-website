import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    background: #0f0f0f;
    color: #ffffff;
  }

  body, html {
    height: 100%;
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    background: #0f0f0f;
    color: #ffffff;
  }

  .container {
    display: flex;
    flex-direction: column;
    overflow-y: auto; /* Allow vertical scrolling */
  }

  header {
    background: #1a1a1a;
    padding: 20px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    height: 60px; /* Fixed header height */

    nav {
      max-width: 1500px; /* Increased width */
      margin: 0 auto;
      padding: 0 20px;
    }

    nav ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      padding: 0;
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
    height: calc(100vh - 80px); /* Make it almost full screen, considering the header height */
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
    font-size: 1.5rem; /* Adjust font size for footer */
    width: 100%; /* Ensure footer takes full width */
    max-width: 1500px; /* Increased width */
    margin: 0 auto; /* Center footer within the page */
  }

  h2 {
    border-bottom: 2px solid #00e5ff;
    padding-bottom: 10px;
    font-size: 3rem; /* Adjusted heading size */
    width: 100%; /* Ensure headings take full width */
    max-width: 1500px; /* Increased width */
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: #1a1a1a;
    border-radius: 10px;
    box-shadow: 0 0 10px #00e5ff;
    transition: box-shadow 0.3s;
    position: relative; /* Added for image positioning */
    overflow: hidden; /* Hide overflowing content */
  }

  .project:hover {
    box-shadow: 0 0 20px #00e5ff;
  }

  .project img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    opacity: 0; /* Hide image initially */
    transition: opacity 0.3s ease-in-out;
    position: absolute; /* Position image absolutely */
    top: 0;
    left: 0;
  }

  .project:hover img {
    opacity: 1; /* Show image on hover */
  }

  .project h3 {
    font-size: 2rem; /* Adjust font size for project titles */
    z-index: 1; /* Ensure text is above image */
  }

  .project p {
    font-size: 1.5rem; /* Adjusted paragraph size */
    text-align: center;
    z-index: 1; /* Ensure text is above image */
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

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 2rem; /* Adjusted form text size */
    width: 100%; /* Ensure form takes full width */
    max-width: 1500px; /* Increased width */
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

  button {
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    background: #00e5ff;
    color: #0f0f0f;
    cursor: pointer;
    transition: background 0.3s;
    font-size: 2rem; /* Adjusted button text size */
  }

  button:hover {
    background: #ff00e5;
  }
`;

export default GlobalStyle;
