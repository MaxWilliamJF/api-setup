module.exports = (sequelize, DataTypes) => {
    const blogpost = sequelize.define("blogpost", {
        title: DataTypes.STRING,
        slug: DataTypes.STRING,
        content: DataTypes.TEXT,
        status: DataTypes.STRING,
        created_by: DataTypes.INTEGER
    });

    return blogpost;
};