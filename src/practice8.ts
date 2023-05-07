type Color = "red" | "green" | "blue";

const logColor = (color: Color, uppercase?: boolean) => {
  if (uppercase) {
    console.log(color.toUpperCase());
  } else {
    console.log(color.toLowerCase());
  }
};

logColor("red");
logColor("green", true);
logColor("blue", false);
