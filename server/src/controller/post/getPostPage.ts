import { prisma } from '../db'
import { Request, Response } from 'express'

export async function getPostPage(req: Request, res: Response) {

    // 인자가 없으면 오류 처리
    if (!req.query.page)
        return res.status(406).send('page is empty')

    const page = Number(req.query.page)
    // 인자가 숫자가 아니면 오류 처리
    if (!Number.isInteger(page))
        return res.status(406).send('page is not number')

    // 인자가 숫자 0 이하면 오류 처리
    if (page <= 0)
        return res.status(406).send('page is zero or less.')

    const posts = await prisma.posts.findMany({
        skip: (page - 1) * 9,
        take: 9,
        orderBy:{
            id:'desc'
        },
        include: {
            UsersToPosts:true
        },
    })

    // 검색 결과가 없으면 빈 배열 보냄
    if(!posts)
        return res.status(200).json([])

    const postsWithNickname = posts.map(post=>(
        {
            id:post.id,
            nickname:post.UsersToPosts?.nickname,
            caption:post.caption,
            likes:post.likes,
            view:post.view,
            context:post.context,
            create_at:post.created_at,
        }
    ))

    // 검색 결과 전달
    return res.status(200).json(postsWithNickname)
}