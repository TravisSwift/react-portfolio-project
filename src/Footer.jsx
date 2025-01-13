import React from "react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Travis’s Portfolio. All Rights Reserved.</p>
      <ul style={socialLinksStyle}>
        <li><a href="https://twitter.com/I_Heart_Growth" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://github.com/travisswift" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        {/* <li><a href="mailto:travis.arthur.swift@gmail.com?subject=Portfolio Inquiry">Email Me</a></li> */}
        <li><a href="/Travis_Swift_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 20px",
  textAlign: "center",
};

const socialLinksStyle = {
  listStyleType: "none",
  padding: 0,
  display: "flex",
  justifyContent: "center",
  gap: "15px",
};

export default Footer;

