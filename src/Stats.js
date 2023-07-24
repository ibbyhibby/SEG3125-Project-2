import React from 'react';
import { Navbar } from './Navbar';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import ChatButton from './ChatButton';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

const styles = `
.stats-page {
    background-color: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .stats-page .header-text {
    font-size: 3rem;
    font-weight: bold;
    margin-top: 2rem;
  }
  
  .stats-page .chart-container {
    margin-top: 2rem;
    flex-grow: 1;
  }
  
  .stats-page .chart-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  
  .stats-page .chart-item {
    width: 40%;
    height: 300px;
  }
  
  .stats-page .chart-title {
    margin-top: 3rem;  
    text-align: center;
    padding-left: 1rem;
  }

  .stats-page footer {
    color: #fff;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #212529;
    margin-top: auto;
  }
  
  .stats-page .footer-link {
    color: #fff;
    margin: 0 1.5rem;
  }
  
  .stats-page .footer-link:hover {
    color: #ddd;
    text-decoration: none;
  }
`;

export const Stats = () => {

    const dataForLineChart = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3, 7, 8, 9, 10, 12, 14],
          fill: false,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
        },
      ],
    };

    const dataForBarChart = {
      labels: ['Xbox', 'Playstation', 'Nintendo'],
      datasets: [
        {
          label: '# of Sales',
          data: [12, 19, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const dataForDoughnutChart = {
      labels: ['Xbox', 'Playstation', 'Nintendo'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    return (
        <div className="stats-page">
            <style>{styles}</style>
            <Navbar />
            <Container className="mt-3">
                <Row>
                    <Col className="text-center">
                        <h1 className="header-text">Game Statistics</h1>
                        <p>Explore comprehensive statistics about your favorite consoles .</p>
                    </Col>
                </Row>
                <div className="chart-container">
                    <div className="chart-wrapper">
                    <div className="chart-item">
                <h2 className="chart-title">Sales Over Time</h2>
                <Line data={dataForLineChart} />
                </div>
                <div className="chart-item">
                <h2 className="chart-title">Sales By Console</h2>
                <Bar data={dataForBarChart} />
                </div>
                <div className="chart-item chart-title-special">
                <h2 className="chart-title"><br></br><br></br> <br></br>Popularity By Console</h2>
                <Doughnut data={dataForDoughnutChart} options={{ aspectRatio: 2 }} />
                </div>
                    </div>
                    <br></br>
                    <br></br>           
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <ProgressBar striped variant="info" now={60} label="‎ " />

                </div>
            </Container>
            <ChatButton />
            <></>
            <footer className="text-center mt-5">
                <Link to="/" className="nav-button">Home</Link>
                <Link to="/About" className="nav-button">About</Link>
                <Link to="/Contact" className="nav-button">Contact</Link>
            </footer>
        </div>
    );
}