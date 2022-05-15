const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index')
const Voter = sequelize.define('Voters',{
    voterId:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    dob:{
        type:DataTypes.DATE,
        allowNull:false
    },
    address:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    mobile_no:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cast:{
        type:DataTypes.BOOLEAN,
        default:false
    }
})

Voter.sync({ alter: true })