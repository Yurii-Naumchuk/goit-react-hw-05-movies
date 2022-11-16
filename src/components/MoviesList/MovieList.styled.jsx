import styled from 'styled-components';

export const ThumbPoster = styled.ul`
  display: flex;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 16px;
  margin-top: 40px;
  padding-bottom: 24px;
`;
export const PosterList = styled.li`
  box-shadow: 0 4px 3px -4px lightblue;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:focus {
    scale: 1.03;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #105109;
  ${PosterList}:hover &,
  ${PosterList}:focus & {
    color: #4f0590;
  }
`;
export const PosterMovies = styled.img`
  width: 240px;
`;
