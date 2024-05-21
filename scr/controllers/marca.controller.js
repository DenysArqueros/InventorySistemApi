import { pool } from "../db.js";

export const getMarca = async (req, res) => {
  const [tabla] = await pool.query("Select * from marca");
  res.send(tabla);
};

export const createMarca = async (req, res) => {
  try {
    const { nombre } = req.body;
    await pool.query("insert into marca values(null,?)", [nombre]);
    res.status(200).json({
      message: "Insertado con exito",
    });
  } catch (error) {
    res.send({ error: error });
  }
};

export const updateMarca = async (req, res) => {
  try {
    const { nombre, id } = req.body;
    const [result] = await pool.query(
      "update marca set nombre = ? where id = ?",
      [nombre, id]
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

export const deleteMarca = async (req, res) => {
  try {
    const { id } = req.body;
    const [result] = await pool.query("delete from marca where id = ?", [
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
