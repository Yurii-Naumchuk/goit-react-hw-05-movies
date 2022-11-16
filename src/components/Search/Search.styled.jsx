import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 30px;
`;
export const Form = styled.form`
  padding-top: 3px;
`;
export const Input = styled.input`
  height: 20px;
`;
export const Button = styled.button`
  padding: 5px 10px;
  margin-left: 5px;
  border-radius: 5px;
  border: 2px, solid;
  cursor: pointer;
  &:hover {
    color: #081f03;
    background-color: #c4e5f3;
  }
`;
