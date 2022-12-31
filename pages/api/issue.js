import connect from "../../lib/mongodb";
import Issues from "../../model/issueSchema";
connect()

export default async function handler(req,res){
    try{
        console.log('aba')
        const {email,password} = req.body
        const user = await User.findOne({email,password})
        const {issue} = req.body
        user.insertOne(issue)

        return user
        
        // res.redirect('/StudentDashboard')

    }
    catch(error){
        console.log(error.message)
        // res.redirect('/error')
    }
}
