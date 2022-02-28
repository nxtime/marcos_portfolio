import styled from "styled-components";
import { Icon } from '@iconify/react';


const FirstSection = styled.div`
  width: 100%;
  background-color: #0000ff;
  height: 100%;
`;

const SecondSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  height: 100%;
  background-color: #00ff00;
`;
const DivideSections = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.h2`
padding-inline: 2rem;
margin-inline: auto;
  font-size: 84pt;
`;

const Subtitle = styled.h5`
padding-inline: 2rem;
display: block;
margin-inline: auto;
  font-size: 24pt;
`;

const Options = styled.div`
    display: flex;
    gap: .5rem;
    margin-top: 1rem;
    font-size: 24pt;
    & svg {
        transition: all ease .5s;
        cursor: pointer;
    }
    & svg:nth-child(1):hover {
        color: #399fc4;
    }
    & svg:nth-child(2):hover {
        color: #e3c714;
    }
    & svg:nth-child(3):hover {
        color: #1467e3
    }
    & svg:nth-child(4):hover {
        color: #cf3f0a
    }
`

const Banner = () => {
  return (
    <DivideSections>
      <FirstSection></FirstSection>
      <SecondSection style={{}}>
        <Title>
          Hello<span>!</span> <br/> I am Marcos
        </Title>
        <Subtitle>
            A developer
            <Icon icon="bxs:right-arrow" style={{transform: 'translate(4px, 3px)', fontSize: '16pt'}}/>
        </Subtitle>
        <Options>
            <Icon icon="akar-icons:react-fill" />
            <Icon icon="akar-icons:javascript-fill" />
            <Icon icon="akar-icons:css-fill" />
            <Icon icon="akar-icons:html-fill" />
        </Options>
      </SecondSection>
    </DivideSections>
  );
};

export default Banner;
