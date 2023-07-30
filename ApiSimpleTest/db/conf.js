module.exports={
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DATABASE: 'node_sequelize_api_db',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        acquire:300000,
        ilde:10000
    }
}