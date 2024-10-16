import authRouter from "./auth/auth.router.js";
import dectionaryRouter from "./dectionary/dectionary.router.js";
import resultRouter from "./result/result.router.js";
import userRouter from "./user/user.router.js";


export const bootstrap =(app)=>{
app.use('/dectionary',dectionaryRouter)
app.use('/result',resultRouter)
app.use('/',userRouter)
app.use('/auth',authRouter)
}