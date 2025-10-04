"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function login(
  prevState: { error: string } | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/dashboard/onboarding",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password." };
        default:
          return { error: "An unknown error occurred." };
      }
    }
    throw error;
  }

  return { error: "" };
}
