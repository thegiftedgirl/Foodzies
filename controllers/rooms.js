const Room = require('../models/room');



module.exports = {
    new: newRoom,
    create, 
    index,
    show, 
    delete: delRecipe
}

function delRecipe(req, res) {
    Room.findByIdAndDelete(req.params.id, function(err, room){
        res.redirect('/rooms')
    });
}
function show(req, res) {
    Room.findById(req.params.id, function(err, room) {
        res.render('rooms/show', {
            room
        });
    });
}

function index(req, res) {
    Room.find({}, function(err, rooms) {
        console.log('rooms: ', rooms)
        res.render('rooms/index', {rooms});
    });
}
function create (req, res) {
    const room = new Room(req.body);

    room.save(function(err) {
        if(err) {
            console.log(err)
            return res.render('rooms/new')
        };
        console.log(room);
        res.redirect('/rooms');
    });
}

function newRoom(req, res) {
    res.render('rooms/new');
}
