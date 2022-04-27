import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function elseProfile (req: any, res: any) {
    if (!req.query.userId) {
        res.status(423).send('undefined user')
    } else {
        await prisma.users.findMany({
            where: {
                userId: req.body.userId,
                email: req.body.email
            }
        })
        res.status(200).send('send ok')
    }
}