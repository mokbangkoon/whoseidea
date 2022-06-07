import { prisma } from '../db'
import { Request, Response } from 'express'

export async function postAll(req: Request, res: Response) {

    // 인자가 없으면 오류 처리
    if (!req.query.limit)
        return res.status(406).send('limit is empty')
    if (!req.query.order)
        return res.status(406).send('order is empty')

    // 인자가 숫자가 아니면 오류 처리
    if (!Number.isInteger(Number(req.query.limit)))
        return res.status(406).send('limit is not number')
    // 인자가 desc 또는 asc가 아니면 오류 처리
    if (!['desc','asc'].includes(req.query.order as string))
        return res.status(406).send('order is not "desc" or "asc"')

    const order = req.query.order as 'desc'|'asc' 
    const posts = await prisma.posts.findMany({
        take: Number(req.query.limit),
        orderBy: {
            likes:order
        },
    })

    // 검색 결과가 없으면 빈 배열 보냄
    if(!posts)
        return res.status(200).json([])
    interface NicknameAndPosts {
        nickname: string,
        caption: string,
        likes: number ,
        id: number,
    }
    const nicknameAndPosts: NicknameAndPosts [] = []
    for(let item of posts){
        const nickname = await prisma.users.findFirst({
            where:{
                id: item.nickname || undefined
            }
        })
        nicknameAndPosts.push({
            nickname: nickname?.nickname || '',
            caption: item.caption,
            likes: item.likes,
            id: item.id
        })
    }
    // 검색 결과 전달
    return res.status(200).json(nicknameAndPosts)
}