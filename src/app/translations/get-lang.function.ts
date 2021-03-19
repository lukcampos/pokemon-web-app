export function GetLang() {
  let configLang = localStorage.getItem("language");
  if (configLang) {
    return configLang;
  } else {
    var language = window.navigator.language.toLocaleLowerCase()
    if (language.includes("pt")) {
      return "pt";
    } else {
      return "en";
    }
  }
}
