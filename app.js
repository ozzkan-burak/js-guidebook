const personName = document.querySelector("#name");
const personSurname = document.querySelector("#surname");
const personMail = document.querySelector("#email");

const form = document.querySelector("#guidebook-from");

document.addEventListener("submit", save);

const checkData = (person) => {
  for (const value in person) {
    if (person[value]) {
      console.log(person[value]);
    } else {
      console.log("boş değer var");
      const result = {
        status: false,
        message: "Boi alan bırakmayınız",
      };
      return result;
    }
  }
};

const save = (e) => {
  e.preventDefault();

  const personToAdd = {
    name: personName.value,
    surname: personSurname.value,
    mail: personMail.value,
  };

  checkData(personToAdd);
};
