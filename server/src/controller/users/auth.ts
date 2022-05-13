import { prisma } from '../db'
import { isAuthorized } from '../tokenFunctions'
import { Request, Response } from 'express'

export async function auth (req: Request, res: Response) {
    if (!req.headers.cookie) {
        return res.status(401).send('not authorized')
    }
    if(!isAuthorized(req)) {
        return res.status(406).json(false)
    } else {
        const accsessTokenData: any = isAuthorized(req)
        const userInfo: any = await prisma.users.findFirst({
            where: {email: accsessTokenData.email}
        })
        delete userInfo?.password
        return res.status(200).send(userInfo)
    }
}