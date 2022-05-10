import { PrismaClient } from "@prisma/client";
import { isAuthorized } from "../tokenFunctions";
import { Request, Response } from 'express'

export async function likePost (req: Request, res: Response) {

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
    
    // 이미 like가 되어 있는지 확인한다.
    const isLiked = await prisma.likes.findFirst({
        where:{
            nickname:userInfo?.id,
            postId:req.body.postId
        }
    })
    const liked = await prisma.posts.findFirst({
        where: {
            id: req.body.postId
        }
    })

    // 만약 like가 되어있다면 라이크를 뺀다.
    if (isLiked) {

        // like 테이블에서 like한 것을 지운다.
        await prisma.likes.deleteMany({
            where:{
                nickname:userInfo?.id,
                postId:req.body.postId
            }
        })

        // posts 테이블에서 like를 하나 뺀다.
        await prisma.posts.update({
            where:{
                id:req.body.postId
            },
            data:{
                likes:{
                    increment:-1
                }
            }
        })
        return res.status(200).send({likes: liked?.likes})
    }
    // 만약 like가 되어있지 않다면 라이크를 추가한다.

    // 가져온 id값과 body에 들어있는 값을 삽입한다.
    await prisma.likes.create({
        data: {
            nickname:userInfo?.id,
            postId:req.body.postId
        }
    })

    // posts 테이블에서 like를 하나 추가한다.
    await prisma.posts.update({
        where: {
            id: req.body.postId
        },
        data: {
            likes: {
                increment: 1
            }
        }
    })

    return res.status(200).send({likes: liked?.likes})
}