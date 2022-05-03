import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function nicknameDuplication (req: any, res: any) {
    console.log(req.query)
    if (await prisma.users.findFirst({
        where: {nickname: req.query.nickname}
    })) {
        res.status(422).send('nickname exists')
    } else {
        res.status(202).send('possible')
    }
}