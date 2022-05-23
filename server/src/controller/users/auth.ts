import { prisma } from '../db'
import { isAuthorized } from '../tokenFunctions'
import { Request, Response } from 'express'

export async function auth (req: Request, res: Response) {
    
    // 요청받은 쿠키가 잘못되거나 없는 경우 오류 처리
    if (!req.headers.cookie) {
        return res.status(401).send('not authorized')
    }
    if(!isAuthorized(req)) {
        return res.status(403).json(false)
    } else {

        // 이메일로 users 테이블에 유저정보를 가져온다
        const accsessTokenData: any = isAuthorized(req)
        const userInfo: any = await prisma.users.findFirst({
            where: {email: accsessTokenData.email}
        })

        // 패스워드 값을 제외한 나머지 유저의 정보를 전달한다
        delete userInfo?.password
        return res.status(200).send(userInfo)
    }
}