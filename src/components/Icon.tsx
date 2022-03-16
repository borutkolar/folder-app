import { FC } from "react";
import { AiOutlineFile } from "react-icons/ai";
import { BsFolderFill } from "react-icons/bs";
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
  margin-right: 0.5rem;
`;

const Styled = {
  File: styled(AiOutlineFile)`
    ${sharedStyle}
  `,
  Folder: styled(BsFolderFill)`
    ${sharedStyle}
  `,
};
