import React from "react";
import styled from "styled-components";

const SkillsSection = () => {
  return (
    <SkillsSectionContainer>
      <SkillsSectionWrapper>
        <p>Skills 💪</p>
        <h2>
          In my journey of programmig I have been able to pickup a few skills on
          the way:
        </h2>
        <SkillsWrapper>
          <Skill>
            <SkillCount>01</SkillCount>
            <SkillName>Html5</SkillName>
          </Skill>
          <Skill>
            <SkillCount>02</SkillCount>
            <SkillName>Css3</SkillName>
          </Skill>
          <Skill>
            <SkillCount>03</SkillCount>
            <SkillName>Javascript</SkillName>
          </Skill>
          <Skill>
            <SkillCount>04</SkillCount>
            <SkillName>ReactJs</SkillName>
          </Skill>
          <Skill>
            <SkillCount>05</SkillCount>
            <SkillName>NodeJs</SkillName>
          </Skill>
          <Skill>
            <SkillCount>06</SkillCount>
            <SkillName>ExpressJs</SkillName>
          </Skill>
          <Skill>
            <SkillCount>07</SkillCount>
            <SkillName>MongoDB</SkillName>
          </Skill>
          <Skill>
            <SkillCount>08</SkillCount>
            <SkillName>MySql</SkillName>
          </Skill>
          <Skill>
            <SkillCount>09</SkillCount>
            <SkillName>Git</SkillName>
          </Skill>
          <Skill>
            <SkillCount>10</SkillCount>
            <SkillName>Github</SkillName>
          </Skill>
          <Skill>
            <SkillCount>11</SkillCount>
            <SkillName>Firebase</SkillName>
          </Skill>
          <Skill>
            <SkillCount>12</SkillCount>
            <SkillName>Linux</SkillName>
          </Skill>
          <Skill>
            <SkillCount>13</SkillCount>
            <SkillName>REST</SkillName>
          </Skill>
          <Skill>
            <SkillCount>14</SkillCount>
            <SkillName>JSON</SkillName>
          </Skill>
          <Skill>
            <SkillCount>15</SkillCount>
            <SkillName>C++</SkillName>
          </Skill>
          <Skill>
            <SkillCount>16</SkillCount>
            <SkillName>Python</SkillName>
          </Skill>
          <Skill>
            <SkillCount>17</SkillCount>
            <SkillName>Bootstrap</SkillName>
          </Skill>
          <Skill>
            <SkillCount>18</SkillCount>
            <SkillName>Tailwind</SkillName>
          </Skill>
          <Skill>
            <SkillCount>19</SkillCount>
            <SkillName>MaterialUI</SkillName>
          </Skill>
          <Skill>
            <SkillCount>20</SkillCount>
            <SkillName>Figma</SkillName>
          </Skill>
        </SkillsWrapper>
        <MoreButton>More on the way...</MoreButton>
      </SkillsSectionWrapper>
    </SkillsSectionContainer>
  );
};

export default SkillsSection;

const SkillsSectionContainer = styled.div`
  height: auto;
  background-color: #050505;
  padding: 20px 0px;
`;
const SkillsSectionWrapper = styled.div`
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
`;
const SkillsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const Skill = styled.div`
  display: flex;
  margin-top: 3vh;
  margin-right: 1vw;
`;
const SkillCount = styled.div`
  background-color: #e6af2e;
  width: 30px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 50px;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 22px;
  display: grid;
  place-items: center;
`;
const SkillName = styled.div`
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 700;
  background-color: #3d348b;
  border: 1px solid #dad8d8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  min-width: 150px;
  display: grid;
  place-items: center;
  color: #fff;
  min-height: 60px;
`;

const MoreButton = styled.div`
  font-family: "Poppins";
  font-weight: 700;
  background-color: #e6af2e;
  width: fit-content;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 3vh;
`;
