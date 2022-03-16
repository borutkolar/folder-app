import { FC, Fragment } from "react";
import { FolderEntry } from "../types";
import Folder from "./Folder";

interface FolderTreeProps {
  data: FolderEntry[];
}

const FolderTree: FC<FolderTreeProps> = ({ data }) => {
  const generateFolderEntry = (folderEntry: FolderEntry) => {
    return (
      <Folder name={folderEntry.name}>
        {folderEntry.content.map((item, index) => {
          const contentWithoutName = item.split("/").slice(1);
          const newName = contentWithoutName[0];
          const newContent =
            contentWithoutName.length === 1
              ? []
              : [contentWithoutName.join("/")];

          return (
            <Fragment key={index}>
              {generateFolderEntry({ name: newName, content: newContent })}
            </Fragment>
          );
        })}
      </Folder>
    );
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{generateFolderEntry(item)}</div>
      ))}
    </div>
  );
};

export default FolderTree;
