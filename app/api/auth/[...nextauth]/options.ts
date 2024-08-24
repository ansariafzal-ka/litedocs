import { User } from "@/models/user.models";
import connectDb from "@/utils/database";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions, User as NextAuthUser } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async signIn({ user }: { user: NextAuthUser }) {
      try {
        await connectDb();
        const { name, email, image } = user;
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
          const newUser = await User.create({
            name: name,
            email: email,
            image: image,
          });
          user.id = newUser._id.toString();
        } else {
          user.id = existingUser._id.toString();
        }
        return true;
      } catch (error) {
        console.error("Error checking/creating user:", error);
        return false;
      }
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
};
