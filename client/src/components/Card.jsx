import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  margin-bottom: 15px;
`;

const Details = styled.div`
  display: flex;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.textSoft};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://learnopencv.com/wp-content/uploads/2021/04/image-15.png" />
        <Details>
          <ChannelImage src="https://static.rfstat.com/renderforest/images/v2/landing-pics/youtube-logo/card-4.jpg"></ChannelImage>
          <Texts>
            <Title>This is the title</Title>
            <ChannelName>Channel name</ChannelName>
            <Info>This is info</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
