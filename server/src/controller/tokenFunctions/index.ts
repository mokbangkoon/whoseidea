require('dotenv').config()
import { sign, verify, VerifyCallback } from 'jsonwebtoken'
import { Request } from 'express'

export type TokenData = {
    id: number,
    nickname: string,
    password: string,
    email: string,
    profile: string,
    iat: number
} | undefined

export async function generateAccessToken (data: object) {
    return await sign(data, process.env.ACCESS_SECRET as string)
}
export function isAuthorized (req: Request) {
    if (!req.headers.cookie) {
        return;
    } else {
        let decodeData
        const callback: VerifyCallback = (_,decoded) => {
            decodeData = decoded
        }
        verify(req.cookies.jwt, process.env.ACCESS_SECRET as string, callback)
        return decodeData
    }
}