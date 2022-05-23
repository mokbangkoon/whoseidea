import { prisma } from '../db'
import { isAuthorized } from "../tokenFunctions";
import { Request, Response } from 'express'

export async function updatePro (req: Request, res: Response) {

    // 요청받은 쿠키가 잘못되거나 없는 경우 오류 처리
    if (!req.headers.cookie) {
        return res.status(401).send('no cookies')
    }
    if (!isAuthorized(req)) {
        return res.status(401).send('invaild user')
    }

    // 입력한 닉네임이 users 테이블에 존재한 경우 이미 존재하는 닉네임이라 알려준다
    if (await prisma.users.findFirst({where: {nickname: req.body.nickname}})) {
        return res.status(403).send('nickname exists')
    }

    // 입력한 닉네임을 유저정보에 업데이트 한다
    const accsessTokenData: any = isAuthorized(req)
    const userInfo = Object.assign({}, req.body)
    await prisma.users.updateMany({
        where: {email: accsessTokenData.email},
        data: userInfo
    })
    return res.status(200).send(`${userInfo.nickname} change ok`)
}