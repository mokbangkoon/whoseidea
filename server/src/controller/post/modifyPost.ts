import { prisma } from '../db'
import { isAuthorized } from "../tokenFunctions";
import { Request, Response } from 'express'

export async function modifyPost (req: Request, res: Response) {

    // 쿠키가 없거나 맞지 않으면 오류 처리
    if (!isAuthorized(req)) {
        return res.status(401).send('Mismatched Cookies')
    }

    // posts 테이블에서 가져온값으로 수정한다.
    await prisma.posts.update({
        where: {
            id: req.body.postId
        },
        data: {
            context: req.body.context
        }
    })
    return res.status(200).send('ok')
}