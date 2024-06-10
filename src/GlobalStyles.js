import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background: #0f0f0f;
    color: #ffffff;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.5rem; /* Reduced base font size */
  }

  .container {
    height: 100vh;
    scroll-snap-type: y mandatory; /* Enable vertical scroll snapping */
    overflow-y: scroll; /* Allow vertical scrolling */
  }

  header {
    background: #1a1a1a;
    padding: 20px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;

    nav {
      max-width: 1000px;
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
      font-size: 1.25rem; /* Adjust font size for nav links */
    }

    nav ul li a:hover {
      color: #ff00e5;
    }
  }

  section {
    padding: 10px 0; /* Further reduced padding */
    height: 60vh; /* Set fixed height */
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    opacity: 0;
    transform: translateY(20px); /* Reduced transform distance */
    transition: opacity 1.5s ease-out, transform 1.5s ease-out; /* Increased duration */
    scroll-snap-align: start; /* Snap to the start of the section */
  }

  .section-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .profile-container {
    text-align: center;
    margin-bottom: 20px;
  }

  .profile-picture {
    width: 250px;  /* Updated size */
    height: 250px;  /* Updated size */
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #00e5ff;
  }

  footer {
    background: #1a1a1a;
    padding: 20px;
    text-align: center;
    font-size: 1.25rem; /* Adjust font size for footer */
  }

  h2 {
    border-bottom: 2px solid #00e5ff;
    padding-bottom: 10px;
    margin-bottom: 20px;
    margin-top: 0; /* Removed top margin */
    font-size: 2.5rem; /* Adjusted heading size */
  }

  p {
    font-size: 1.5rem; /* Adjusted paragraph size */
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
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
  }

  .project:hover {
    box-shadow: 0 0 20px #00e5ff;
  }

  .project img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .project h3 {
    margin-bottom: 10px;
    font-size: 2rem; /* Adjust font size for project titles */
  }

  .project p {
    margin: 0;
    font-size: 1.25rem; /* Adjusted paragraph size */
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    font-size: 1.5rem; /* Adjusted list item size */
  }

  ul li {
    margin-bottom: 10px;
  }

  a {
    color: #00e5ff;
    font-size: 1.5rem; /* Adjusted link size */
  }

  a:hover {
    text-decoration: underline;
    color: #ff00e5;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 1.5rem; /* Adjusted form text size */
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
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: #00e5ff;
    color: #0f0f0f;
    cursor: pointer;
    transition: background 0.3s;
    font-size: 1.5rem; /* Adjusted button text size */
  }

  button:hover {
    background: #ff00e5;
  }
`;

export default GlobalStyle;
