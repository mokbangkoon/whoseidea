import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import { isAuthorized } from "../tokenFunctions";

export async function deleteComment (req: any, res: any) {
    if (!isAuthorized(req)) {
        return res.status(422).send('invaild')
    }
    const accsessTokenData: any = isAuthorized(req)
    const userInfo = await prisma.users.findFirst({
        where: {
            nickname: accsessTokenData.nickname
        }
    })
    if (!userInfo) {
        return res.status(425).send('not the user')
    }

    if(!await prisma.comments.findFirst({where: {id: req.body.commentId}})) {
        return res.status(426).send('no comments')
    } else {
        await prisma.comments.deleteMany({
            where: {
                nickname: userInfo?.id,
                id: req.body.commentId
            } 
        })
        return res.status(205).send('ok')
    }
}