import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
const Container = styled.div`
  width: 200px;

  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: relative;
  top: 0;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 10px;
  }
`;

const Wrapper = styled.div`
  padding: 10px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;
  font-weight: bold;
  cursor: pointer;
`;

const Image = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: grey;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  cursor: pointer;
  padding: 7.5px 0;
`;

const Login = styled.div`
  display: block;
`;

const Text = styled.h4`
  font-weight: 400;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <Image />
            Video Stream
          </Logo>
          <Item>
            {/* <HomeIcon /> */}
            Home
          </Item>
          <Item>Explore</Item>
          <Item>Subscriptions</Item>
          <Hr />
          <Item>Library</Item>
          <Item>History</Item>
          <Hr />
          <Login>
            <Text> Sign in to like the videos.</Text>
            <Button>SIGN IN</Button>
          </Login>
          <Hr />
          <Title>BEST OF VIDEOS</Title>
          <Item>Your Videos</Item>
          <Item>Music</Item>
          <Item>Sports</Item>
          <Item>Movies</Item>
          <Item>News</Item>
          <Item>Live</Item>
          <Hr />
          <Item>Settings</Item>
          <Item>Report</Item>
          <Item>Help</Item>
          <Item onClick={() => setDarkMode(!darkMode)}>Light mode</Item>
        </Wrapper>
      </Container>
    </>
  );
};

export default Menu;
