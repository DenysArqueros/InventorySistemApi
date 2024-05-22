import  express  from "express";
import  cors from "cors"
import  marcaRoutes from "./routes/marca.routes.js";
import  unidadMedidaRoutes from "./routes/unidadMedida.routes.js";
import  productoRoutes from "./routes/producto.routes.js";

const app = express();
app.use(express.json());
app.use(cors())
app.use(marcaRoutes);
app.use(unidadMedidaRoutes);
app.use(productoRoutes);


app.use((req,res)=>{
    res.status(404).json({
        message: 'Endpoint Not Found'
    })
})


app.listen(3000);
console.log('Welcome!!!');
console.log('Server running on port 3000');