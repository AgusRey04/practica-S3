import { Card, Button } from "react-bootstrap";

function MovieCard({
  titulo,
  director,
  poster,
  duracion,
  clasificacion,
  cine,
  onDelete,
}) {
  return (
    <Card style={{ width: "18rem" }} className="mb-4">
      <Card.Img variant="top" src={poster} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          <strong>Director:</strong> {director} <br />
          <strong>Duración:</strong> {duracion} <br />
          <strong>Clasificación:</strong> {clasificacion} <br />
          <strong>Cine:</strong> {cine}
        </Card.Text>
        Ver detalles
        <Button variant="danger" onClick={onDelete}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
