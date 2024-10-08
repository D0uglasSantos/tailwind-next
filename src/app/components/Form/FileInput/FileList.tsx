"use client";

import { useFileInput } from "./Root";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import FileItem from "./FileItem";

const FileList = () => {
  const { files } = useFileInput();
  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state="complete"
          />
        );
      })}
    </div>
  );
};

export default FileList;
