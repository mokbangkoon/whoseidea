require('dotenv').config()
import { sign, verify } from 'jsonwebtoken'

const tokenFunctions = {
    generateAccessToken: async(data: any) => {
        let token = await sign(data, process.env.ACCESS_SECRET as any)
        return token
    },
    sendAccessToken: (res: any, accessToken: any) => {
        res.json({message: 'ok'})
    },
    isAuthorized: (req: any) => {
        if (!req.headers.cookie) {
            return;
        }
        let authToken = req.headers.cookie.split('=')[1].split(' ')[0]
        let cloneToken = authToken.slice(0, authToken.length)
        let decodeData

        verify(cloneToken, process.env.ACCESS_SECRET as any, (err: any, decoded: any) => {
            decodeData = decoded
        })
        return decodeData
    }
}

export = tokenFunctions