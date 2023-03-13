import React from "react";
import classes from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container fluid>
        <Row>
          <Col>
            <div style={{ color: "#fff" }}>
              Copyright © Sunil Bishnoi @ 2023
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
