import { PrismaClient } from "@prisma/client";
import { isAuthorized } from "../tokenFunctions";

export async function modifyPost (req: any, res: any) {

    // 쿠키가 없거나 맞지 않으면 오류 처리
    if (!isAuthorized(req)) {
        return res.status(405).send('Mismatched Cookies')
    }

    const prisma = new PrismaClient();

    // posts 테이블에서 가져온값으로 수정한다.
    await prisma.posts.update({
        where: {
            id: req.body.postId
        },
        data: {
            context: req.body.context
        }
    })
    return res.status(200).send('ok')
}