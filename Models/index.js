const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Voting', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
  });

  //models
const Voters = sequelize.define('Voters',{
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
        defaultValue:false
    }
})

const Candidates = sequelize.define('Candidates',{
  name:{
    type:DataTypes.STRING,
    allowNull:false,
    primaryKey:true
  },
  votes:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }
})

const Admins = sequelize.define('Admins',{
  username:{
    type:DataTypes.STRING,
    allowNull:false,
    primaryKey:true
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false
  }
})
module.exports = {
  database:sequelize,
  Voters,Admins,Candidates

}
