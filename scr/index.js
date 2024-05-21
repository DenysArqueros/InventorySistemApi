import  express  from "express";
import  marcaRoutes from "./routes/marca.routes.js";


const app = express();
app.use(express.json())
app.use(marcaRoutes);

app.use((req,res)=>{
    res.status(404).json({
        message: 'Endpoint Not Found'
    })
})
app.listen(3000);
console.log('Welcome!!!');
console.log('Server running on port 3000');