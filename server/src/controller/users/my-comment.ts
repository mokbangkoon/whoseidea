import { PrismaClient } from '@prisma/client'

export async function myComment(req: any, res: any) {

    // 인자가 없으면 오류 처리
    if (!req.query.userId) {
        return res.status(406).send('userId is empty')
    }
    const prisma = new PrismaClient()
    const userInfo = await prisma.users.findFirst({
        where: {
            userId: req.query.userId,
        }
    })

    // 요청한 아이디가 가입되어있지 않으면 오류 처리
    if(!userInfo)
        return res.status(406).send('user id not exist')

    const comments=await prisma.comments.findMany({
        where: {
            id: userInfo.id
        }
    })

    // 검색 결과가 없으면 빈 배열 보냄
    if(!comments)
        return res.status(200).json([])

    // 검색 결과 전달
    return res.status(200).json(comments)
}