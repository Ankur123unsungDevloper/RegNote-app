"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader
} from "@/components/ui/dialog";
import { useCoverImage } from "@/hooks/use-cover-image";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { Button } from "@/components/ui/button";

interface CoverImageModalProps {
  url?: string;
}

export const CoverImageModal= ({
  url,
}: CoverImageModalProps) => {
  const params = useParams();
  const update = useMutation(api.documents.update);
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();
  
  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  const onClose = () => {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  }

  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmitting(true);
      setFile(file);

      const res = await edgestore.publicFiles.upload({
        file,
        options: {
          replaceTargetUrl: coverImage.url
        }
      });

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url
      });

      onClose();
    }
  }
  
  const onRemove = async () => {
    if (url) {
      await edgestore.publicFiles.delete({
        url: url,
      });
    }
  removeCoverImage({
    id: params.documentId as Id<"documents">
  });
};

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader className="flex flex-row border-b pb-2">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-row gap-1">
              <Button
                className="text-center text-sm font-semibold"
                variant="ghost"
                size="sm"
              >
                Upload
              </Button>
              <Button
                className="text-center text-sm font-semibold"
                variant="ghost"
                size="sm"
              >
                Unsplash
              </Button>
            </div>
            <div className="flex items-center gap-x-1">
              <Button
                onClick={onRemove}
                className="text-muted-foreground text-xs"
                variant="ghost"
                size="sm"
              >
                Remove
              </Button>
            </div>
            
          </div>
        </DialogHeader>
        <SingleImageDropzone
          className="w-full outline-none"
          disabled={isSubmitting}
          value={file}
          onChange={onChange}
          width={450}
          height={100}
        />
      </DialogContent>
    </Dialog>
  );
};
