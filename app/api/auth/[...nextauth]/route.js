import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@/lib/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Parolă", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await prisma.utilizatori.findUnique({
          where: { email: credentials.email },
          include: {
            roluri: true,
            departamente: true,
          },
        });
        if (!user) return null;
        const isValid = await bcrypt.compare(credentials.password, user.password_hash);
        if (!isValid) return null;
        return {
          id: user.id,
          email: user.email,
          nume: user.nume,
          rol: user.roluri?.nume || null,
          departament: user.departamente?.nume || null,
          rol_id: user.rol_id,
          departament_id: user.departament_id,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 8, // 8 ore
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.rol = user.rol;
        token.departament = user.departament;
        token.rol_id = user.rol_id;
        token.departament_id = user.departament_id;
        token.nume = user.nume;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.rol = token.rol;
        session.user.departament = token.departament;
        session.user.rol_id = token.rol_id;
        session.user.departament_id = token.departament_id;
        session.user.nume = token.nume;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };