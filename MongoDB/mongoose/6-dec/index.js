const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/dec6')
    .then(v => console.log(` ~~~~~~~~~~~~ Connected Succesfully ~~~~~~~~~~~~ `))
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

const Playlist = new mongoose.model("Playlist", playlistSchema)

const create = async () => {
    try {
        // Schema Models
        const jsPlaylist = new Playlist({
            name: 'JavaScript',
            ctype: 'FullStack',
            videos: 103,
            active: true
        })

        const expressPlaylist = new Playlist({
            name: 'Express JS',
            ctype: 'Back End',
            videos: 20,
            active: true
        })

        const reactPlaylist = new Playlist({
            name: 'React JS',
            ctype: 'Front End',
            videos: 70,
            active: true
        })

        const nodePlaylist = new Playlist({
            name: 'Node JS',
            ctype: 'Back End',
            videos: 90,
            active: true
        })

        const MongoPlaylist = new Playlist({
            name: 'Mongo DB',
            ctype: 'Database',
            videos: 20,
            active: true
        })

        const htmlPlaylist = new Playlist({
            name: 'HTML',
            ctype: 'Markup Language',
            videos: 75,
            active: true
        })

        // Insert one Document
        const resOne = await expressPlaylist.save()
        console.log(resOne)

        // Insert Many Documents
        // const res = await Playlist.insertMany([reactPlaylist, nodePlaylist, MongoPlaylist, htmlPlaylist])
        // console.log(res)

    }
    catch (err) {
        console.log(err)
    }
}


// create()

const readAll = async () => {
    try {
        const reed = await Playlist
            .find()
            .select({ name: 1, ctype: 1, videos: 1, _id: 0 })

        console.log(reed)
        console.log(`Read All Function`);
    }
    catch (err) {
        console.log(err)
    }
}

readAll()

const readSimple = async () => {
    const reed = await Playlist
        .find({ active: true })
        .select({ name: 1, active: 1, _id: 0 }) //we can use this method and also can use old method of .find({}, {_})
        .skip(1)
        .limit(2)
    console.log(reed)
}

// readSimple()

const readComparisonOperators = async () => {
    const reed = await Playlist
        // .find({ videos: { $gte: 20 } })
        // .find({ name: { $nin: ["Node JS", "Express JS"] } }, { name: 1, _id: 0 })
        .find({ videos: { $eq: 20 } }, { name: 1, videos: 1, _id: 0 })
    console.log(reed)
}

// readComparisonOperators()

const readLogicalOperators = async () => {
    const reed = await Playlist
        // .find({ $and: [{ active: true }, { ctype: "Back End" }, { videos: { $lt: 50 } }] })
        // It will check only one condition even if one condition is true it will print.(here mongo DB has not more than 20 videos as well as its not a proper match in ctype)
        // .find({ $or: [{videos: {$gt: 20}}, {ctype: {$in: ['Back End', 'Front End'] }} ] })
        .find({ ctype: { $not: { $in: ['Back End', 'Database'] } } })
        .select({ name: 1, active: 1, videos: 1, _id: 0, ctype: 1 })
    console.log(reed)
}

// readLogicalOperators()

//Sort And Count
const sortAndCount = async () => {
    const reed = await Playlist
        .find()
        // .sort({ name: 1 })
        .sort({ videos: -1 })
        // .select({ name: 1, videos: 1, ctype: 1, _id: 0 })
        .countDocuments()

    console.log(reed)
}

// sortAndCount()


// Update Document

const updateDoc = async () => {
    try {
        const update = await Playlist
            .updateOne({ name: 'Node' }, { $set: { name: 'Node JS' } })

    }
    catch (err) {
        console.log(`new Error: ${err}`)
    }
}

// updateDoc()

//Delete One

const deleteOne = async () => {
    try {
        const del = await Playlist
            .deleteOne({ name: 'Express JS' })
        console.log(del)
    }
    catch (err) {
        console.log(err)
    }
}

// deleteOne()

const deleteMany = async () => {
    try {
        const del = await Playlist
            .deleteMany({ name: 'Express JS' })
        console.log(del)
    }
    catch (err) {
        console.log(err)
    }
}

// deleteMany()

