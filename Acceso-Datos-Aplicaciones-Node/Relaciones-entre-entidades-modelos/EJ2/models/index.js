//models/index.js
import { Producto } from "./Producto.js";
import { Movimiento } from "./Movimiento.js";

//relacion de uno a muchos
//un producto puede tener muchos movimientos
Producto.hasMany(Movimiento, {
  foreignKey: "producto_id",
  as: "movimientos",
});

//relacion inversa
//un movimiento pertenece a un producto
Movimiento.belongsTo(Producto, {
  foreignKey: "producto_id",
  as: "producto",
});

export { Producto, Movimiento };
