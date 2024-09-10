export class Blog {
    id = Math.floor(Math.random()*255)
    postCategory!:string;
    postPic!:string;
    title!:string;
    userPic!:string;
    UserName!:string;
    date = new Date();
}
