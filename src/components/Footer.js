import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./footer_styles/FooterElements";


  const Footer = () => {

    return (
        <Box>
            <h1 style={{ 
                   fontFamily:'Yellowtail',
                   color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
       Adventure To Parenthood
      </h1>
            <Container>
                <Row>
                <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Mission</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Find a Match</FooterLink>
            <FooterLink href="#">Join Our Community</FooterLink>
            <FooterLink href="#">Talk to an Expert</FooterLink>
            <FooterLink href="#">Referral Program</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Email</FooterLink>
            <FooterLink href="#">Tell us About You!</FooterLink>
            <FooterLink href="#">Local Resources</FooterLink>
            <FooterLink href="#">Make a Suggestion</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
                </Row>
            </Container>
        </Box>

    );
  }

  export default Footer;