import { pool } from "../db.js";

export const getProducto = async (req, res) => {
  const [tabla] = await pool.query("select * from producto");
  res.send(tabla);
};

export const createProducto = async (req, res) => {
  try {
    const { nombre, precio, descripcion, stock } = req.body;
    await pool.query("insert into producto values(null,?,?,?,?)", [
      nombre,
      precio,
      descripcion,
      stock,
    ]);
    res.status(200).json({
      message: "Insertado con exito",
    });
  } catch (error) {
    res.send({ error: error });
  }
};

export const updateProducto = async (req, res) => {
  try {
    const { id, nombre, precio, descripcion, stock } = req.body;
    const [result] = await pool.query(
      "update producto set nombre = ? , precio = ? , descripcion = ? , stock = ? where id = ?",
      [nombre, precio, descripcion, stock, id]
    );
    result.affectedRows <= 0
      ? res.status(404).json({
          message: "Marca no encontrada",
        })
      : res.status(200).json({
          message: "Marca actualizada con exito",
        });
  } catch (error) {
    res.send({ error: error });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.body;
    const [result] = await pool.query("delete from producto where id = ?", [
      id,
    ]);
    return result.affectedRows <= 0
      ? res.status(404).json({
          message: "Marca no encontrada",
        })
      : res.status(200).json({
          message: "Marca eliminada con exito",
        });
  } catch (error) {
    res.send({ error: error });
  }
};
