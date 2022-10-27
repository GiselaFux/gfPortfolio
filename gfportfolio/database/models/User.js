module.exports = (sequelize, dataTypes) => {
    let alias="User";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nameLastname:{
            allowNull: false,
            type: dataTypes.STRING
        },
        email:{
            allowNull:false,
            type: dataTypes.STRING
        },
        mesaje:{
            type: dataTypes.STRING
        }
};
let config={
tableName:"users",
timestamps: false
};
     const User = sequelize.define(alias,cols,config);
     return User;
}