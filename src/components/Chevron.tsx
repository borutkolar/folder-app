import { FC } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import styled, { css } from "styled-components";

interface ChevronProps {
  isOpened: boolean;
}

const Chevron: FC<ChevronProps> = ({ isOpened }) => {
  if (isOpened) {
    return <Styled.ChevronDown />;
  }

  return <Styled.ChevronRight />;
};

export default Chevron;

const sharedStyle = css`
  width: 0.9rem;
  height: 0.9rem;
  margin-right: 0.3rem;
  color: grey;
`;

const Styled = {
  ChevronRight: styled(FaChevronRight)`
    ${sharedStyle}
  `,
  ChevronDown: styled(FaChevronDown)`
    ${sharedStyle}
  `,
};
