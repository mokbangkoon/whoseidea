import express from 'express';
import cors from 'cors';
import https from 'https'
import fs from 'fs'
import cookieParser from 'cookie-parser'
import controllers from './controller'
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
    cors({
      origin: ['https://localhost:3000', 'https://whoseidea.ml'],
      credentials: true,
      methods: ['GET','POST','PATCH','DELETE']
    })
  );
app.use(cookieParser())

app.get('/user/my-post', controllers.myPost);
app.get('/user/my-comment', controllers.myComment);
app.get('/auth', controllers.auth);
app.get('/user', controllers.elseProfile);
app.get('/post/all', controllers.postAll);
app.get('/post', controllers.getPostPage);
app.get('/comment', controllers.getComment);
app.get('/emailduplication', controllers.emailDuplication);
app.get('/nicknameduplication', controllers.nicknameDuplication);
app.get('/post/image', controllers.transmissionUrl);
app.get('/post/last', controllers.lastPost);
app.get('/post/view', controllers.viewPost);
app.get('/message', controllers.getMessage);

app.post('/signup', controllers.signup);
app.post('/login', controllers.login);
app.post('/logout', controllers.logout);
app.post('/post', controllers.writePost);
app.post('/comment', controllers.writeComment);
app.post('/message', controllers.writeMessage);
app.post('/post/image', controllers.fileUploader(), controllers.uploadPostImage);

app.patch('/user', controllers.updatePro);
app.patch('/changepassword', controllers.changePassword)
app.patch('/like', controllers.likePost);
app.patch('/post', controllers.modifyPost);
app.patch('/user/image', controllers.fileUploader(), controllers.uploadUserImage);

app.delete('/signout', controllers.signout);
app.delete('/comment', controllers.deleteComment);

const HTTPS_PORT = process.env.HTTPS_PORT || 8080

let server;

// privateKey 인증서와 certificate 인증서가 존재하는 경우 https 서버로 실행
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
    const privateKey = fs.readFileSync('./key.pem', 'utf8')
    const certificate = fs.readFileSync('./cert.pem', 'utf8')
    const credentials = { key: privateKey, cert: certificate }

    server = https.createServer(credentials, app)
    server.listen(HTTPS_PORT, () => console.log('https server runnning'))
} else {
  
    // 인증서가 존재하지 않는 경우 http 서버로 실행
    server = app.listen(HTTPS_PORT, () => console.log('http server runnning'))
}
module.exports = server;
