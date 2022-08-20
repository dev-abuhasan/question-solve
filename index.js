// question no 5
class STUDENTS {
    constructor(batch, credits, totalCreditHourAtt, gpa) {
        this.batch = batch;
        this.credits = credits;
        this.totalCreditHourAtt = totalCreditHourAtt;
        this.gpa = gpa;
    }
    print() {
        alert(`
        Batch: ${this.batch}, 
        Credits: ${this.credits},
        Total Credit: ${this.totalCreditHourAtt},
        GPA: ${this.gpa}
        `)
    }
}
let test = new STUDENTS("JavaScript");
// test.print();

const getCrrStudent = (e) => {
    const getMinhaj = document.getElementById('minhaj');
    const getTanjimul = document.getElementById('tanjimul');
    const getRifal = document.getElementById('rifal');
    if (e === 'minhaj') {
        getTanjimul.checked = false;
        getRifal.checked = false;
        let result = new STUDENTS("CSE", "112", "465", 3.95);
        result.print();

    } else if (e === 'tanjimul') {
        getMinhaj.checked = false;
        getRifal.checked = false;
        let result = new STUDENTS("EEE", "115", "467", 3.21);
        result.print();
    } else if (e === 'rifal') {
        getMinhaj.checked = false;
        getTanjimul.checked = false;
        let result = new STUDENTS("MECHANICAL", "118", "550", 2.21);
        result.print();
    }

}




// question no 4
const makeSandwiches = () => {
    const getBread = document.getElementById("bread").value;
    const getCheese = document.getElementById("cheese").value;

    if (getBread && getCheese) {
        console.log(Math.floor((Number(getBread) + Number(getCheese)) / 3));
    } else {
        alert('Enter the bread & cheese number');
    }
}


// question no 5
const rainBowColors = () => {
    const rainBowColors = ["Red", "orange", "yellow", "green", "blue", "indigo", "violet"];

    const result = rainBowColors.toString();
    return `The colors of the rainbow are ${result}`
};

console.log(rainBowColors());