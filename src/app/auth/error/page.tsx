"use client";
import React from "react";
import { useRouter } from "next/router";

const page = () => {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div>
      <h1>Error during Sign-In</h1>
      <p>{error ? error : "An unexpected error occurred. Please try again."}</p>
      <a href="/login">Go back to login</a>
    </div>
  );
};

export default page;
