import mongoose from "mongoose";
import { APP_URL } from "../config";
const Schema = mongoose.Schema;

const leavesSchema = new Schema({
    // title: {type:String, default: "Casual Leave"},
    // SL: {type: String, default: '0.5'},
   
        name:{type:String},
        leave_type: {type:String},
   

}, { timestamps:true } );

export default mongoose.model('Leaves', leavesSchema, 'leaves')