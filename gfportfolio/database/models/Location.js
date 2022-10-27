module.exports = (sequelize, dataTypes) => {
    let alias="Location";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        location:{
            allowNull: false,
            type: dataTypes.STRING
        }
       };
let config={
tableName:"locations",
timestamps: false
};
     const Location = sequelize.define(alias,cols,config);

     Location.associate =(models) =>{
        //Projects
        Location.hasMany(models.Project,{
            as:"projects",
            foreignKey:"locations_id",
        })

     return Location;
}}