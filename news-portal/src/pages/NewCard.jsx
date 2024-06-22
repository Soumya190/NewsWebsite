import React from "react";
import Card from "react-bootstrap/Card";
import "./newcard.css";


function NewCard({ displayedData }) {
  return (
    <>
      <div className="container">
        <div className="row">
          {displayedData.map((item) => (
            <div key={item.url} className="col-12 col-sm-6 col-lg-4 mb-4">
              <Card className="h-100" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.urlToImage} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <a href={item.url}>{item.description}</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default NewCard;
