import axios from "axios";
import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await axios.post(
            "http://localhost:3001/api/v1/auth/login",
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          if (response.status === 400) {
            return null;
          }

          const { user } = response.data;

          if (user && user.id) {
            return user as User;
          }

          return null;
        } catch (error) {
          console.error("API Error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
