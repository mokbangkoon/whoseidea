import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function emailDuplication (req: any, res: any) {
    if (await prisma.users.findFirst({
        where: {email: req.query.email}
    })) {
        res.status(422).send('email exists')
    } else {
        res.status(202).send('possible')
    }
}