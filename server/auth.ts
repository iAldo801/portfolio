import prisma from "@/prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions, getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as any,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    secret: process.env.NEXT_AUTH_SECRET as string,
}

export const getServerAuthSession = () => getServerSession(authOptions);