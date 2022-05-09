import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import { Request, Response } from 'express'

export async function emailDuplication (req: Request, res: Response) {
    if (await prisma.users.findFirst({ where: {email: req.query.email as any} })) {
        return res.status(422).send('email exists')
    }
    return res.status(202).send('possible')
}