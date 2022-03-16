import { FC, PropsWithChildren, useState } from "react";
import styled from "styled-components";
import Chevron from "./Chevron";
import Icon from "./Icon";

const FILE_PATTERN = /^.*\.[^\\]+$/;

interface FolderProps {
  name: string;
}

const Folder: FC<PropsWithChildren<FolderProps>> = ({ children, name }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const isFile = FILE_PATTERN.test(name);

  return (
    <div>
      <Styled.NameWrapper
        onClick={() => setIsOpened((currentValue) => !currentValue)}
      >
        {!isFile && <Chevron isOpened={isOpened} />}
        <Icon isFile={isFile} />
        <Styled.Name>{name}</Styled.Name>
      </Styled.NameWrapper>
      {isOpened && <Styled.Children>{children}</Styled.Children>}
    </div>
  );
};

export default Folder;

const Styled = {
  NameWrapper: styled.div`
    display: flex;
    algin-items: center;
    cursor: pointer;
    margin-bottom: 1rem;
  `,
  Name: styled.span`
    font-size: 1rem;
    font-weight: 400;
  `,
  Children: styled.div`
    padding-left: 1.2rem;
  `,
};
