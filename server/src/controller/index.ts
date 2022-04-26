import { signup } from './users/signup'
import { signout } from './users/signout'
import { login } from './users/login'
import { logout } from './users/logout'

const controllers = {
    signup:signup,
    signout:signout,
    login:login,
    logout:logout
}

export default controllers
