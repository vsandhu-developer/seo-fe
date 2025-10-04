"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Onboarding() {
  const router = useRouter();
  const { data: session } = useSession();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const userId = session?.user?.id;

  console.log(userId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/llm/account-setup",
        {
          websiteUrl: url,
          userId: userId,
        }
      );

      const data = await response.data;
      if (response.status === 200) {
        setMessage("Website submitted successfully!");
        router.replace("/dashboard/business-settings");
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (err) {
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Onboarding</h1>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="url"
          placeholder="Enter your website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="border rounded-lg p-2 w-80"
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
