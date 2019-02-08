module.exports = {
    getHouses: (req, res, next) => {
        const db = req.app.get('db');
        db.get_houses().then(houses => {
            res.status(200).json(houses)
        }).catch(err => console.log(err))
    },
    addHouse: (req, res, next) => {
        const db = req.app.get('db');
        const { name, address, city, state, zip } = req.body;

        db.add_house([name, address, city, state, zip]).then(houses => {
            res.status(200).json(houses)
        }).catch(err => console.log(err))
    },
    deleteHouse: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.delete_house(id).then(houses => {
            res.status(200).json(houses)
        }).catch(err => console.log(err))
    }
    //, editHouse: (req, res, next) => {}
}