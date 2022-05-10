import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import { generateAccessToken } from '../tokenFunctions'
import { Request, Response } from 'express'

export async function login (req: Request, res: Response) {
    const userInfo = await prisma.users.findFirst({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
    if (!userInfo) {
        res.status(404).send('invaild')
    } else {
        const data = await generateAccessToken(userInfo)
        return res.cookie("jwt", data).status(200).send('ok')
    }
}