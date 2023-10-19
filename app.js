const personName = document.querySelector("#name");
const personSurname = document.querySelector("#surname");
const personMail = document.querySelector("#email");

const form = document.querySelector("#guidebook-from");

const save = (e) => {
  e.preventDefault();

  const personToAdd = {
    name: personName.value,
    surname: personSurname.value,
    mail: personMail.value,
  };

  const checkDataResult = checkData(personToAdd);
  if (checkDataResult.status) {
    console.log("Başarılı");
  } else {
    console.log("Başarısız");
  }
};

document.addEventListener("submit", save);

const checkData = (person) => {
  for (const value in person) {
    const result = new Object();
    if (person[value]) {
      console.log("TEST");
      result.status = true;
      result.message = "";
    } else {
      result.status = false;
      result.message = "Boş alan bırakmayınız";
    }
    return result;
  }
};
