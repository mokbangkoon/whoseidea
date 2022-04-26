import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import {generateAccessToken} from '../tokenFunctions'

export async function login (req: any, res: any) {
    const userInfo = await prisma.users.findFirst({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
    if (!userInfo) {
        res.status(404).send('invaild')
    }
    await generateAccessToken(userInfo)
    .then((data) => {
        res.cookie("jwt", data).status(200).send({message: 'ok'})
    })
}