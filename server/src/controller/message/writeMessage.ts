import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import { isAuthorized } from "../tokenFunctions";
import { Request, Response } from 'express'

export async function writeMessage (req: Request, res: Response) {
    if (!isAuthorized(req)) {
        return res.status(422).send('invaild')
    }
    const accsessTokenData: any = isAuthorized(req)
    const user1Info = await prisma.users.findFirst({
        where: {
            email: accsessTokenData?.email
        }
    })
    if (!user1Info) {
        return res.status(425).send('not user')
    }
    const user2Info = await prisma.users.findFirst({
        where: {nickname: req.body.target}
    })
    if (!user2Info) {
        return res.status(426).send('not find user')
    }
    await prisma.messages.create({
        data: {
            nickname: user1Info.id,
            text: req.body.context,
            target: user2Info.id
        }
    })
    return res.status(200).send('send ok')
}
