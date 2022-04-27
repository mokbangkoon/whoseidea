import { isAuthorized } from '../tokenFunctions'

export async function auth (req: any, res: any) {
    if(isAuthorized(req))
        return res.status(206).json(true)
    else
        return res.status(206).json(false)
}