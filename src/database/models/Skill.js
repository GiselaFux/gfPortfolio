module.exports = (sequelize, dataTypes) => {
    let alias="Skills";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        skill:{
            allowNull: false,
            type: dataTypes.STRING
        },
        skillImg:{
            allowNull:false,
            type: dataTypes.STRING
        },
        
};
let config={
tableName:"skills",
timestamps: false
};
     const Skill = sequelize.define(alias,cols,config);
     Skill.associate = (models) => {
     
    Skill.belongsToMany(models.Projects,{
        as:"projects",
        through:"projects_skills",
        foreignKey:"products_id",
        otherKey:"skills_id",
        timestamps:false
    });
    
}
     return Skill;
}