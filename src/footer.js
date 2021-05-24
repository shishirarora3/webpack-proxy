const button = document.createElement("button");
button.innerText = "get mails";
button.onclick = () => {
  fetch(
    "https://outlook-sdf.office.com/owa/service.svc?action=GetItem&app=Mail&n=27"
  ).then(console.log);
};
export default button;
