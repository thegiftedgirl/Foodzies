const Room = require('../models/room');

module.exports = {
    create
};

function create(req, res) {
    Room.findById(req.params.id, function(err, room){
        room.comments.push(req.body);
        room.save(function(err){
            res.redirect(`/rooms/${room._id}`);
        });

    });
}