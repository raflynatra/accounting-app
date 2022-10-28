export const BASE_URL = "http://localhost:3001/api/v1";

export const color = {
  primary: "#24186b",
  secondary: "#A0B4F2",
  tierary: "#C9D3F2",
  callToAction: "#F27A5E",
  white: "#FFFFFF",
};

export const formatDate = (date) => {
  if (date !== "" || date !== undefined) {
    date = new Date(date);
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${year}-${month}-${dayOfMonth}`;
  } else {
    console.log(date);
    date = new Date();
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }
};

export const formatDateTable = (date) => {
  const monthName = {
    1: "Januari",
    2: "Februari",
    3: "Maret",
    4: "April",
    5: "Mei",
    6: "Juni",
    7: "Juli",
    8: "Agustus",
    9: "September",
    10: "Oktober",
    11: "November",
    12: "Desember",
  };

  if (date !== "" || date !== undefined) {
    date = new Date(date);
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${dayOfMonth} ${monthName[month]} ${year}`;
  } else {
    console.log(date);
    date = new Date();
    return `${date.getDate()} ${
      monthName[date.getMonth()]
    } ${date.getFullYear()}`;
  }
};

export const validateInput = (data) => {
  const key = Object.keys(data);
  let newErrors = {};

  key.forEach((item) => {
    if (!data[item] || data[item] === "") {
      let name = item.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
        return str.toUpperCase();
      });
      newErrors[item] = `${name} can't be blank`;
    }
  });

  return newErrors;
};
