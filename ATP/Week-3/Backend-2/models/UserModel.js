import { Schema,model,Types} from "mongoose"

//Create cart schema{product,count}
const cartSchema=new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product"//name of the product modal

    },
    count:{
        type:Number,
        default:1

    }
})
//Create User Schema(USerName,pasward,email,age)
const userSchema=new Schema({
    //Structor of user resources
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Min length of UserName is 4 characters"],
        maxLength:[6,"UserName size excced 6 characters"]
    },
    password:{
        type:String,
        required:[true,"Password required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email Alredy existed"]
    },
    age:{
        type: Number

    },
      cart:[cartSchema]//accpts only if{product:"",count:""}
},{versionKey:false,
    timestamps:true
}
)

//Generete UserModal

export const UserModal=model("user",userSchema)
