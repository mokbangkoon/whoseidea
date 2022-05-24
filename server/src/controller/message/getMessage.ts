import { prisma } from '../db'
import { isAuthorized, TokenData } from '../tokenFunctions'
import { Request, Response } from 'express'

export async function getMessage(req: Request, res: Response) {

    if (!isAuthorized(req))
        return res.status(401).send('Mismatched Cookies')

    // 내 정보 가져오기
    const tokenInfo:TokenData = isAuthorized(req)
    const [ userInfo ]:any = await prisma.users.findMany({
        where:{
            email:tokenInfo!.email
        }
    })
    
    // 나에게로 온 메시지와, 내가 쓴 메시지를 가져온다.
    const messages = await prisma.messages.findMany({
        where:{
            OR:[
                // 나에게 온 메시지
                { target: userInfo.id },
                // 내가 쓴 메시지
                { nickname: userInfo.id },
            ]
        },
        include:{
            UsersToMessage:true
        },
        orderBy:{
            id: 'desc'
        }
    })

    // 검색 결과가 없으면 빈 배열 보냄
    if(!messages)
        return res.status(200).json([])

    // 아이디를 닉네임으로 변환해서 보냄
    const nicknameAndMessages:NicknameAndMessages[] = []

    interface NicknameAndMessages {
        destination:string|undefined,
        source:string|undefined,
        text:string,
    }

    for(let item of messages){
        const target = await prisma.users.findFirst({
            where:{
                id:item.target
            }
        })
        const nickname = await prisma.users.findFirst({
            where:{
                id:item.nickname || undefined
            }
        })
        nicknameAndMessages.push({
            destination:target?.nickname,
            source:nickname?.nickname,
            text:item.text,
        })
    }
    // 검색 결과 전달
    return res.status(200).json(nicknameAndMessages)
}