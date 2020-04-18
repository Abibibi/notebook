const Thought = require('../Models/Thought');
const User = require('../Models/User');

const addThought = async (req, res) => {
    const { content } = req.body;
    const { id } = req.user;

    const newThought = new Thought({
        content,
        author: id
    });

    const thoughtAdded = await newThought.save();

    // to include new thought in author document
    const author = await User.findOne({ _id: id });
    await author.thoughts.push(thoughtAdded.id);
    await author.save();

    console.log(author);

    res.status(200).json('New thought added to database');
};


const allThoughts = async (req, res) => {
    const { id } = req.user;

    const allThoughts = await Thought.find({ author: id })

    res.status(200).json(allThoughts);
};

module.exports = {
    addThought,
    allThoughts
}