import React from "react";

const NotFound = ({ content }) => {
  return (
    <div className="container mainContainer">
      <h1 className="title">Erro: 404</h1>
      <p>{content ? "Content" : "Page"} not found.</p>
    </div>
  );
};

export default NotFound;
