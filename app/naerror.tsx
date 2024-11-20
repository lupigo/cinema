"use client";

import { useEffect, useState } from "react";

// Custom error component
export default function ErrorPage() {
  const [errorMessage, setErrorMessage] = useState<string>(
    "Something went wrong"
  );

  useEffect(() => {
    // If the error message is passed from the server or client, you can set it
    const error =
      window?.__NEXT_DATA__?.props?.pageProps?.error || "Unknown error";
    setErrorMessage(error);
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ color: "red" }}>Oops! Something went wrong.</h1>
      <p>{errorMessage}</p>
      <a href="/" style={{ color: "#0070f3", textDecoration: "none" }}>
        Go back to home
      </a>
    </div>
  );
}
