import { generateAccessToken } from '../tokenFunctions'
import { PrismaClient } from '@prisma/client'

export async function signup (req: any, res: any) {
    
    // 값이 들어가지 않은 변수가 있으면 invaild 처리
    if (!Object.entries(req.body).every(item => item[1])) {
        return res.status(422).send('empty value exists')
    }

    const prisma = new PrismaClient()
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
            profile:'default_image.png'
        },
    })
    const token = await generateAccessToken(req.body);
    return res.cookie("jwt",token).status(200).send('ok')
}
