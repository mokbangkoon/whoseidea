import { signup } from './users/signup'
import { login } from './users/login'
import { logout } from './users/logout'
import { updatePro } from './users/updatePro'

const controllers = {
    signup:signup,
    login:login,
    logout:logout,
    updatePro:updatePro
}

export default controllers