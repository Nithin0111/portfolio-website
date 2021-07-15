import React from "react";
import styled from "styled-components";

const ProjectsSection = () => {
  const handleLiveClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <SectionWrapper id="projects">
      <ProjectIllustration></ProjectIllustration>
      <ProjectsSectioWrapper>
        <p>Time to judge me 😂</p>
        <h2>Projects that helped me learn:</h2>
        <ProjectsWrapper>
          <Project>
            <ProjectCount>01</ProjectCount>
            <ProjectTitle>Whatsapp web clone</ProjectTitle>
            <ProjectDescription>
              Created a clone of whatsapp using reactjs,react-router and
              firebase as a backend.With functionality of signing in with google
              adding rooms live chatting using firebase realtime database. All
              crud operations are implemented.
            </ProjectDescription>
            <ProjectCtaWrapper>
              <LiveButton
                onClick={() =>
                  handleLiveClick("https://whatsapp-clone-def73.web.app/")
                }
              >
                Live version{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
                </svg>
              </LiveButton>
              <SourceButton
                onClick={() =>
                  handleLiveClick(
                    "https://github.com/Nithin0111/whatsapp-clone-with-firebase"
                  )
                }
              >
                Source code{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
                </svg>
              </SourceButton>
            </ProjectCtaWrapper>
          </Project>
          <Project>
            <ProjectCount>02</ProjectCount>
            <ProjectTitle>Linkedin Clone</ProjectTitle>
            <ProjectDescription>
              Created a clone of likedin using reactjs,react-router,redux and
              firebase.It has a functionality of signin,signout, creating a post
              using images and for youtube videos link embedded using
              reactplayer
            </ProjectDescription>
            <ProjectCtaWrapper>
              <LiveButton
                onClick={() =>
                  handleLiveClick("https://linkedin-clone-aeccb.web.app/")
                }
              >
                Live version{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
                </svg>
              </LiveButton>
              <SourceButton
                onClick={() =>
                  handleLiveClick(
                    "https://github.com/Nithin0111/linkedin-clone"
                  )
                }
              >
                Source code{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
                </svg>
              </SourceButton>
            </ProjectCtaWrapper>
          </Project>
          <Project>
            <ProjectCount>03</ProjectCount>
            <ProjectTitle>Password manager</ProjectTitle>
            <ProjectDescription>
              Created a password manager using reactjs,redux and firebase to
              store passwords notes uses aes encryption.Has a functionality of
              generating a password saving password in database and also has a
              chrome extension for ease of use.
            </ProjectDescription>
            <ProjectCtaWrapper>
              <LiveButton
                onClick={() =>
                  handleLiveClick("https://nsp-pwd-manager.web.app/")
                }
              >
                Live version{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
                </svg>
              </LiveButton>
              <SourceButton
                onClick={() =>
                  handleLiveClick(
                    "https://github.com/Nithin0111/password-manager"
                  )
                }
              >
                Source code{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
                </svg>
              </SourceButton>
            </ProjectCtaWrapper>
          </Project>
          <Project>
            <ProjectCount>04</ProjectCount>
            <ProjectTitle>Pwd manager extension</ProjectTitle>
            <ProjectDescription>
              A chrome extension to support password manager application built
              using Javascript and chrome apis.It has a functionality of showing
              an icon at the password field and helps is generating password and
              user can copy password or fill password.It uses to local storage
              api to save copied passowrds.
            </ProjectDescription>
            <ProjectCtaWrapper>
              <LiveButton
                onClick={() =>
                  handleLiveClick(
                    "https://github.com/Nithin0111/PasswordManager-chrome-extension"
                  )
                }
              >
                Live version{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
                </svg>
              </LiveButton>
              <SourceButton
                onClick={() =>
                  handleLiveClick(
                    "https://github.com/Nithin0111/PasswordManager-chrome-extension"
                  )
                }
              >
                Source code{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
                </svg>
              </SourceButton>
            </ProjectCtaWrapper>
          </Project>
          <Project>
            <ProjectCount>05</ProjectCount>
            <ProjectTitle>Github user search app</ProjectTitle>
            <ProjectDescription>
              Created a github user search app using github api,reacjs and
              firebase for authentication created this project when learning
              reactjs. Has a functionality of searching any user in github and
              display their information and their repos information.
            </ProjectDescription>
            <ProjectCtaWrapper>
              <LiveButton
                onClick={() =>
                  handleLiveClick("https://github.com/Nithin0111/git-search")
                }
              >
                Live version{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
                </svg>
              </LiveButton>
              <SourceButton
                onClick={() =>
                  handleLiveClick("https://github.com/Nithin0111/git-search")
                }
              >
                Source code{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
                </svg>
              </SourceButton>
            </ProjectCtaWrapper>
          </Project>

          <Project>
            <ProjectCount>06</ProjectCount>
            <ProjectTitle>Music player app</ProjectTitle>
            <ProjectDescription>
              Created a music player using nodejs,expressjs,mongodb and gridfs.
              It has a functionality of uploading music to mongodb database and
              show it in the form of list of music and can play the songs.Used
              gridfs to store the songs as we cannot directly store songs in
              mongo.
            </ProjectDescription>
            <ProjectCtaWrapper>
              <LiveButton
                onClick={() =>
                  handleLiveClick("https://github.com/Nithin0111/Music-App")
                }
              >
                Live version{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
                </svg>
              </LiveButton>
              <SourceButton
                onClick={() =>
                  handleLiveClick("https://github.com/Nithin0111/Music-App")
                }
              >
                Source code{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
                </svg>
              </SourceButton>
            </ProjectCtaWrapper>
          </Project>
        </ProjectsWrapper>
        <GithubButton
          onClick={() => handleLiveClick("https://github.com/Nithin0111/")}
        >
          View more on github{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
          </svg>
        </GithubButton>
      </ProjectsSectioWrapper>
    </SectionWrapper>
  );
};

export default ProjectsSection;

const SectionWrapper = styled.div`
  height: auto;
  background-color: #050505;
  padding: 20px 0px;
  position: relative;
  overflow: hidden;
`;

const ProjectsSectioWrapper = styled.div`
  width: 90%;
  margin: auto;
  & > p {
    font-family: "Mulish";
    font-size: 22px;
    color: #e6af2e;
    font-weight: 700;
    margin-top: 10px;
    @media (max-width: 450px) {
      font-size: 16px;
    }
  }
  & > h2 {
    font-family: "Poppins";
    font-size: 46px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 450px) {
      font-size: 28px;
    }
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1vh;
`;

const Project = styled.div`
  background-color: #040211;
  width: 30%;
  border: 2px solid #646464;
  position: relative;
  padding: 40px 2vw;
  margin-top: 3vh;
  min-height: 300px;
  @media (max-width: 450px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 1220px) and (min-width: 820px) {
    width: 45%;
  }

  @media (max-width: 820px) and (min-width: 450px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ProjectCount = styled.div`
  position: absolute;
  top: 0;
  left: 2vw;
  height: 50px;
  width: 35px;
  background-color: #e6af2e;
  text-align: center;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 670px) {
    left: 5vw;
  }
`;
const ProjectTitle = styled.h3`
  font-family: "Poppins";
  font-weight: 700;
  color: #fff;
  font-size: 32px;
  padding: 20px 0px;
  @media (max-width: 670px) {
    font-size: 24px;
    padding: 20px 10px;
  }
`;
const ProjectDescription = styled.p`
  color: #969191;
  padding-bottom: 30px;
  font-family: "Mulish";
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  @media (max-width: 670px) {
    font-size: 16px;
    padding: 0px 10px;
  }
`;
const ProjectCtaWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;
const LiveButton = styled.div`
  background-color: #ffe9b5;
  padding: 12px 24px;
  border-radius: 5px;
  font-family: "Poppins";
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;
  & > svg {
    fill: #3d348b;
    margin-left: 0.2vw;
  }
  margin-right: 10px;
  @media (max-width: 670px) {
    font-size: 14px;
    padding: 8px 16px;
    margin-left: 10px;
    margin-top: 3vh;
  }
`;
const SourceButton = styled(LiveButton)`
  background-color: #3d348b;
  color: #fff;
  & > svg {
    fill: #e6af2e;
  }
`;

const GithubButton = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 10px 24px;
  background-color: #e6af2e;
  font-family: "Poppins";
  font-weight: 700;
  margin-top: 4vh;
  border-radius: 3px;
  & > svg {
    margin-left: 10px;
  }
`;

const ProjectIllustration = styled.div`
  position: absolute;
  width: 418px;
  height: 490.7px;
  right: -3vw;
  bottom: -20vh;
  background: linear-gradient(178.63deg, #e6af2e 13.66%, #3d348b 73.06%);
  transform: rotate(-69.59deg);
`;
