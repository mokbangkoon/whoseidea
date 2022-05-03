export function logout(req: any, res: any) {
    res.clearCookie('jwt').status(205).send('Logged out successfully');
};