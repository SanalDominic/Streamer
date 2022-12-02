import styled from "styled-components";
const Container = styled.div`
background-color:${({ theme }) => theme.bgLighter};`;
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

  border-radius:3px;
  outline:none;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Enter to search ..." />
        </Search>
        <Button>SIGN IN</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
