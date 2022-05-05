import { generateAccessToken } from '../tokenFunctions'
import { PrismaClient } from '@prisma/client'

export async function signup (req: any, res: any) {

    const prisma = new PrismaClient()

    // 만약 G_AUTHUSER_H 쿠키가 있다면 google 로그인으로 판단
    if(req.cookies.G_AUTHUSER_H){
        
        // 아이디가 이미 있다면 쿠키와 ok를 반환한다.
        if(await prisma.users.findFirst({ where:{ email:req.body.email } })){
            const token = await generateAccessToken(req.body);
            return res.cookie("jwt",token).status(200).send('ok')
        }

        // 없다면 DB에 넣고, 쿠키와 ok를 반환한다.
        await prisma.users.create({
            data: {
                nickname: req.body.email,
                email: req.body.email,
                password: '',
                profile: 'https://whoseidea-image.s3.ap-northeast-2.amazonaws.com/default_user_image.png'
            },
        })
        const token = await generateAccessToken(req.body);
        return res.cookie("jwt",token).status(200).send('ok')
    }

    // 일반 로그인 처리 부분
    
    // 값이 들어가지 않은 변수가 있으면 invaild 처리
    if (!Object.entries(req.body).every(item => item[1])) {
        return res.status(422).send('empty value exists')
    }

    const {nickname,email,password} = req.body

    // 아이디가 있으면 invaild 처리
    if(await prisma.users.findFirst({ where:{ nickname:nickname } })){
        return res.status(422).send('nickname exists')
    }

    // email이 있으면 invaild 처리
    if(await prisma.users.findFirst({ where:{ email:email } })){
        return res.status(422).send('email exists')
    }

    await prisma.users.create({
        data: {
            nickname:nickname,
            email: email,
            password:password,
            profile:'https://whoseidea-image.s3.ap-northeast-2.amazonaws.com/default_user_image.png'
        },
    })
    const token = await generateAccessToken(req.body);
    return res.cookie("jwt",token).status(200).send('ok')
}
