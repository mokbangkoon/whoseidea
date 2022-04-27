import { PrismaClient } from '@prisma/client'

export async function getComment(req: any, res: any) {

    // 인자가 없으면 오류 처리
    if (!req.query.postId)
        return res.status(406).send('postId is empty')

    // 인자가 숫자가 아니면 오류 처리
    if (!Number(req.query.postId))
        return res.status(406).send('postId is not number')

    const prisma = new PrismaClient()
    const comments = await prisma.comments.findMany({
        where:{
            postId:Number(req.query.postId)
        }
    })

    // 검색 결과가 없으면 빈 배열 보냄
    if(!comments)
        return res.status(200).json([])

    // 검색 결과 전달
    return res.status(200).json(comments)
}