import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ChatButton from './ChatButton'


const Playstation = () => {

  const gameNames = ['Ace Combat', 'Air Hockey', 'Alien Technology', 'American Pool', 'Batman: Gotham City', 'Casper', "Aladdin: Nasira's Revenge", 'Evil Zoro', 'Fifa 99', 'Final Fantasy 1']

  const initialGames = Array(10).fill().map((_, i) => ({
    img: `/playstation/playstation${i + 1}.jpg`,
    name: gameNames[i] || `Playstation Game ${i + 1}`,
    generation: `Generation ${((i % 3) + 1)}`,
    difficulty: ['Easy', 'Medium', 'Hard'][i % 3],
    price: Math.floor(Math.random() * 41) + 20,
    link: '/Playstation-Product'
  }));

  const [isKidFriendly, setIsKidFriendly] = useState(false);
  const navigate = useNavigate();
  const [games, setGames] = useState(initialGames);
  const [filteredGames, setFilteredGames] = useState(initialGames);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [generation, setGeneration] = useState('Any');
  const [difficulty, setDifficulty] = useState('Any');

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    let newFilteredGames = games;

    if (minPrice) {
      newFilteredGames = newFilteredGames.filter(game => game.price >= minPrice);
    }

    if (maxPrice) {
      newFilteredGames = newFilteredGames.filter(game => game.price <= maxPrice);
    }

    if (generation !== 'Any') {
      newFilteredGames = newFilteredGames.filter(game => game.generation === generation);
    }

    if (difficulty !== 'Any') {
      newFilteredGames = newFilteredGames.filter(game => game.difficulty === difficulty);
    }

    setFilteredGames(newFilteredGames);
  };

  const handleCardClick = (game) => {
    navigate('/Playstation-Product', { state: { game } });
  }

  const styles = `
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f5f5;
  }
  
  .console-page {
    background-color: #f5f5f5;
    color: #333;
    min-height: 100vh;
  }
  
  .filter-section {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
    color: #333;
  }
  
  .game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
  }
  
  .game-card {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    text-decoration: none;
    color: #333;
    transition: box-shadow 0.3s ease;
  }
  
  .game-card:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  
  .game-card img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  
  .game-details {
    padding: 15px;
  }
  
  .game-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  
  .game-info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #777;
  }
  `;


  return (
    <div className="console-page">
      <style>{styles}</style>
      <Navbar />
      <Container fluid className="mt-3">
        <Row>
          <Col md={3} className="filter-section">
            <h2>Filter</h2>
            <Form onSubmit={handleFilterSubmit}>
              <Form.Group controlId="price">
                <Form.Label>Price Range</Form.Label>
                <Row>
                  <Col>
                    <Form.Control
                      type="number"
                      placeholder="Min Price"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="number"
                      placeholder="Max Price"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="generation">
                <Form.Label>Generation</Form.Label>
                <Form.Control
                  as="select"
                  value={generation}
                  onChange={(e) => setGeneration(e.target.value)}
                >
                  <option>Any</option>
                  <option>Generation 1</option>
                  <option>Generation 2</option>
                  <option>Generation 3</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="difficulty">
                <Form.Label>Difficulty</Form.Label>
                <Form.Control
                  as="select"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option>Any</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="kidFriendly">
                <Form.Check
                  type="checkbox"
                  label="Kid Friendly"
                  checked={isKidFriendly}
                  onChange={(e) => setIsKidFriendly(e.target.checked)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Filter
              </Button>
            </Form>
          </Col>
          <Col md={9}>
          <div className="game-grid">
            {filteredGames.map((game, index) => (
              <div 
                key={index} 
                onClick={() => handleCardClick(game)}
                className="game-card"
                style={{ cursor: 'pointer' }}
              >
                <img src={game.img} alt={game.name} />
                <div className="game-details">
                  <div className="game-title">{game.name}</div>
                  <div className="game-info">
                    <span>Generation: {game.generation}</span>
                    <span>Difficulty: {game.difficulty}</span>
                    <span>Price: ${game.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </Col>
        </Row>
        <ChatButton />
      </Container>
    </div>
  );
};

export default Playstation;
