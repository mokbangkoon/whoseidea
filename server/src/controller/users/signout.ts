import { isAuthorized } from '../tokenFunctions'
import { PrismaClient } from '@prisma/client'

export async function signout(req: any, res: any) {
    
    if (!isAuthorized(req)) {
        return res.status(405).send('Mismatched Cookies')
    }
    const prisma = new PrismaClient()
    const userInfo = await prisma.users.findFirst({
        where: {
            email: req.body.email
        }
    })

    if (!userInfo) {
        return res.status(406).send('incorrect id or password')
    }
    await prisma.users.deleteMany({
        where: {
            email: req.body.email
        }
    })
    return res.status(206).clearCookie('jwt').send('good bye')
}