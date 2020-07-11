const pizzas = require('../database/pizzas.json');

module.exports = {
    // exibindo a página index (home)
    index: (req, res) => {
        res.render('pizzas', { pizzas })
    },
    show: (req, res) => {
        // Capturando o id da pizza
        let idPizza = req.params.id

        // Forma de encontrar a pizza
        // USANDO O FIND:
        // no find você usa array.find(elemento => elemento == condição);
        let pizzaSelecionada = pizzas.find(pizza => pizza.id == idPizza)

        // USANDO O FILTER:
        // primeiro cria a função para verificar a condição
        // cada um dos elementos do array iterado vai entrar como parâmetro da função
        // function idPizzaConfere(pizzaDaVez) {
        // logo podemos acessar a propriedade id da posição iterada
        // LEMBRE-SE DO RETURN
        // console.log(pizzaDaVez.ingredientes)
        // return pizzaDaVez.ingredientes[1] == "gorgonzola";
        // }
        // let pizzaSelecionada = pizzas.filter(idPizzaConfere)

        res.send(pizzaSelecionada);
    }
    // sem arrow function
    // index(req, res, next) {
    //     res.render('pizzas', { pizzas });
    // }
}