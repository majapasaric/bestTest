module.exports = {
  up: (queryInterface, Sequelize)=> {
    queryInterface.createTable('Users', {
      id: {
        type: Sequelize.UUID,
          primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface/*, Sequelize*/)=> {
    queryInterface.dropTable('Users');
  }
};