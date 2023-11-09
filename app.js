const personName = document.querySelector("#name");
const personSurname = document.querySelector("#surname");
const personMail = document.querySelector("#email");
const container = document.querySelector(".container");
const personList = document.querySelector("#person-list");

const form = document.querySelector("#guidebook-form");

const showMessage = (message = "", status) => {
  const messageContainer = document.createElement("div");
  messageContainer.id = "message-continer";
  messageContainer.textContent = message;
  messageContainer.className = "info";

  if (status) {
    messageContainer.classList.add("success-info");
  } else {
    messageContainer.classList.add("error-info");
  }

  // if (status === null) {
  //   const messageID = document.querySelector("#message-container");
  //   document.querySelector(".container").removeChild(messageID);
  // }

  container.insertBefore(messageContainer, form);

  const successContainer = document.querySelector(".success-info");
  if (successContainer) {
    setTimeout(() => {
      successContainer.remove();
    }, 1000);
  }
};

const handleAddToPersonlist = (personToAdd) => {
  console.table(personToAdd);
  const tableElement = document.createElement("tr");
  tableElement.innerHTML = `
    <td>${personToAdd.name}</td>
    <td>${personToAdd.surname}</td>
    <td>${personToAdd.mail}</td>
    <td>
      <button class="btn btn--edit">
        <i class="far fa-edit"></i>
      </button>
      <button class="btn btn--delete">
        <i class="far fa-trash-alt"></i>
      </button>
    </td>
  `;

  personList.appendChild(tableElement);
};

const save = (e) => {
  e.preventDefault();

  const personToAdd = {
    name: personName.value,
    surname: personSurname.value,
    mail: personMail.value,
  };

  const checkDataResult = checkData(personToAdd);
  const messageContainerID = document.querySelector("#message-continer");
  if (!messageContainerID) {
    if (checkDataResult.status) {
      handleAddToPersonlist(personToAdd);
      showMessage("Kayıt Başarılı", checkDataResult.status);
    } else {
      showMessage(
        `!!Hata oluştu - ${checkDataResult.message}`,
        checkDataResult.status
      );
    }
  }
};

document.addEventListener("submit", save);

const clearValues = () => {
  personName.value = "";
  personSurname.value = "";
  personMail.value = "";
};

const checkData = (person) => {
  for (const value in person) {
    const result = new Object();
    if (person[value]) {
      result.status = true;
      result.message = "";
    } else {
      result.status = false;
      result.message = "Boş alan bırakmayınız";
    }
    clearValues();
    return result;
  }
};

const focusElement = () => {
  const messageID = document.getElementById("message-continer");
  if (messageID) {
    messageID.remove();
  }
};
