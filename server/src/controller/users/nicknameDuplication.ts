import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import { Request, Response } from 'express'

export async function nicknameDuplication (req: Request, res: Response) {
    if (await prisma.users.findFirst({ where: {nickname: req.query.nickname as any} })) {
        return res.status(422).send('nickname exists')
    } else {
        return res.status(202).send('possible')
    }
}