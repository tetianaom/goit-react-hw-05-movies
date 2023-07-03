import { HiArrowLeft } from 'react-icons/hi';
import { BackLinkStyled } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <BackLinkStyled to={to}>
      <HiArrowLeft size="24" />
      {children}
    </BackLinkStyled>
  );
};
