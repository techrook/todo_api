import {DataTypes, Model} from "sequelize";
import DB from "../config/database.config";

interface TodoAttributes {
    id: string;
    title: string;
    completed : boolean;
}

export class TodoInstance extends Model<TodoAttributes> {}

TodoInstance.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue:DataTypes.UUIDV4 ,
            allowNull : false
        },
        title : {
            type: DataTypes.STRING,
            allowNull : false
        },
        completed : {
            type: DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue: false
        }
    },{
        sequelize:DB,
        tableName: "todos",
    }
)