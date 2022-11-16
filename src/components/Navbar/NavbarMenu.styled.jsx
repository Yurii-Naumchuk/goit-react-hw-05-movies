import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  margin-right: 20px;
  list-style-type: none;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 7px 17px;
  font-size: 1rem;
  font-weight: 500;
  line-height: normal;
  color: #2e2c2c;
  transition: all 0.2s ease-in-out;
  &.active {
    color: #053d53;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #67d94e;
  }
`;
