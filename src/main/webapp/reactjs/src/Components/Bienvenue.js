import React from 'react';
import { Card } from 'react-bootstrap';

const Bienvenue = () => (
    <Card className="bg-white text-dark">
        <Card.Body>
            <Card.Title>Welcome to our car shop</Card.Title>
            <blockquote className="blockquote mb-0">
                <p>Le meilleur de nos voitures est exposé près de chez vous</p>
                <footer className="blockquote-footer">Master MIOLA</footer>
            </blockquote>
        </Card.Body>
    </Card>
);

export default Bienvenue;
