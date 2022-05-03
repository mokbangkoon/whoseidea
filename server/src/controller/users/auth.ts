import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { isAuthorized } from '../tokenFunctions'

export async function auth (req: any, res: any) {
    if (!req.headers.cookie) {
        return res.status(401).send('not authorized')
    }
    if(!isAuthorized(req)) {
        return res.status(406).json(false)
    } else {
        const accsessTokenData: any = isAuthorized(req)
        const userInfo: any = await prisma.users.findFirst({
            where: {id: accsessTokenData.id}
        })
        delete userInfo['password']
        return res.status(200).send(userInfo)
    }
}