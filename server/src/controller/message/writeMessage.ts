import { prisma } from '../db'
import { isAuthorized } from "../tokenFunctions";
import { Request, Response } from 'express'

export async function writeMessage (req :Request, res: Response) {

    // 쿠키가 맞지 않으면 오류 처리
    if (!isAuthorized(req)) {
        return res.status(401).send('Mismatched Cookies')
    }

    // 인수가 없으면 오류 처리
    if (!req.body.target) {
        return res.status(406).send('target is empty')
    }
    if (!req.body.context) {
        return res.status(406).send('context is empty')
    }

    // 내 닉네임 찾기
    const accsessTokenData: any = isAuthorized(req)
    const user1Info = await prisma.users.findFirst({
        where: {
            email: accsessTokenData?.email
        }
    })

    // 회원 가입되어 있지 않으면 에러 처리
    if (!user1Info) {
        return res.status(406).send('The ID1 of the user who does not exist.')
    }

    // 상대 닉네임 찾기
    const user2Ifo = await prisma.users.findFirst({
        where: {nickname: req.body.target}
    })

    // 회원 가입되어 있지 않으면 에러 처리
    if (!user2Ifo) {
        return res.status(406).send('The ID2 of the user who does not exist.')
    }

    await prisma.messages.create({
        data: {
            nickname: user1Info?.id,
            text: req.body.context,
            target: user2Ifo?.id
        }
    })
    return res.status(200).send('send ok')
}
