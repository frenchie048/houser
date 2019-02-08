module.exports = {
    getHouses: (req, res, next) => {
        const db = req.app.get('db');
        db.get_houses().then(houses => {
            res.status(200).json(houses)
        }).catch(err => console.log(err))
    }
}










//EXAMPLE FOR DB CONNECTION
// getInventory: (req, res, next) => {
//     const db = req.app.get('db');
//     db.get_inventory().then(products => {
//         res.status(200).send(products)
//     }).catch(err => console.log(err))
// },