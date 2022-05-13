import { prisma } from '../db'
import { Request, Response } from "express";

export async function lastPost (req: Request, res: Response) {
    const last = await prisma.posts.findFirst({
        orderBy: {
            id: "desc"
        }
    })
    res.status(200).send({id: last?.id})
}