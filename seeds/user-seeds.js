const { User } = require('../models');

const userData = [
    {
        username: "kelly_mae",
        twitter: "kelmae",
        github: "kelmae",
        email: "kelmae@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "kale_b",
        twitter: "kaleb",
        github: "kaleb",
        email: "kale_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "hananh_c",
        twitter: "hannah",
        github: "hannah",
        email: "hannah_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "max_n",
        twitter: "maxnorris",
        github: "maxnorris",
        email: "max_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "deb_r",
        twitter: "debravi23",
        github: "debravi23",
        email: "deb_r@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "chirs",
        twitter: "chris_w",
        github: "chrisa",
        email: "chrisa@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;