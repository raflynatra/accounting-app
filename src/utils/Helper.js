export const BASE_URL = "http://localhost:3001/api/v1";

export const color = {
  primary: "#24186b",
  secondary: "#A0B4F2",
  tierary: "#C9D3F2",
  callToAction: "#F27A5E",
  white: "#FFFFFF",
};

export const formatDate = (date) => {
  date = new Date(date);
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  return `${year}-${month}-${dayOfMonth}T${hour}:${minutes}`;
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
