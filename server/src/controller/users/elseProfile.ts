import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function elseProfile (req: any, res: any) {
    if (!req.query.nickname) {
        res.status(423).send('undefined user')
    } else {
        const userInfo: any = await prisma.users.findFirst({
            where: {
                nickname: req.query.nickname
            }
        })
        delete userInfo?.password
        res.status(200).send(userInfo)
    }
}