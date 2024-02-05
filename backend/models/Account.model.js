import { ref } from 'joi';
import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
id:{
    type: String,
    required: true,
    unique: true
},
userId:{
    type: String,
    ref: 'User'
},
},{timestamps: true});