const express = require("express");
const app = express();
app.use(express.json());
const cookieparser = require("cookie-parser")
app.use(cookieparser());


const cors = require("cors")
app.use(cors({
    origin:["http://localhost:8081", "http://localhost:3001"],
    methods:["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
})
);

const ProductRoute = require("./Routes/productRoute")
app.use("/", ProductRoute)

// const userRoutes = require("./Routes/userRoute")
// app.use("/user", userRoutes)

// const createCartBucket = require("./Routes/cartRoutes")
// app.use("/cart", createCartBucket)

let port = 8080;
app.listen(port, () => {
    console.log(`server is running on ${port}`)
});