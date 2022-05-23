import { fileUploader } from './fileUploadFunctions'
import { signup } from './users/signup'
import { emailDuplication } from './users/emailDuplication'
import { nicknameDuplication } from './users/nicknameDuplication'
import { signout } from './users/signout'
import { login } from './users/login'
import { logout } from './users/logout'
import { auth } from './users/auth'
import { updatePro } from './users/updatePro'
import { changePassword } from './users/changePassword'
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
import { lastPost } from './post/lastPost'
import { writeMessage } from './message/writeMessage'
import { uploadPostImage } from './post/uploadPostImage'
import { uploadUserImage } from './users/uploadUserImage'
import { transmissionUrl } from './post/transmissionUrl'
import { getMessage } from './message/getMessage'
import { viewPost } from './post/viewPost'


const controllers = {
    auth,
    changePassword,
    deleteComment,
    elseProfile,
    emailDuplication,
    fileUploader,
    getComment,
    getMessage,
    getPostPage,
    lastPost,
    likePost,
    login,
    logout,
    modifyPost,
    myComment,
    myPost,
    nicknameDuplication,
    postAll,
    signout,
    signup,
    transmissionUrl,
    updatePro,
    uploadPostImage,
    uploadUserImage,
    viewPost,
    writeComment,
    writeMessage,
    writePost,
}

export default controllers
