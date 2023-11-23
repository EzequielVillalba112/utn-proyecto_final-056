export const ValidEmpty = (title, description) => {
  let title1 = document.querySelector("#descripcion_titulo");
  let description1 = document.querySelector("#descripcion_tarea");

  if (title === undefined && description === "") {
    if (title === undefined) {
      title1.classList.add("is-invalid");
    }
    if (description === "") {
      description1.classList.add("is-invalid");
    }

    setTimeout(() => {
      title1.classList.remove("is-invalid");
      description1.classList.remove("is-invalid");
    }, 2000);

    return false;
  } else {
    return true;
  }
};

export const CheckDates = (dateStart, dateEnd) => {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
  var day = now.getDate();

  var dateNow = year + "-" + month + "-" + day;

  if (dateStart === "" && dateEnd === "") {
    alertDate();
    return false;
  } else if (dateStart > dateEnd) {
    alertDate();
  } else if (dateStart < dateNow) {
    alertDate();
  }else if (dateEnd < dateNow) {
    alertDate();
  }else{
    return true;
  }
};

const alertDate = () => {
  const dateStart1 = document.querySelector("#date-start");
  const dataEnd1 = document.querySelector("#date-end");

  dateStart1.classList.add("is-invalid");
  dataEnd1.classList.add("is-invalid");

  setTimeout(() => {
    dateStart1.classList.remove("is-invalid");
    dataEnd1.classList.remove("is-invalid");
  }, 2000);
};
