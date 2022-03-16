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
      {children && isOpened && (
        <Styled.Children>
          {children}
          <Styled.VerticalLine />
        </Styled.Children>
      )}
    </div>
  );
};

export default Folder;

const Styled = {
  NameWrapper: styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1rem;
  `,
  Name: styled.span`
    color: #4682b4;
    font-size: 1rem;
    font-weight: 400;
  `,
  Children: styled.div`
    position: relative;
    padding-left: 1.4rem;
  `,
  VerticalLine: styled.div`
    position: absolute;
    top: -0.25rem;
    bottom: -0.25rem;
    left: 0.45rem;
    width: 1px;
    background-color: #c0c0c0;
  `,
};
