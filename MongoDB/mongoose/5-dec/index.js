const mongoose = require('mongoose')
// making database
mongoose.connect('mongodb://localhost:27017/dec5')
    .then(v => console.log(`Connection Succesfull ${v}`))
    .catch(err => console.log(err))

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }

})

//creating collection

const Playlist = new mongoose.model("playlist", playlistSchema)

const KnowingLy = (async () => {
    try {
        //creating a document

        const nodePlaylist = new Playlist({
            name: 'Node JS',
            ctype: 'Back End',
            videos: 80,
            active: true,
        })

        // const res = await nodePlaylist.save()
        // console.log(res)


        //creating many documents

        const expressPlaylist = new Playlist({
            name: 'Express JS',
            ctype: 'Back End',
            videos: 20,
            active: true,
        })

        const mongoPlaylist = new Playlist({
            name: 'Mongo DB',
            ctype: 'Database',
            videos: 30,
            active: true,
        })

        const mongoosePlaylist = new Playlist({
            name: 'mongoose',
            ctype: 'Database',
            videos: 10,
            active: true,
        })

        const htmlPlaylist = new Playlist({
            name: 'HTML',
            ctype: 'Markup',
            videos: 70,
            active: true,
        })


        const res = await Playlist.insertMany([expressPlaylist, mongoPlaylist, mongoosePlaylist, htmlPlaylist])

        console.log(res)

    }
    catch (err) {
        console.log(err)
    }
})()

// Today we learn to create a new database and new collections and inside it how to insert one and many documents

// and also how things work in mongoose just like mongo DB and noted down
