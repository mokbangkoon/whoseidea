export function logout(req: any, res: any) {
    res.status(205).clearCookie('jwt').send('Logged out successfully');
};