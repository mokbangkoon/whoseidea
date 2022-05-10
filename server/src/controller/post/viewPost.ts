import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { isAuthorized } from '../tokenFunctions'

export async function viewPost(req: Request, res: Response) {

    // 인자가 없으면 오류 처리
    if (!req.query.postId)
        return res.status(406).send('postId is empty')

    const postId = Number(req.query.postId)
    // 인자가 숫자가 아니면 오류 처리
    if (!Number.isInteger(postId))
        return res.status(406).send('postId is not number')

    // 인자가 숫자 0 이하면 오류 처리
    if (postId <= 0)
        return res.status(406).send('postId is zero or less.')

    const prisma = new PrismaClient()
    const accsessTokenData: any = isAuthorized(req)
    const userInfo = await prisma.users.findFirst({
        where:{
            email:accsessTokenData.email
        }
    }) 

    // 조회수 증가
    await prisma.posts.update({
        where:{
            id:Number(req.query.postId)
        },
        data:{
            view:{
                increment:1
            }
        }
    })
    const post = await prisma.posts.findFirst({
        where:{
            id:Number(req.query.postId)
        }
    })
    if (isAuthorized(req) && await prisma.likes.findFirst({
        where:{
            nickname:userInfo?.id,
            postId:req.body.postId
        }
    })) {
        return res.status(200).json({data: post, Boolean: true})
    }

    // 검색 결과가 없으면 빈 객체를 보냄
    if(!post)
        return res.status(200).json({})

    // 검색 결과 전달
    return res.status(200).json(post)
}