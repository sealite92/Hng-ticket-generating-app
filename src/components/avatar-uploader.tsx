// components/avatar-uploader.tsx
"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button"; // Assuming you are using shadcn/ui

interface AvatarUploaderProps {
    onImageUpload: (url: string) => void; // Function to send image URL to parent
}

export function AvatarUploader({ onImageUpload }: AvatarUploaderProps) {

    const handleUpload = (res: any) => {
        const uploadedUrl = res.info.url;
        console.log(uploadedUrl);

        onImageUpload(uploadedUrl);
    };

    return (
        <CldUploadWidget onError={ () => {
            return
        } } uploadPreset="event-ticket" onSuccess={ (res) =>handleUpload(res)}>
            {({ open }) => (
                <Button className="w-full"
                    onClick={(e) => {
                        e.preventDefault();
                        open();
                    }}
                >
                    Upload an Image
                </Button>
            )}
        </CldUploadWidget>
    );
}
