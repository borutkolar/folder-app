import { FC } from "react";
import { AiOutlineFile } from "react-icons/ai";
import { FcFolder } from "react-icons/fc";
import styled, { css } from "styled-components";

interface IconProps {
  isFile: boolean;
}

const Icon: FC<IconProps> = ({ isFile }) => {
  if (isFile) {
    return <Styled.File />;
  }

  return <Styled.Folder />;
};

export default Icon;

const sharedStyle = css`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.6rem;
`;

const Styled = {
  File: styled(AiOutlineFile)`
    ${sharedStyle}

    color: #4682b4;
  `,
  Folder: styled(FcFolder)`
    ${sharedStyle}
  `,
};
