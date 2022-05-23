import { prisma } from '../db'
import { Request, Response } from 'express'

export async function emailDuplication (req: Request, res: Response) {

    // users 테이블에 이메일이 있는지 확인 후, 존재하면 이미 존재하는 이메일이라 알려준다
    if (await prisma.users.findFirst({ where: {email: req.query.email as string} })) {
        return res.status(412).send('email exists')
    }
    return res.status(200).send('possible')
}