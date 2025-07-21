"use client";

import React, { useState, useRef } from "react";
import { Modal, Button, Card, Row, Col } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import html2canvas from "html2canvas";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

export function SurveyCard({ departmentName, responseRate, responseCount }) {
  const [show, setShow] = useState(false);
  const chartRef = useRef(null);

  const chartData = {
    labels: ["未回答", "回答済"],
    datasets: [
      {
        data: [100 - responseRate, responseRate],
        backgroundColor: ["#003f5c", "#7a9fc5"],
        borderWidth: 0,
      },
    ],
  };

  const downloadImage = async () => {
    if (chartRef.current) {
      const canvas = await html2canvas(chartRef.current);
      const link = document.createElement("a");
      link.download = "chart.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <>
      <Card
        className="p-3 mb-4 shadow-sm hover-card"
        onClick={() => setShow(true)}
        style={{ cursor: "pointer" }}
      >
        <Row className="align-items-center">
          <Col md={8} className="survey-left">
            <h5>{departmentName}</h5>
            <p>回答率: {responseRate} %</p>
            <p>回答数: {responseCount}</p>
          </Col>
          <Col md={4} className="survey-right">
            <div ref={chartRef} style={{ width: "180px", height: "180px" }}>
              <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
            <Button
              variant="light"
              size="sm"
              className="position-absolute bottom-0 end-0 m-2"
              onClick={(e) => {
                e.stopPropagation();
                downloadImage();
              }}
            >
              ⬇
            </Button>
          </Col>
        </Row>
      </Card>

      <Modal show={show} onHide={() => setShow(false)} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>詳細</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{departmentName} の詳細情報がここに表示されます。</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            閉じる
          </Button>
        </Modal.Footer>
      </Modal>

      <style jsx>{`
        .hover-card:hover {
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
          transform: scale(1.01);
          transition: all 0.3s ease;
        }
        .survey-left {
          background-color: #f8f9fa;
          padding: 1rem;
        }
        .survey-right {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
      `}</style>
    </>
  );
}
