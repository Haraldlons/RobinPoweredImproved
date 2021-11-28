console.log("Content script running!");

const id = setInterval(() => {
  if (!isInTOSPage()) return;
  const elements = document.getElementsByClassName('btn continue');
  if (elements.length > 0) {
    elements[0].click();
    clearInterval(id);
  }
}, 500);

const id2 = setInterval(() => {
  console.log("Running interval 2");
  const elements = Array.from(document.getElementsByTagName('p'));
  if (elements.length === 0) return; 
  for (index in elements) {
    const element = elements[index];
    if (element.innerText.includes("StartupLab Oslo")) {
      console.log("Found element with StartupLab Oslo");
      console.log(element);
      element.parentElement.parentElement.children[0].click()
      clearInterval(id2);
    }
  }
}, 500);

const id3 = setInterval(() => {
  console.log("Running interval 3");
  const elements = Array.from(document.getElementsByTagName('button'));
  if (elements.length === 0) return;
  for (index in elements) {
    const element = elements[index];
    if ( element.innerText.includes("Set my preferred office")
      && !element.attributes.hasOwnProperty('disabled')  ) {
      console.log("Found element with Set my preferred office");
      console.log(element);
      element.click();
      clearInterval(id3);
    }
  }
}, 500);




const prefferedOfficeUrl = "https://dashboard.robinpowered.com/onboarding/preferred-office";

const isInTOSPage = () => {
  const url = window.location.href;
  return url.includes("tos-agreement");
}