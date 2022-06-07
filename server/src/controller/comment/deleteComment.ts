import { prisma } from '../db'
import { isAuthorized, TokenData } from '../tokenFunctions'
import { Request, Response } from 'express'

export async function deleteComment (req: Request, res: Response) {
    
    // 쿠키가 없거나 맞지 않으면 오류 처리
    if (!isAuthorized(req)) {
        return res.status(401).send('Mismatched Cookies')
    }

    // 이메일로 user 테이블에서 id값을 가져온다
    const accsessTokenData:TokenData = isAuthorized(req)
    const userInfo = await prisma.users.findFirst({
        where: {
            email: accsessTokenData!.email
        }
    })

    // 존재하는 유저가 댓글을 삭제하려는지 확인한다 
    if (!userInfo) {
        return res.status(406).send('The ID of the user who does not exist.')
    }

    // 존재하는 댓글을 삭제하려는지 확인한다
    if(!await prisma.comments.findFirst({where: {id: req.body.commentId}})) {
        return res.status(406).send('is not existence comments')
    } else {
        
        // 가져온 id값과 body에 들어있는 값을 삽입한다
        await prisma.comments.deleteMany({
            where: {
                nickname: userInfo?.id,
                id: req.body.commentId
            } 
        })
        return res.status(200).send('ok')
    }
}