module. exports = (sequelize, dataTypes) => {
    let alias="Projects";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name:{
            allowNull: false,
            type: dataTypes.STRING
        },
        projectImg:{
            allowNull:false,
            type: dataTypes.STRING
        },
        description:{
            type: dataTypes.STRING
        },
        location:{
            allowNull: false,
            type: dataTypes.INTEGER
        }
};
let config={
tableName:"projects",
timestamps: false
};
     const Project = sequelize.define(alias,cols,config);
     Project.associate = (models) => {
        //location
     Project.belongsTo(models.Locations,{
        as:"locations",
        foreignKey:"locations_id"
    });
    //skill
     Project.belongsToMany(models.Skills,{
        as:"skills",
        through:"projects_skills",
        foreignKey:"projects_id",
        otherKey:"skills_id",
        timestamps:false
    });

    
}
     return Project;
}