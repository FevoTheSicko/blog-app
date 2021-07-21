const { Paragraph } = require('../models')

const paragraphdata = [
    {
        title: "my life",
        paragraph: "this is my life",
        user_id: 1
    },
    {
        title: "my pets",
        paragraph: "these are my pets",
        user_id: 1
    }
]

const seedparagraphs = () => Paragraph.bulkCreate(paragraphdata)

module.exports = seedparagraphs;

