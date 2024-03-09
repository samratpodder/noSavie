export default function UseWhatsapp(mobileNumber: string, message: string) {
  const number = mobileNumber.replace(/[^\w\s]/gi, '').replace(/ /g, '');  
  let url = `https://web.whatsapp.com/send?phone=${number}`;
  url += `&text=${encodeURI(message)}&app_absent=0`;
  window.open(url);
};