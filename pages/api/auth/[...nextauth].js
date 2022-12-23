import NextAuth from "next-auth"
import CredentialsProvider  from "next-auth/providers/credentials"
import connect from "../../../lib/mongodb";
import User from "../../../model/schema";


export const authOptions = {
  // Configure one or more authentication providers
  session:{
    strategy:'jwt',
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      type:'credentials',
      credentials: {
        email:String,
        password:String
      },
      async authorize(credentials) {
            connect()
            const {email,password} = credentials
            // const res = await fetch("/api/login",{
            //     method:'POST',
            //     headers:{
            //       'Content-Type':'application/json'
            //     },
            //     body: JSON.stringify({
            //       email,
            //       password
            //     })
            //   })
            
            // const user = await res.json()

            // if(res.ok && user) return user;
            // return null;

            // const {email,password} = req.body
            const user = await User.findOne({email,password})
            if(!user){
              throw new Error("User has not been registered yet")
            }
            console.log("user",user)
            return user
        },
        
    })
    // ...add more providers here
  ],
  pages:{
    signIn:'/login'
  },
  secret:"secret",
  database:process.env.MONGODB_URI,
}




export default NextAuth(authOptions)