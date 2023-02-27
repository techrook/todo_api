import {Sequelize} from "sequelize"
import {CONFIG} from './index.config'

const DB = new Sequelize(CONFIG.database, CONFIG.user, CONFIG.password,{
    host: CONFIG.host,
    dialect: "mysql",
    logging: false
});


export default DB;