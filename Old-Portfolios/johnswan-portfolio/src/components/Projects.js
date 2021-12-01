import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
// import { ImLocation } from "react-icons/im"

const Projects = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getProjects(data) {
    const projectsArray = []
    data.allProjectsJson.edges.forEach((item, index) => {
      projectsArray.push(
        <ProjectCard key={index}>
          <ProjectImg
            src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProjectInfo>
            <TextWrap>
              <ProjectTitle>{item.node.name}</ProjectTitle>
            </TextWrap>
            <Button
              to="/projects"
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button>
          </ProjectInfo>
        </ProjectCard>
      )
    })
    return projectsArray
  }

  return (
    <ProjectsContainer>
      <ProjectsHeading>{heading}</ProjectsHeading>
      <ProjectWrapper>{getProjects(data)}</ProjectWrapper>
    </ProjectsContainer>
  )
}

export default Projects

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background-color: #fff;
`
const ProjectsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #2c3531;
`
const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  transition: 0.2s ease;
`

const ProjectImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(50%);
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  cursor: default;

  @media screen and (max-width: 480px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 300px;
  color: #fff;
`

const ProjectTitle = styled.div`
  font-width: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
