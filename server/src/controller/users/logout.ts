export function logout(req: any, res: any) {
    return res.status(205).clearCookie('jwt').send('Logged out successfully');
};