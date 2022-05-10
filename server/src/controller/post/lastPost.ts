import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient()

export async function lastPost (req: Request, res: Response) {
    const last = await prisma.posts.findFirst({
        orderBy: {
            id: "desc"
        }
    })
    res.status(200).send({id: last?.id})
}