import styled from '@emotion/styled';

export const MovieWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const MovieTitle = styled.h2`
  margin-top: 0;
`;

export const AdditionalList = styled.ul`
  line-height: 1.5;
  padding-left: 0;
  > a {
    display: block;
    color: black;
  }

  > a:visited {
    color: black;
  }
`;
