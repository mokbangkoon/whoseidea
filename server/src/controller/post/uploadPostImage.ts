import { prisma } from '../db'
import { isAuthorized } from '../tokenFunctions'

export async function uploadPostImage(req: any, res: any) {

    // 인자가 없으면 오류 처리
    if (!req.query.postId)
        return res.status(406).send('postId is empty')

    // 토큰이 맞지 않으면 오류 처리
    if(!isAuthorized(req))
        return res.status(401).send('Mismatched Cookies')
    
    try {
        // postId와 url을 저장
        await prisma.files.create({
            data: {
                postId: Number(req.query.postId),
                url: `https://whoseidea-image.s3.ap-northeast-2.amazonaws.com/${req.file.key}`
            }
        })
        return res.status(200).send('ok')
    } catch (error) {
        return res.status(501).send(error)
    }
}