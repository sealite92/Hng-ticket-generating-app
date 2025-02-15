"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { FormEvent, useState } from "react";
import { CldImage } from "next-cloudinary";
import { AvatarUploader } from "@/components/avatar-uploader";
import { useRouter } from "next/navigation";
import { useTicketContext } from "@/store/ticket-context";

export function AttendeeDetails() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const { handleSetAttendeeDetails, handleSetBookingStep } = useTicketContext();

  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    handleSetAttendeeDetails({
      avatarUrl: imageUrl,
      name,
      email,
      message,
    });

    handleSetBookingStep({
      totalSteps: 3,
      currentStep: 3,
      stepTitle: "Review and Confirm",
    });

    router.push("/ticket-ready");
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <form className="flex flex-col gap-5 mt-5" onSubmit={handleSubmit}>
      <div>
        <h2>Upload an Avatar</h2>
        <AvatarUploader onImageUpload={(url) => setImageUrl(url)} />
        {/*{imageUrl && <Image src={imageUrl} alt="Uploaded Avatar" width={200} height={100} />}*/}
      </div>

      <div className="grid w-full gap-1.5">
        <Label htmlFor="firstName"> Enter name</Label>
        <Input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          id="name"
          placeholder="First Name"
        />
      </div>

      <div className="grid w-full gap-1.5">
        <Label htmlFor="email">Enter your Email</Label>
        <Input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your email here."
          id="email"
        />
      </div>

      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">About the project</Label>
        <Textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here."
          id="message"
        />
      </div>
      <div className="mt-5 flex flex-col md:flex-row gap-3 ">
        <Button type="submit" variant="default">
          Next
        </Button>
        <Button
          onClick={handleBack}
          type="reset"
          variant="outline"
          className="bg-backgroundLight"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export function ImageUploader() {
  return (
    <CldImage
      src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
      width="500" // Transform the image: auto-crop to square aspect_ratio
      height="500"
      alt="user image"
      crop={{
        type: "auto",
        source: true,
      }}
    />
  );
}
