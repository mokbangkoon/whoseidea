import { prisma } from '../db'
import { isAuthorized } from "../tokenFunctions";
import { Request, Response } from 'express'

export async function writePost (req: Request, res: Response) {

    // 쿠키가 없거나 맞지 않으면 오류 처리
    if (!isAuthorized(req)) {
        return res.status(401).send('Mismatched Cookies')
    }

    // 닉네임으로 users 테이블에서 id값을 가져온다.
    const accsessTokenData: any = isAuthorized(req)
    const userInfo = await prisma.users.findFirst({
        where:{
            email:accsessTokenData.email
        }
    })

    // 가져온 id값과 body에 들어있는 값을 삽입한다.
    await prisma.posts.create({
        data: {
            nickname:userInfo?.id,
            likes:0,
            view:0,
            file:0,
            caption:req.body.caption,
            context:req.body.context
        }
    })
    return res.status(200).send('ok')
}