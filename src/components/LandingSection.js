import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const LandingSection = () => {
  return (
    <Landing id="landing-section">
      <LandingBigCircleIllustration></LandingBigCircleIllustration>
      <LandingSmallCircle></LandingSmallCircle>
      <Stripe1></Stripe1>
      <Stripe2></Stripe2>
      <Stripe3></Stripe3>
      <SourceBar>
        Source on <img src="/images/github.png" alt="Github Icon" />
      </SourceBar>
      <LandingWrapper>
        <HeroTextWrapper>
          <h1>
            👋 Hello, My name is nithin. <br /> I am a programmer.{" "}
          </h1>
          <p>
            I am a full stack developer in the process of learning a bit
            everyday through the projects I build. I love to build stuff on the
            web.
          </p>
          <SocialWrapper>
            <h3>Can be found at:</h3>
            <SocialIcons>
              <a
                href="https://www.github.com/nithin0111"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/github-icon.svg" alt="Github Icon" />
              </a>
              <a
                href="https://www.twitter.com/nithin7557"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/twitter-icon.svg" alt="Twitter Icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/nithin-harsha-u-165ba4136/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/linkedin-icon.svg" alt="Linkedin-Icon" />
              </a>
            </SocialIcons>
          </SocialWrapper>
          <CtaWrapper>
            <Link to="projects" smooth={true} duration={1000}>
              <ProjectsButton>
                Projects
                <img src="/images/arrow-icon.svg" alt="Arrow Icon" />
              </ProjectsButton>
            </Link>
            <ResumeButton>
              <img src="/images/download-icon.svg" alt="" />
              Resume(107kb)
            </ResumeButton>
          </CtaWrapper>
        </HeroTextWrapper>
        <HeroImage>
          <img src="/images/hero-img.svg" alt="" />
        </HeroImage>
      </LandingWrapper>
    </Landing>
  );
};

export default LandingSection;

const Landing = styled.div`
  height: auto;
  background-color: #050505;
  position: relative;
  overflow: hidden;
`;

const LandingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
  padding: 20px 0px;
`;
const HeroTextWrapper = styled.div`
  width: 40%;
  & > h1 {
    color: #fff;
    font-family: "Poppins";
    font-size: 48px;
    @media (max-width: 450px) {
      font-size: 32px;
      padding-top: 5vh;
    }
  }
  @media (max-width: 450px) {
    width: 90%;
    margin: auto;
  }
  @media (max-width: 1300px) and (min-width: 450px) {
    width: 90%;
    margin: auto;
  }
  & > p {
    color: #e0dddd;
    font-family: "Mulish";
    font-size: 24px;
    opacity: 0.7;
    font-weight: bold;
    line-height: 1.8;
    margin-top: 20px;
    @media (max-width: 450px) {
      font-size: 18px;
    }
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: fit-content;
  margin-top: 10px;
  & > h3 {
    color: #ffe9b5;
    font-family: "Poppins";
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
    @media (max-width: 450px) {
      font-size: 20px;
    }
  }
`;

const SocialIcons = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  & > img {
    margin-right: 10px;
  }
`;

const CtaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  margin-top: 4vh;
`;

const ProjectsButton = styled.div`
  padding: 10px 24px;
  background-color: #3d348b;
  color: #fff;
  font-family: "Poppins";
  font-size: 22px;
  font-weight: 600;
  border-radius: 7px;
  display: flex;
  align-items: center;

  cursor: pointer;
  & > img {
    margin-left: 10px;
  }
  @media (max-width: 450px) {
    padding: 5px 10px;
    font-size: 16px;
  }
`;

const ResumeButton = styled.div`
  padding: 10px 40px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  background-color: #e6af2e;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  margin-left: 1vw;
  & > img {
    margin-right: 10px;
  }
  @media (max-width: 450px) {
    padding: 5px 10px;
    font-size: 16px;
  }
`;

const HeroImage = styled.div`
  margin-right: 6vw;
  z-index: 1;
  padding-top: 5vh;
  & > img {
    max-width: 100%;
    min-width: 200px;
    height: auto;
  }
`;

const LandingBigCircleIllustration = styled.div`
  position: absolute;
  right: 25vw;
  bottom: 0;
  height: 423px;
  width: 423px;
  @media (max-width: 450px) {
    height: 300px;
    width: 300px;
    left: 0;
  }

  border-radius: 50%;
  background: linear-gradient(225.9deg, #e6af2e 17.52%, #3d348b 80.83%);
`;
const LandingSmallCircle = styled(LandingBigCircleIllustration)`
  bottom: 50vh;
  height: 150px;
  width: 150px;
  right: 25vw;
  @media (max-width: 450px) {
    height: 50px;
    width: 50px;
  }
`;
const Stripe1 = styled.div`
  height: 900px;
  width: 60px;
  position: absolute;
  bottom: -30vh;
  right: 0;
  background-color: white;
  transform: rotate(-50deg);
  @media (max-width: 450px) {
    width: 40px;
    height: 600px;
  }
`;
const Stripe2 = styled(Stripe1)`
  height: 800px;
  bottom: -40vh;
  background: #3d348b;
  @media (max-width: 450px) {
    width: 40px;
    height: 400px;
  }
`;
const Stripe3 = styled(Stripe1)`
  height: 700px;
  bottom: -50vh;
  background: #e6af2e;
`;

const SourceBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 4vh;
  left: -3vw;
  height: 40px;
  width: 300px;
  font-size: 24px;
  background-color: #23ce6b;
  font-family: "Poppins";
  font-weight: 700;
  transform: rotate(28deg);
  cursor: pointer;
  & > img {
    filter: invert(0);
    height: 25px;
    width: 25px;
    margin-left: 10px;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;
