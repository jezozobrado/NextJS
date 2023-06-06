"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    console.log("submitted");
    setSubmitting(true);

    axios
      .post("/api/prompt/new", {
        prompt: post.prompt,
        userId: session?.user.id,
        tag: post.tag,
      })
      .then((res) => {
        setSubmitting(false);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  //     try {
  //       const response = await fetch("/api/prompt/new", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           prompt: post.prompt,
  //           userId: session?.user.id,
  //           tag: post.tag,
  //         }),
  //       });

  //       if (response.ok) {
  //         router.push("/");
  //       } else {
  //         console.log("lool");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setSubmitting(false);
  //     }
  //   };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
