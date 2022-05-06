require('dotenv').config()
import { sign, verify } from 'jsonwebtoken'

export async function generateAccessToken (data: any) {
    return await sign(data, process.env.ACCESS_SECRET as any)
}
export function isAuthorized (req: any) {
    if (!req.headers.cookie) {
        return;
    } else {
        let decodeData
        verify(req.cookies.jwt, process.env.ACCESS_SECRET as any, (err: any, decoded: any) => {
            decodeData = decoded
        })
        return decodeData
    }
}