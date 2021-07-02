import React from "react";
import styled from "styled-components";

const ContactSection = () => {
  return (
    <ContactContainer>
      <ContactIllustration></ContactIllustration>
      <MoveToTop>
        {" "}
        <a href="#nav-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z" />
          </svg>
        </a>{" "}
      </MoveToTop>
      <ContactSectionWrapper>
        <p>Contact 😊</p>
        <h2>Get in touch</h2>
        <h3>Let's build your next big project together.</h3>

        <MailPart>
          ✉️ Mail me at:
          <p>nithinchowdary0705@gmail.com</p>
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
  }
  & > h2 {
    font-size: 46px;
    font-family: "Poppins";
    font-weight: 700;
    color: #fff;
  }
  & > h3 {
    font-size: 46px;
    font-family: "Poppins";
    font-weight: 700;
    color: #e6af2e;
  }
`;
const MailPart = styled.div`
  font-family: "Poppins";
  font-weight: 700;
  color: #fff;
  font-size: 24px;
  & > p {
    color: #0676b6;
  }
`;

const ContactSocialContainer = styled.div`
  font-family: "Poppins";
  font-weight: 700;
  color: #fff;
  font-size: 24px;
  margin-top: 1vh;
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
`;

const ContactIllustration = styled.div`
  height: 400px;
  width: 400px;
  background: linear-gradient(225.9deg, #e6af2e 17.52%, #3d348b 80.83%);
  border-radius: 50%;
  position: absolute;
  top: -20vh;
  right: -5vw;
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
