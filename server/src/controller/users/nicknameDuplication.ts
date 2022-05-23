import { prisma } from '../db'
import { Request, Response } from 'express'

export async function nicknameDuplication (req: Request, res: Response) {

    // users 테이블에 닉네임이 있는지 확인 후, 존재하면 이미 존재하는 닉네임이라 알려준다
    if (await prisma.users.findFirst({ where: {nickname: req.query.nickname as any} })) {
        return res.status(422).send('nickname exists')
    } else {
        return res.status(202).send('possible')
    }
}