const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeople = document.getElementById("numberOfPeople");
const totalPerPerson = document.getElementById("perPersonTotal");

let noOfPerson = Number(numberOfPeople.innerText);

const calculateBill = () => {

  const total = Number(billInput.value);
  const tipPercentage = Number(tipInput.value) / 100;
  const tipAmout = total * tipPercentage;
  const totalAmount = total + tipAmout;
  const perPersonAmount = totalAmount / noOfPerson;
  totalPerPerson.innerText = `$${perPersonAmount.toFixed(2)}`;
  console.log({ totalAmount });
}

const increasePeople = () => {
  noOfPerson += 1;
  numberOfPeople.innerText = noOfPerson;
  calculateBill();
}

const decreasePeople = () => {
  if (noOfPerson <= 1) return;
  noOfPerson -= 1;
  numberOfPeople.innerText = noOfPerson;
  calculateBill();

}

calculateBill();