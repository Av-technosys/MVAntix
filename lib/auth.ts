import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const fixedId = process.env.FIXED_LOGIN_ID ?? "admin";
const fixedPassword = process.env.FIXED_LOGIN_PASSWORD ?? "admin123";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: { label: "ID", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const id = credentials.id?.toString();
        const password = credentials.password?.toString();
        if (id === fixedId && password === fixedPassword) {
          return { id: "fixed-user", name: "Fixed User" };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};
