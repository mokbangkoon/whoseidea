import { isAuthorized } from '../tokenFunctions'
import { prisma } from '../db'
import { Request, Response } from 'express'
import { Express } from 'express'

export async function uploadUserImage(req: Request, res: Response) {
    // 인자가 없으면 오류 처리
    if (!req.query.nickname)
        return res.status(400).send('postId is empty')

    // 토큰이 맞지 않으면 오류 처리
    if(!isAuthorized(req))
        return res.status(401).send('Mismatched Cookies')
    
    if (!req.file)
        return res.status(400).send('file is empty')

    const file = req.file as Express.MulterS3.File 

    try {
        await prisma.users.updateMany({
            where: {
                nickname:req.query.nickname as string
            },
            data: {
                profile: `https://whoseidea-image.s3.ap-northeast-2.amazonaws.com/${file.key}`
            }
        })
        return res.status(200).send('ok')
    } catch (error) {
        return res.status(501).send(error)
    }
}