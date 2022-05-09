import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import { Request, Response } from 'express'

export async function elseProfile (req: Request, res: Response) {
    if (!req.query.nickname) {
        res.status(423).send('undefined user')
    } else {
        const userInfo: any = await prisma.users.findFirst({
            where: {
                nickname: req.query.nickname as any
            }
        })
        delete userInfo?.password
        res.status(200).send(userInfo)
    }
}