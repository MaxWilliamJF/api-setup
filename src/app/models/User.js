module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
        username: DataTypes.STRING,
        password_hash: DataTypes.STRING
    });

    return user;
};