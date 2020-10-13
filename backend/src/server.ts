import { App } from "./app";

const port = process.env.PORT || 3333;

App.listen(port, () => {
    console.log(`Servidor online em http://localhost:${port}`);
});