import { pool } from "../db.js";

export const getUnidadMedida = async (req, res) => {
  const [tabla] = await pool.query("Select * from unidadMedida");
  res.send(tabla);
};

export const createUnidadMedida = async (req, res) => {
  try {
    const { nombre } = req.body;
    await pool.query("insert into unidadMedida values(null,?)", [nombre]);
    res.status(200).json({
      message: "Insertado con exito",
    });
  } catch (error) {
    res.send({ error: error });
  }
};

export const updateUnidadMedida = async (req, res) => {
  try {
    const { nombre, id } = req.body;
    const [result] = await pool.query(
      "update unidadMedida set nombre = ? where id = ?",
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

export const deleteUnidadMedida = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("delete from unidadMedida where id = ?", [
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
