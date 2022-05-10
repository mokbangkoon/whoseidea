import { PrismaClient } from '@prisma/client'
import { isAuthorized } from '../tokenFunctions'
import { Request, Response } from 'express'
const prisma = new PrismaClient()


export async function getMessage(req: Request, res: Response) {

    // 인자가 없으면 오류 처리
    if (!isAuthorized(req))
        return res.status(405).send('Mismatched Cookies')

    // 내 아이디 가져오기
    const tokenInfo: any = isAuthorized(req)
    const [ user1Info ]: any = await prisma.users.findMany({
        where:{
            email: tokenInfo.email
        }
    })
    const [ messages ] = await prisma.messages.findMany({
        where: {
            target: user1Info.id
        }
    })
    return res.status(200).json(messages)
}