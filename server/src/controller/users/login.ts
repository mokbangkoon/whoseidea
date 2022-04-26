import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import {generateAccessToken} from '../tokenFunctions'

const login = async (req: any, res: any) => {
    const userInfo = await prisma.users.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
}