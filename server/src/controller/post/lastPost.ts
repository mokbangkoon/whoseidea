import { prisma } from '../db'
import { Request, Response } from "express";

export async function lastPost (req: Request, res: Response) {
    
    // 마지막 게시글을 기준으로 내림차순 정렬
    const last = await prisma.posts.findFirst({
        orderBy: {
            id: "desc"
        }
    })
    res.status(200).send({id: last?.id})
}