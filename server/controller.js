module.exports = {
    //DON"T CHANGE THIS CODE, USE AS INSPIRATION
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
// REQUIRED TO DO A POST PUT AND DELETE request!!!!
    //look into back-end-2 for how to do those
    getFortune: (req, res) => {
        const fortune = [
            "A friend is a present you give yourself.",
            "Any day above ground is a good day.",
            "Do not demand for someone's soul if you already got their heart.",
            "If you continually give, you will continually have.",
            "The person who will not stand for something will fall for anything.",
        ];

    let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },
//post
    createFortune: (req, res) => {
        let {string} = req.body
        let newFort = {
            string
        }
        fortune.push(newFort)
        res.status(200).send(fortune)
    },

    submitFunc: (req, res) => {
        const alertBox = ["Fortune Sent"];

        res.status(200).send(alertBox)
    },

    deleteFortune: (req, res) => {
        let index = fortune.findIndex(elem => elem.id === +req.params.id)
        fortune.splice(index,1)
        res.status(200).send(fortune)
    }

}