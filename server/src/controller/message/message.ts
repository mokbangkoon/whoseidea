import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import { isAuthorized } from "../tokenFunctions";

export async function messanger (req :any, res: any) {
    if (!isAuthorized(req)) {
        res.status(422).send('invaild')
    }
    const accsessTokenData: any = isAuthorized(req)
    const userInfo = await prisma.users.findFirst({
        where: {
            nickname: accsessTokenData.nickname
        }
    })
    if (!userInfo) {
        res.status(425).send('not user')
    }
    if (!await prisma.users.findFirst({
        where: {nickname: req.body.userId}
    })) {
        res.status(426).send('not find user')
    }
    await prisma.message.create({
        data: {
            nickname: userInfo?.id,
            text: req.body.context
        }
    })
    res.status(200).send('send ok')
}
