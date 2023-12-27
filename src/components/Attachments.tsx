"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FileCheck, Paperclip, Plus, Trash2 } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { FileState, MultiFileDropzone } from "./MultiFileDropzone";
import { useEdgeStore } from "@/lib/edgestore";

interface AttachmentsModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Attachments() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="mb-2 flex items-center gap-2 ">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-primary">
          <Paperclip className="h-3.5 w-3.5" />
          Attachments
        </p>
        <Button size="xs" onClick={() => setOpen(true)} variant="secondary">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-5 rounded-md border-2 border-solid border-input p-1.5">
          <p className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
            <FileCheck className="h-4 w-4" />
            Brand.pdf
          </p>
          <Trash2 className="h-3 w-3 cursor-pointer text-destructive" />
        </div>

        <div className="flex items-center gap-5 rounded-md border-2 border-solid border-input p-1.5">
          <p className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
            <FileCheck className="h-4 w-4" />
            Brand.pdf
          </p>
          <Trash2 className="h-3 w-3 cursor-pointer text-destructive" />
        </div>
      </div>
      <Attachments.Modal open={open} setOpen={setOpen} />
    </>
  );
}

Attachments.Modal = ({ open, setOpen }: AttachmentsModalProps) => {
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();

  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key,
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add one or more attachments</DialogTitle>
        </DialogHeader>
        <MultiFileDropzone
          value={fileStates}
          onChange={(files) => {
            setFileStates(files);
          }}
          onFilesAdded={async (addedFiles) => {
            setFileStates([...fileStates, ...addedFiles]);
            await Promise.all(
              addedFiles.map(async (addedFileState) => {
                try {
                  const res = await edgestore.publicFiles.upload({
                    file: addedFileState.file,
                    onProgressChange: async (progress) => {
                      updateFileProgress(addedFileState.key, progress);
                      if (progress === 100) {
                        // wait 1 second to set it to complete
                        // so that the user can see the progress bar at 100%
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000),
                        );
                        updateFileProgress(addedFileState.key, "COMPLETE");
                      }
                    },
                  });
                  console.log(res);
                } catch (err) {
                  updateFileProgress(addedFileState.key, "ERROR");
                }
              }),
            );
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
