const Room = require('../models/room');



module.exports = {
    create,
   
}




function create(req, res) {
    Room.findById(req.params.id, function(err, room){
        console.log(err);
        room.comments.push(req.body);
        room.save(function(err,room){
            console.log('err',err)
            console.log('room', room)
            res.redirect(`/rooms/${room._id}`);
        });

    });
}