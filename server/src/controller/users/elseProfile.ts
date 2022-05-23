import { prisma } from '../db'
import { Request, Response } from 'express'

export async function elseProfile (req: Request, res: Response) {
    
    // 인자가 없으면 오류 처리
    if (!req.query.nickname) {
        res.status(400).send('nickname is empty')
    } else {

        // 요청한 닉네임으로 users 테이블에서 유저정보를 가져온다
        const userInfo: any = await prisma.users.findFirst({
            where: {
                nickname: req.query.nickname as any
            }
        })

        // 패스워드를 제외한 나머지 유저정보를 전달한다
        delete userInfo?.password
        res.status(200).send(userInfo)
    }
}