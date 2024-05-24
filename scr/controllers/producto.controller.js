import { pool } from "../db.js";

export const getProducto = async (req, res) => {
  const [tabla] = await pool.query("select p.id, p.nombre, p.precio, p.costo, p.stock,m.nombre as marca,um.nombre as unidadMedida,"+ 
  "c.nombre as categoria from producto p inner join marca m on p.id_marca = m.id inner join UnidadMedida um " + 
  "on p.id_unidadmedida = um.id inner join Categoria c on p.id_categoria = c.id");
  res.send(tabla);
};

export const createProducto = async (req, res) => {
  try {
    const { nombre, precio, costo, stock, marcaId, unidadId, categoriaId } =
      req.body;
    await pool.query(
      "insert into producto (id,nombre,precio,costo,stock,id_marca,id_unidadmedida,id_categoria) values (null,?,?,?,?,?,?,?)",
      [nombre, precio, costo, stock, marcaId, unidadId, categoriaId]
    );
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
    const { id } = req.params;
    const [result] = await pool.query("delete from producto where id = ?", [
      id,
    ]);
    return result.affectedRows <= 0
      ? res.status(404).json({
          message: "Producto no encontrado",
        })
      : res.status(200).json({
          message: "Producto eliminado con exito",
        });
  } catch (error) {
    res.send({ error: error });
  }
};
