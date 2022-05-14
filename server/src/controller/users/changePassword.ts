import { prisma } from '../db'
import { isAuthorized } from "../tokenFunctions";
import { Request, Response } from 'express'

export async function changePassword (req: Request, res: Response) {
    if (!req.headers.cookie) {
        return res.status(401).send('no cookies')
    }
    if (!isAuthorized(req)) {
        return res.status(401).send('invaild user')
    }
    const accsessTokenData: any = isAuthorized(req)
    const userInfo = await prisma.users.findFirst({
        where: {
            email: accsessTokenData.email,
            password: req.body.oldPassword
        }
    })
    if (!userInfo) {
        return res.status(403).send('password does not match')
    }
    if (req.body.newPassword === req.body.oldPassword) {
        return res.status(410).send('password exists')
    }
    await prisma.users.update({
        where: {id: accsessTokenData.id},
        data: {password: req.body.newPassword}
    })
    return res.status(210).send('password change ok')
}