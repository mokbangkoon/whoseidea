import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function nicknameDuplication (req: any, res: any) {
    if (await prisma.users.findFirst({ where: {nickname: req.query.nickname} })) {
        return res.status(422).send('nickname exists')
    } else {
        return res.status(202).send('possible')
    }
}