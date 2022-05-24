import { prisma } from '../db'
import { isAuthorized } from "../tokenFunctions";
import { Request, Response } from 'express'

export async function changePassword (req: Request, res: Response) {
    
    // 요청받은 쿠키가 잘못되거나 없는 경우 오류 처리
    if (!req.headers.cookie) {
        return res.status(401).send('no cookies')
    }
    if (!isAuthorized(req)) {
        return res.status(401).send('invaild user')
    }

    // 이메일값이랑 이전 패스워드값으로 users 테이블에서 id값을 찾아온다
    const accsessTokenData: any = isAuthorized(req)
    const userInfo = await prisma.users.findFirst({
        where: {
            email: accsessTokenData.email,
            password: req.body.oldPassword
        }
    })

    // 이전 패스워드값이 다른 경우 오류 처리
    if (!userInfo) {
        return res.status(406).send('password does not match')
    }

    // 이전 패스워드값이랑 신규 패스워드값이 같은 경우 오류 처리
    if (req.body.newPassword === req.body.oldPassword) {
        return res.status(406).send('Both passwords are the same')
    }

    // users 테이블에 해당하는 유저의 신규 패스워드값을 업데이트
    await prisma.users.update({
        where: {id: accsessTokenData.id},
        data: {password: req.body.newPassword}
    })
    return res.status(200).send('password change ok')
}