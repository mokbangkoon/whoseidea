import { prisma } from '../db'
import { isAuthorized } from "../tokenFunctions";
import { Request, Response } from 'express'

export async function deleteComment (req: Request, res: Response) {
    if (!isAuthorized(req)) {
        return res.status(422).send('invaild')
    }
    const accsessTokenData: any = isAuthorized(req)
    const userInfo = await prisma.users.findFirst({
        where: {
            email: accsessTokenData.email
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