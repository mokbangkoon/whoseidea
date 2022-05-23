import { prisma } from '../db'
import { Request, Response } from 'express'

export async function transmissionUrl (req: Request, res: Response) {
    
    // 인자값이 맞지 않으면 오류 처리
    if (!req.query.postId) {
        res.status(406).send('postId is empty')
    } else {

        // postId값으로 files 테이블에서 url값을 가져온다
        const url: any = await prisma.files.findMany({
            where: {postId: Number(req.query.postId)}
        })

        // url값을 따로 뽑아 객체에 담는다
        let reUrl = url.map(function(obj: any) {
            let img = {}
            img = obj.url
            return img 
        })
        return res.status(200).send(reUrl)
    }
}