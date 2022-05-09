import { Request, Response } from 'express'

export function logout(req: Request, res: Response) {
    return res.status(205).clearCookie('jwt').send('Logged out successfully');
};