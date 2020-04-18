const Thought = require('../Models/Thought');


const addThought = async (req, res) => {
    const { content } = req.body;
    const { id } = req.user;

    const newThought = new Thought({
        content,
        author: id
    });

    await newThought.save();

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