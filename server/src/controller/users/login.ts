import { prisma } from '../db'
import { generateAccessToken } from '../tokenFunctions'
import { Request, Response } from 'express'

export async function login (req: Request, res: Response) {

    // 입력한 이메일값과 패스워드값으로 users 테이블에서 유저정보를 가져온다
    const userInfo = await prisma.users.findFirst({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })

    // 유저정보가 맞지 않는 경우 오류 처리
    if (!userInfo) {
        res.status(404).send('User information is not correct')
    } else {

        // 유저정보가 맞는 경우 jwt 토큰을 발행 후 접속을 허용한다
        const data = await generateAccessToken(userInfo)
        return res.cookie("jwt", data).status(200).send('ok')
    }
}