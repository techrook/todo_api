import  {  Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { TodoInstance } from "../model/index.model";


class TodoController {
  async create(req: Request, res: Response) {
    const id = uuidv4();

    try {
      const record = await TodoInstance.create({ ...req.body, id });
      return res.json({ record, message: "Sucessfully added task" });
    } catch (error) {
      return res.json({
        message: "failed to add task",
        status: 500,
        route: "/add",
      });
    }
  }

  async readPagination(req: Request, res: Response) {
    try {
      // const limit = req.query?.limit as number | undefined;
      // const offset = req.query?.offset as number | undefined; mySql error not paging

      const records = await TodoInstance.findAll({ where: {} });
      return res.json(records);
    } catch (error) {
      return res.json({
        message: "task not found",
        status: error,
        route: "/read",
      });
    }
  }

  async readById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const record = await TodoInstance.findOne({ where: { id } });
      return res.json(record);
    } catch (error) {
      return res.json({
        message: "task not found",
        status: error,
        route: "/read/:id",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const record = await TodoInstance.findOne({ where: { id } });
      if (!record) {
        return res.json({ msg: "can not find task" });
      }
      const updatedRecord = await record.update({
        completed: !record.getDataValue("completed"),
      });
      return res.json(updatedRecord);
    } catch (error) {
      return res.json({
        message: "task not found",
        status: error,
        route: "/update/:id",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const record = await TodoInstance.findOne({ where: { id } });
      if (!record) {
        return res.json({ msg: "can not find task" });
      }
      const deletedRecord = await record.destroy();
      return res.json({ record: deletedRecord });
    } catch (error) {
      return res.json({
        message: "task not found",
        status: error,
        route: "/delete/:id",
      });
    }
  }
}

export default new TodoController();