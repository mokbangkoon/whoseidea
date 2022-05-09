import { PrismaClient } from '@prisma/client'
import { isAuthorized } from '../tokenFunctions'
import { Request, Response } from 'express'


export async function getMessage(req: Request, res: Response) {

    // 인자가 없으면 오류 처리
    if (!req.query.target)
        return res.status(406).send('target is empty')
    if (!req.query.nickname)
        return res.status(406).send('nickname is empty')

    if (!isAuthorized(req))
        return res.status(405).send('Mismatched Cookies')

    const target = Number(req.query.target)
    // 인자가 숫자가 아니면 오류 처리
    if (!Number.isInteger(target))
        return res.status(406).send('target is not number')

    // 인자가 숫자 0 이하면 오류 처리
    if (target < 0)
        return res.status(406).send('target is zero or less.')

    const prisma = new PrismaClient()

    // 내 아이디 가져오기
    const tokenInfo:any = isAuthorized(req)
    const [ user1Info ]:any = await prisma.users.findMany({
        where:{
            email:tokenInfo.email
        }
    })

    // 상대방 아이디 가져오기
    const [ user2Info ]:any = await prisma.users.findMany({
        where:{
            nickname:req.query.nickname as any
        }
    })
    
    // 상대방과 내 메시지를 가져온다.
    const messages = await prisma.messages.findMany({
        where:{
            OR:[
                {
                    target: Number(req.query.target),
                    nickname: user1Info.id
                },
                {
                    target: Number(req.query.target),
                    nickname: user2Info.id
                },
            ]
        },
    })

    // 검색 결과가 없으면 빈 배열 보냄
    if(!messages)
        return res.status(200).json([])

    // 아이디를 닉네임으로 변환해서 보냄
    const nicknameAndMessages = messages
        .map(item=>{
            if(user1Info.id == item.nickname){
                return {
                    ...item,
                    nickname:user1Info.nickname
                }
            }
            return {
                ...item,
                nickname: user2Info.nickname
            }
        })
    // 검색 결과 전달
    return res.status(200).json(nicknameAndMessages)
}