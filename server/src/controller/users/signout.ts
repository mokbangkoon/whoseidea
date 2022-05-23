import { prisma } from '../db'
import { isAuthorized } from '../tokenFunctions'
import { Request, Response } from 'express'

export async function signout(req: Request, res: Response) {
    
    // 쿠키가 잘못되거나 없는 경우 오류 처리
    if (!isAuthorized(req)) {
        return res.status(401).send('Mismatched Cookies')
    }

    // 이메일값과 패스워드값으로 users 테이블에서 유저정보를 가져온다
    const userInfo = await prisma.users.findFirst({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })

    // 이메일과 패스워드가 맞지 않으면 오류 처리
    if (!userInfo) {
        return res.status(401).send('incorrect id or password')
    }

    // users 테이블에서 유저정보 및 jwt 쿠키를 제거 후 회원탈퇴
    await prisma.users.deleteMany({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
    return res.status(200).clearCookie('jwt').send('good bye')
}