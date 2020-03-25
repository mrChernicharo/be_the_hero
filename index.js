const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/** configuração de rota **/

/** Parâmetros
 * Query params: parâmetros NOMEADOS enviados na rota após a "?" (filtros, paginação)
 * Route params: parâmetro usado para identificar recursos. Deve ser passado com ":", logo após a "/"
 * Body request: Corpo da requisição, usado para criar ou alterar recursos
*/


app.listen(3333);