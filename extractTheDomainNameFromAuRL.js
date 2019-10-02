// function domainName(url) {
//   //your code here

//   var miring = url.split("/");
//   var trash = [];
//   var domain = [];

//   for (let i = 0; i < miring.length; i++) {
//     if (miring[i] === "https:" || miring[i] === "http:" || miring[i] === "") {
//       trash.push(miring[i]);
//     } else {
//       domain.push(miring[i]);
//     }
//   }

//   var jDomain = domain.join("");
//   var dots = jDomain.split(".");
//   var domain = [];
//   for (let i = 0; i < dots.length; i++) {
//     if (dots[i] === "www") {
//       trash.push(dots[i]);
//     } else {
//       domain.push(dots[i]);
//     }
//   }
//   return domain[0];
// }

function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
console.log(
  domainName("https://945sev1-5sbz1shkwww94f44s1.fr"),
  "945sev1-5sbz1shkwww94f44s1"
);
