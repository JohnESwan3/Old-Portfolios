import React from "react"
import styled from "styled-components"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Web Development</HeroH1>
          <HeroP>Responsive, Reactive, Engaging</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
background: linear-gradient(301deg, #2c3531, #116466, #d1e8e2, #116466, #2c3531);
background-size: 1000% 1000%;

-webkit-animation: AnimationName 20s ease infinite;
-moz-animation: AnimationName 20s ease infinite;
-o-animation: AnimationName 20s ease infinite;
animation: AnimationName 20s ease infinite;


@-webkit-keyframes AnimationName {
0%{background-position:0% 24%}
50%{background-position:100% 77%}
100%{background-position:0% 24%}
}
@-moz-keyframes AnimationName {
0%{background-position:0% 24%}
50%{background-position:100% 77%}
100%{background-position:0% 24%}
}
@-o-keyframes AnimationName {
0%{background-position:0% 24%}
50%{background-position:100% 77%}
100%{background-position:0% 24%}
}
@keyframes AnimationName {
0%{background-position:0% 24%}
50%{background-position:100% 77%}
100%{background-position:0% 24%}
}
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
}
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc(100vw - 1300px) / 2;
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  font-weight: bold;
  cursor: default;
`

const HeroH1 = styled.h1`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;
  padding: 0 1rem;
  color: #d1e8e2;
`

const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 2.5rem);
  font-wieght: 400;
  color: #fff;

  &:hover: {
    color: #ffcb9a;
  }
`
