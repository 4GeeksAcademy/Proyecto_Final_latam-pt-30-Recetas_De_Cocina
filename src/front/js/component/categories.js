import React from 'react';


const categories = [
    { title: 'Postres', description: 'Delicious dessert recipes', image: 'https://via.placeholder.com/150' },
    { title: 'Desayunos', description: 'Start your day with a great breakfast', image: 'https://via.placeholder.com/150' },
    { title: 'Almuerzo', description: 'Tasty lunch recipes for any day', image: 'https://via.placeholder.com/150' },
    { title: 'Recetas Keto', description: 'Healthy and delicious keto recipes', image: 'https://via.placeholder.com/150' },
];

export const Categories = () => {
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Choose a Category</h2>
            <Row>
                {categories.map((category, index) => (
                    <Col md={3} key={index}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={category.image} />
                            <Card.Body className="text-center">
                                <Card.Title>{category.title}</Card.Title>
                                <Card.Text>{category.description}</Card.Text>
                                <a href="#" className="btn btn-primary">View Recipes</a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};


