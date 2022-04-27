import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function elseProfile (req: any, res: any) {
    if (!req.query.userId) {
        res.status(423).send('undefined user')
    } else {
        const userInfo: any = await prisma.users.findFirst({
            where: {
                userId: req.query.userId
            }
        })
        delete userInfo?.password
        res.status(200).send(userInfo)
    }
}