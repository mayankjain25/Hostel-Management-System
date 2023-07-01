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
            console.log('entered author function')
            const {email,password} = credentials

            const user1 = await User.findOne({email,password})
            console.log('user1',user1)
            if(!user1){
              throw new Error("User has not been registered yet")
            }
            return user1
        },
        
    })
    // ...add more providers here
  ],
  pages:{
    signIn:'/Login',
  },
  secret:"secret",
  database:process.env.MONGODB_URI,
}




export default NextAuth(authOptions)