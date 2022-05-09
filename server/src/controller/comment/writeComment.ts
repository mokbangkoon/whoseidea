import { PrismaClient } from "@prisma/client";
import { isAuthorized } from "../tokenFunctions";
import { Request, Response } from 'express'

export async function writeComment (req: Request, res: Response) {

    // 쿠키가 없거나 맞지 않으면 오류 처리
    if (!isAuthorized(req)) {
        return res.status(405).send('Mismatched Cookies')
    }

    // 닉네임으로 users 테이블에서 id값을 가져온다.
    const accsessTokenData: any = isAuthorized(req)
    const prisma = new PrismaClient();
    const userInfo = await prisma.users.findFirst({
        where:{
            email:accsessTokenData.email
        }
    })
    
    // 있는 사용자가 댓글을 작성하려고 하는지 확인한다.
    if (!userInfo)
        return res.status(405)
            .send('The ID of the user who does not exist.')

    // 있는 게시글에 댓글을 작성하려고 하는지 확인한다.
    if(!await prisma.posts.findUnique({ where:{ id:req.body.postId }}))
        return res.status(405)
            .send('The ID of the post that does not exist.')

    // 가져온 id값과 body에 들어있는 값을 삽입한다.
    await prisma.comments.create({
        data: {
            nickname:userInfo?.id,
            postId:req.body.postId,
            text:req.body.context
        }
    })
    return res.status(200).send('ok')
}