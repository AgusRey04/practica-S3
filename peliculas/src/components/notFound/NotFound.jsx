import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="text-center mt-3">
      <h2> Ups! La página solicitada no fue encontrada.</h2>
      <Button onClick={handleGoBack}>Volver a Cartelera</Button>
    </div>
  );
}

export default NotFound;
