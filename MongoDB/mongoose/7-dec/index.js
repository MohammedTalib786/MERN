const mongoose = require('mongoose')
const validator = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/dec7')
    .then(v => console.log(` ~~~~~~~~~~~ Connected Succesfull ~~~~~~~~~~~ `))
    .catch(err => console.log(err))

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, '2 letter chahiye kam se kam'],
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        minlength: [2, '2 letter chahiye email me kam se kam'],
        unique: true,
        validate(v) {
            if (!validator.isEmail(v)) {
                throw new Error('email daalna hai bhalta text mat likh')
            }
        }
    },
    content: {
        type: String,
        lowercase: true,
        trim: true,
        enum: ['frontend', 'backend', 'fullstack', 'database']
    },
    videos: {
        type: Number,
        min: 2,
        validate(v) {
            if (v < 50) {
                throw new Error('50 se bada chahiye')
            }
        }
    },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const Playlist = new mongoose.model("Playlist", playlistSchema)

// Create

const create = async () => {
    try {
        // schemas models
        const jsPlaylist = new Playlist({
            name: 'javascript',
            content: 'FullStack',
            videos: 103,
            active: true
        })


        const reactPlaylist = new Playlist({
            name: 'React JS',
            content: 'Front End',
            videos: 78,
            active: true
        })

        const nodePlaylist = new Playlist({
            name: 'Node JS',
            content: 'Back End',
            videos: 80,
            active: true
        })

        const expressPlaylist = new Playlist({
            name: 'Express JS',
            content: 'Back End',
            videos: 20,
            active: true
        })

        const mongoPlaylist = new Playlist({
            name: 'Mongo DB',
            content: 'Database',
            videos: 10,
            active: true
        })

        const htmlPlaylist = new Playlist({
            name: 'HTML',
            content: 'Markup Language',
            videos: 75,
            active: true
        })



        //create one
        // const resOne = await jsPlaylist.save()
        // console.log(resOne)

        // create Many
        const res = await Playlist.insertMany([reactPlaylist, nodePlaylist, expressPlaylist, mongoPlaylist, htmlPlaylist])
        console.log(res)
    }
    catch (err) {
        console.log(err)
    }

}
// create()


// Read

const readAll = async () => {
    try {
        const read = await Playlist.find()
        console.log(read)
    }
    catch (err) {
        console.log(err)
    }
}
// readAll()


const readCondition = async () => {
    try {
        const read = await Playlist
            .find()
            .select({ name: 1, content: 1, videos: 1, _id: 0 })
        console.log(read)
    }
    catch (err) {
        console.log(err)
    }
}
readCondition()

const readQueries = async () => {
    try {
        // const read = await Playlist.find().select({ name: 1, _id: 0 })
        // const read = await Playlist.find({ content: { $in: ['Front End', 'Back End'] } }).select({ name: 1, content: 1, _id: 0 })
        // const read = await Playlist.find({ videos: { $gte: 20 } }).select({ name: 1, videos: 1,_id: 0 })
        const read = await Playlist.find({ $and: [{ content: { $in: ['FullStack', 'Back End'] } }, { videos: { $gte: 80 } }] }).select({ name: 1, _id: 0, videos: 1, content: 1 })

        console.log(read)
    }
    catch (err) {
        console.log(err)
    }
}
// readQueries()

// Update

const updating = async () => {
    try {
        const update = await Playlist.updateOne({ name: 'javascript' }, { $set: { name: 'JavaScript' } })
        console.log(update)
    }
    catch (err) {
        console.log(err)
    }
}
// updating()


// Delete

const deleete = async () => {
    try {
        const del = await Playlist.deleteOne({ name: 'javascript' })
        console.log(del)
    }
    catch (err) {
        console.log(err)
    }
}
// deleete()

// Validation

const valid = async () => {
    const newOne = new Playlist({
        name: 'R Lang',
        email: 'abc@gmail.com',
        content: '    backend    ',
        videos: 51,
        active: true
    })
    const val = await Playlist.insertMany([newOne])
    console.log(val)
}
// valid()