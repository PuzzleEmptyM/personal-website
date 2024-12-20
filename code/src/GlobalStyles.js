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
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px;

      .menu-toggle {
        display: none;
        background: #00e5ff;
        color: #1a1a1a;
        border: none;
        padding: 10px 20px;
        font-size: 1.2rem;
        cursor: pointer;
      }

      ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        padding: 0;
        margin: 0;

        li {
          margin: 0 10px;

          a {
            color: #00e5ff;
            text-decoration: none;
            cursor: pointer;
            transition: color 0.3s;
            font-size: 1.5rem;
          }

          a:hover {
            color: #ff00e5;
          }
        }
      }

      ul.open {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #1a1a1a;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        padding: 20px 0;
      }
    }
  }

  /* Media queries for responsive styles */
  @media (max-width: 768px) {
    header nav {
      .menu-toggle {
        display: block;
      }

      ul {
        display: none;

        &.open {
          display: flex;
        }
      }
    }
  }

  section {
    padding: 60px 20px 20px;
    height: auto;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #home {
    margin-top: 80px;
    text-align: center;
    padding: 100px 20px;
    height: auto
  }

  .profile-container {
    text-align: center;
    margin-bottom: 20px;
  }

  .profile-picture {
    width: 450px;
    height: 450px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #00e5ff;
    margin-bottom: 20px;
  }

  .home-heading {
    font-size: 4rem;
    margin-bottom: 20px;
    color: #ffffff;
  }

  .home-subheading {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #ffffff;
  }

  .home-description {
    font-size: 2rem;
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

  @media (max-width: 1024px) {
    #home {
      padding: 80px 15px; 
    }

    .profile-picture {
      width: 350px; 
      height: 350px;
    }

    .home-heading {
      font-size: 3rem; 
    }

    .home-subheading {
      font-size: 2rem; 
    }

    .home-description {
      font-size: 1.5rem; 
    }

    .home-buttons button {
      font-size: 1.3rem;
      padding: 12px 25px;
    }
  }

  @media (max-width: 768px) {
    #home {
      padding: 60px 10px;
    }

    .profile-picture {
      width: 250px;
      height: 250px;
    }

    .home-heading {
      font-size: 2.5rem;
    }

    .home-subheading {
      font-size: 1.8rem;
    }

    .home-description {
      font-size: 1.2rem;
    }

    .home-buttons {
      flex-direction: wrap;
      gap: 10px;
    }

    .home-buttons button {
      font-size: 1.2rem;
      padding: 10px 20px;
    }
  }

  footer {
    background: #1a1a1a;
    padding: 20px;
    text-align: center;
    font-size: 1rem;
    width: 100%;
    margin: 0 auto;
  }

  h2 {
    border-bottom: 2px solid #00e5ff;
    padding-bottom: 10px;
    font-size: 3rem;
  }

  p {
    font-size: 2rem;
    width: 100%;
    max-width: 1500px;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 1500px;
  }

  .project {
    background: #1a1a1a;
    border-radius: 10px;
    box-shadow: 0 0 10px #00e5ff;
    transition: box-shadow 0.3s;
    overflow: hidden;
    position: relative;
    aspect-ratio: 16 / 9; 
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
    object-fit: cover; 
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
  }

  .project:hover img {
    opacity: .75; 
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
  opacity: 0; 
  transition: opacity 0.7s ease-in-out; 
}

  @media (max-width: 1200px) { 
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
    .project h3 {
    font-size: 1.25rem; 
  }
  .project p {
    font-size: .75rem; 
  }
}

  @media (max-width: 768px) { 
  .projects-grid {
    grid-template-columns: 1fr; 
  }
  .project h3 {
    font-size: 1.75rem; 
  }
  .project p {
    font-size: 1.25rem; 
  }
}

@media (max-width: 480px) { 
  .projects-grid {
    grid-template-columns: 1fr; 
  }
  .project h3 {
    font-size: 1.25rem; 
  }
  .project p {
    font-size: 1rem; 
  }
}

@media (max-width: 400px) { 
  .projects-grid {
    grid-template-columns: 1fr; 
  }
  .project h3 {
    font-size: 1rem; 
  }
  .project p {
    font-size: .75rem; 
  }
}

@media (max-width: 400px) { 
  .projects-grid {
    grid-template-columns: 1fr; 
  }
  .project h3 {
    font-size: .75rem; 
  }
  .project p {
    font-size: .50rem; 
  }
}

  ul {
    list-style: none;
    font-size: 2rem;
    width: 100%; 
    max-width: 1500px; 
  }

  ul li {
    margin-bottom: 10px;
  }

  a {
    color: #00e5ff;
    font-size: 2rem; 
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
  font-size: 3em; 
  transition: transform 0.3s;
}

.social-links a:hover {
  transform: scale(1.2); 
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
