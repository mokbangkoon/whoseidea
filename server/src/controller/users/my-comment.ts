import { prisma } from '../db'
import { Request, Response } from 'express'

export async function myComment(req: Request, res: Response) {

    // 인자가 없으면 오류 처리
    if (!req.query.nickname) {
        return res.status(400).send('nickname is empty')
    }
    const userInfo = await prisma.users.findFirst({
        where: {
            nickname: req.query.nickname as any,
        }
    })

    // 요청한 아이디가 가입되어있지 않으면 오류 처리
    if(!userInfo)
        return res.status(401).send('user id not exist')

    const comments = await prisma.comments.findMany({
        where: {
            nickname: userInfo.id
        }
    })

    // 검색 결과가 없으면 빈 배열 보냄
    if(!comments)
        return res.status(200).json([])

        
    const nicknameAndComments: any[] = []
    for(let item of comments){
        const nickname = await prisma.users.findFirst({
            where:{
                id: item.nickname || undefined
            }
        })
        nicknameAndComments.push({
            nickname: nickname?.nickname,
            text: item.text,
        })
    }
    // 검색 결과 전달
    return res.status(200).json(nicknameAndComments)
}