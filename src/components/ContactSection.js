import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { animateScroll as scroll } from "react-scroll";

const ContactSection = () => {
  const [sentEmail, setSentEmail] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_448a26k",
        "template_44kb7pi",
        e.target,
        "user_xci6orbuqX5vafgCY46ha"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSentEmail(!sentEmail);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <ContactContainer id="contact">
      <ContactIllustration></ContactIllustration>
      <MoveToTop onClick={() => scroll.scrollToTop()}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z" />
        </svg>{" "}
      </MoveToTop>
      <ContactSectionWrapper>
        <p>Contact 😊</p>
        <h2>Get in touch</h2>
        <h3>Let's build your next big project together.</h3>

        <ContactWrapper>
          <ContactForm>
            <p>{sentEmail ? "Email Sent" : ""}</p>
            <form onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Name:" />
              <br />
              <input type="email" name="email" placeholder="Email:" />
              <br />
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Message:"
              />
              <br />
              <button type="submit">Submit</button>
            </form>
          </ContactForm>
          <ContactInfo>
            <MailPart>
              Alternatively ✉️ Mail me at:
              <p>
                {" "}
                <a href="mailto:developer.nithin01@gmail.com">
                  developer.nithin01@gmail.com
                </a>{" "}
              </p>
            </MailPart>

            <ContactSocialContainer>
              or else I am available here
              <ContactSocialWrapper>
                <img src="/images/github-icon.svg" alt="Github Icon" />
                <img src="/images/twitter-icon.svg" alt="Twitter Icon" />
                <img src="/images/linkedin-icon.svg" alt="Linkedin Icon" />
              </ContactSocialWrapper>
            </ContactSocialContainer>

            <FinalCta>Feel free to contact me on any medium 😊</FinalCta>
          </ContactInfo>
        </ContactWrapper>
      </ContactSectionWrapper>
    </ContactContainer>
  );
};

export default ContactSection;

const ContactContainer = styled.div`
  height: auto;
  background-color: #050505;
  padding: 20px 0px;
  position: relative;
  overflow: hidden;
`;
const ContactSectionWrapper = styled.div`
  width: 90%;
  margin: auto;
  & > p {
    color: #e6af2e;
    font-size: 22px;
    font-family: "Mulish";
    font-weight: 700;
    z-index: 1;
    @media (max-width: 450px) {
      position: relative;
      font-size: 16px;
    }
  }
  & > h2 {
    font-size: 46px;
    font-family: "Poppins";
    font-weight: 700;
    color: #fff;
    z-index: 1;
    @media (max-width: 450px) {
      position: relative;
      font-size: 32px;
    }
  }
  & > h3 {
    font-size: 46px;
    font-family: "Poppins";
    font-weight: 700;
    color: #e6af2e;
    z-index: 1;
    @media (max-width: 450px) {
      position: relative;
      font-size: 32px;
    }
  }
`;
const MailPart = styled.div`
  font-family: "Poppins";
  font-weight: 700;
  color: #fff;
  font-size: 24px;
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;

const ContactSocialContainer = styled.div`
  font-family: "Poppins";
  font-weight: 700;
  color: #fff;
  font-size: 24px;
  margin-top: 1vh;
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;

const ContactSocialWrapper = styled.div`
  display: flex;
  & > img {
    margin-right: 0.6vw;
  }
`;
const FinalCta = styled.div`
  font-family: "Poppins";
  font-weight: 700;
  color: #fff;
  font-size: 24px;
  margin-top: 2vh;
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;

const ContactIllustration = styled.div`
  height: 400px;
  width: 400px;
  background: linear-gradient(225.9deg, #e6af2e 17.52%, #3d348b 80.83%);
  border-radius: 50%;
  position: absolute;
  top: -20vh;
  right: -5vw;
  @media (max-width: 450px) {
    height: 200px;
    width: 200px;
    top: -15vh;
  }
`;
const MoveToTop = styled.div`
  background: #ffe9b5;
  height: 60px;
  width: 70px;
  border-radius: 5px;
  border: 1px solid #3d348b;
  position: absolute;
  bottom: 2vh;
  right: 5vw;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2vh;
`;
const ContactForm = styled.div`
  p {
    color: green;
    font-family: "Poppins";
    font-size: 22px;
    font-weight: bold;
  }
  input {
    height: 50px;
    max-width: 400px;
    background-color: #3d348b;
    border: 1px solid #fff;
    outline: none;
    margin-top: 1vh;
    font-family: "Poppins";
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    border-radius: 5px;
    @media (max-width: 670px) {
      max-width: 90vw;
    }
    &::placeholder {
      font-family: "Poppins";
      font-size: 20px;
      font-weight: 700;
      padding-left: 10px;
      color: #fff;
    }
  }

  textarea {
    max-width: 400px;
    background-color: #3d348b;
    outline: none;
    margin-top: 1vh;
    font-family: "Poppins";
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    @media (max-width: 670px) {
      max-width: 90vw;
    }
    &::placeholder {
      font-family: "Poppins";
      font-size: 20px;
      font-weight: 700;
      padding-left: 10px;
      color: #fff;
    }
  }

  button {
    margin-top: 1vh;
    padding: 8px 44px;
    background-color: #e6af2e;
    font-family: "Poppins";
    font-size: 20px;
    font-weight: 700;
    border: none;
    cursor: pointer;
  }
`;
const ContactInfo = styled.div`
  @media (max-width: 450px) {
    margin-top: 20px;
  }
`;
