import { signup } from './users/signup'
import { signout } from './users/signout'
import { login } from './users/login'
import { logout } from './users/logout'
import { myPost } from './users/my-post'

const controllers = {
    signup:signup,
    signout:signout,
    login:login,
    logout:logout,
    myPost:myPost
}

export default controllers
