const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const submitBtn = document.getElementById("submit")
const deleteBtn = document.getElementById("delete")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}

const submitFunc = () => {
    axios.get("http://localhost:4000/api/submitFunc")
    .then(res => {
        const data = res.data;
        alert(data);
})
}

const deleteFortune = () => {
    axios.delete("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
})
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
submitBtn.addEventListener('click', submitFunc)
deleteBtn.addEventListener('click', deleteFortune)