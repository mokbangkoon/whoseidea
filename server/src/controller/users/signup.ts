import generateAccessToken from '../tokenFunctions'

const signup = async(req: any, res: any) => {
    if (!Object.entries(req.body).every(item => item[1])) {
        return res.status(422).send('invaild')
    }
}

export default signup