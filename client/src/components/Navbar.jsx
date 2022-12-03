import { Link } from "react-router-dom";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px;
`;
const Search = styled.div`
  flex: 7;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  width: 30%;
  padding: 5px 15px;

  border-radius: 3px;
  outline: none;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
  display:flex;
  align-items:center;
  gap:5px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Enter to search ..." />
          <SearchOutlinedIcon/>
        </Search>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
