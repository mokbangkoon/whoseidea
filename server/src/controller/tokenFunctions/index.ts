require('dotenv').config()
import { sign, verify } from 'jsonwebtoken'

export async function generateAccessToken (data: any) {
    return await sign(data, process.env.ACCESS_SECRET as any)
}
export function isAuthorized (req: any) {
    if (!req.headers.cookie) {
        return;
    } else {
        let authToken = req.headers.cookie.split('=')[1].split(' ')[0]
        let cloneToken = authToken.slice(0, authToken.length)
        let decodeData

        verify(cloneToken, process.env.ACCESS_SECRET as any, (err: any, decoded: any) => {
            decodeData = decoded
        })
        return decodeData
    }
}