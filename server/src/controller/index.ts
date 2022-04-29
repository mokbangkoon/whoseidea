import { signup } from './users/signup'
import { emailDuplication } from './users/emailDuplication'
import { nicknameDuplication } from './users/nicknameDuplication'
import { signout } from './users/signout'
import { login } from './users/login'
import { logout } from './users/logout'
import { auth } from './users/auth'
import { updatePro } from './users/updatePro'
import { elseProfile } from './users/elseProfile'
import { myPost } from './users/my-post'
import { myComment } from './users/my-comment'
import { postAll } from './post/postAll'
import { getPostPage } from './post/getPostPage'
import { getComment } from './comment/getComment'
import { writePost } from './post/writePost'
import { writeComment } from './comment/writeComment'
import { deleteComment } from './comment/deleteComment'
import { likePost } from './post/likePost'
import { modifyPost } from './post/modifyPost'
import { messanger } from './message/message'


const controllers = {
    signup:signup,
    emailDuplication:emailDuplication,
    nicknameDuplication:nicknameDuplication,
    signout:signout,
    login:login,
    logout:logout,
    auth:auth,
    updatePro:updatePro,
    elseProfile:elseProfile,
    myPost:myPost,
    myComment:myComment,
    postAll:postAll,
    getPostPage:getPostPage,
    getComment:getComment,
    writePost:writePost,
    writeComment:writeComment,
    deleteComment:deleteComment,
    likePost:likePost,
    modifyPost:modifyPost,
    messanger:messanger
}

export default controllers
