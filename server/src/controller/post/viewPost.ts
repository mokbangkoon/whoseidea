import { prisma } from '../db'
import { Request, Response } from 'express'
import { isAuthorized, TokenData } from '../tokenFunctions'

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
    
    if (!isAuthorized(req))
        return res.status(401).send("Mismatched Cookies")

    const accsessTokenData:TokenData = isAuthorized(req)
    const userInfo = await prisma.users.findFirst({
        where:{
            email:accsessTokenData!.email
        }
    })

    const post = await prisma.posts.findFirst({
        where:{
            id:Number(req.query.postId)
        }
    })

    // 검색 결과가 없으면 빈 객체를 보냄
    if(!post)
        return res.status(200).json({})

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

    interface NicknameAndViewPosts {
        nickname: string,
        id: number,
        caption: string,
        file: number,
        likes: number,
        view: number,
        context: string,
        created_at: Date,
    }

    const nicknameAndViewPosts: NicknameAndViewPosts[] = []
    const nickname = await prisma.users.findFirst({
        where: {
            id: post.nickname || undefined
        }
    })
    nicknameAndViewPosts.push({
        nickname: nickname?.nickname || '',
        id: post.id,
        caption: post.caption,
        file: post.file,
        likes: post.likes,
        view: post.view,
        context: post.context,
        created_at: post.created_at
    })

    // 이미 좋아요를 누른 유저인 경우, boolean값을 참으로 전달
    if (isAuthorized(req) && await prisma.likes.findFirst({
        where:{
            nickname:userInfo?.id,
            postId:req.body.postId
        }
    })) {
        return res.status(200).json({data: nicknameAndViewPosts, Boolean: true})
    }


    // 검색 결과 전달
    return res.status(200).json({data: nicknameAndViewPosts , Boolean:false})
}