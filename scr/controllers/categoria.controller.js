import { pool } from "../db.js";

export const getCategoria = async (req, res) => {
  const [tabla] = await pool.query("Select * from categoria");
  res.send(tabla);
};

export const createCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;
    await pool.query("insert into categoria values(null,?)", [nombre]);
    res.status(200).json({
      message: "Insertado con exito",
    });
  } catch (error) {
    res.send({ error: error });
  }
};

export const updateCategoria = async (req, res) => {
  try {
    const { nombre, id } = req.body;
    const [result] = await pool.query(
      "update categoria set nombre = ? where id = ?",
      [nombre, id]
    );
    result.affectedRows <= 0
      ? res.status(404).json({
        message: "Categoria no encontrada",
      })
      : res.status(200).json({
        message: "Categoria actualizada con exito",
      });
  } catch (error) {
    res.send({ error: error });
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("delete from categoria where id = ?", [
      id,
    ]);
    return result.affectedRows <= 0
      ? res.status(404).json({
        message: "Categoria no encontrada",
      })
      : res.status(200).json({
        message: "Categoria eliminada con exito",
      });
  } catch (error) {
    res.send({ error: error });
  }
};
