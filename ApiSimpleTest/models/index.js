const dbConfig=require('../db/conf');
const { Sequelize, DataTypes } = require("sequelize");

const sequelize= new Sequelize(
    dbConfig.DATABASE,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            ilde:dbConfig.pool.ilde
        }
    }
    
)
sequelize.authenticate()
  .then(() => {
    console.log('Connexion à la base de données réussie !');
  })
  .catch((error) => {
    console.error('Impossible de se connecter à la base de données :', error);
  });


  const db={};
  db.Sequelize=Sequelize
  db.sequelize=sequelize
 
//Importation et définition des modèles de la base de données :
  db.products=require('./productModel.js')(sequelize,DataTypes);
  db.reviews=require('./reviewModel.js')(sequelize,DataTypes);

//Synchronisation des modèles avec la base de données
  db.sequelize.sync({force: false})
  .then(()=>console.log('yes re-sync done !'))

  module.exports=db