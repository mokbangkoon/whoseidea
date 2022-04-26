import { signup } from './users/signup'
import { login } from './users/login'
import { logout } from './users/logout'

const controllers = {
    signup:signup,
    login:login,
    logout:logout
}

export default controllers