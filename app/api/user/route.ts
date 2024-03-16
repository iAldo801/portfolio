import prisma from "@/prisma/client";
import { NextResponse } from "next/server";


export async function GET() {

    try {

        const user = await prisma.user.findMany()

        return NextResponse.json({ user });

    } catch (err) {
        console.log(err);
        return NextResponse.json({ msg: 'Server Error' });
    }

}