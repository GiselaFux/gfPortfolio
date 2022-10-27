module. exports = (sequelize, dataTypes) => {
    let alias="Project";
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
        img:{
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
     Project.belongsTo(models.Location,{
        as:"location",
        foreignKey:"locations_id"
    });
    //skill
     Project.belongsToMany(models.Skill,{
        as:"skills",
        through:"projects_skills",
        foreignKey:"projects_id",
        otherKey:"skills_id",
        timestamps:false
    });

    
}
     return Project;
}