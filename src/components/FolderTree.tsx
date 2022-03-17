import { FC, Fragment } from "react";
import { FolderEntry } from "../types";
import Folder from "./Folder";

interface FolderTreeProps {
  data: FolderEntry[];
}

const FolderTree: FC<FolderTreeProps> = ({ data }) => {
  const generateFolderEntry = ({ name, content }: FolderEntry) => (
    <Folder name={name}>
      {content.map((item, index) => {
        const { newName, newContent } = getNewNameAndContent(item);

        return (
          <Fragment key={index}>
            {generateFolderEntry({ name: newName, content: newContent })}
          </Fragment>
        );
      })}
    </Folder>
  );

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{generateFolderEntry(item)}</div>
      ))}
    </div>
  );
};

export default FolderTree;

const getNewNameAndContent = (item: string) => {
  const contentWithoutName = item.split("/").slice(1);
  const newName = contentWithoutName[0];
  const newContent =
    contentWithoutName.length === 1 ? [] : [contentWithoutName.join("/")];

  return { newName, newContent };
};
