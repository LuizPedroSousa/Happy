import { App } from "./app";

const port = process.env.PORT || 3333;

App.listen(port, () => {
    console.log(`-🚀 Server Started in http://localhost:${port}`);
});