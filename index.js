function introduction(name) {
    if(name === "Aki") {
        return "Hi, my name is Aki.";
    } else if (name === "Samip"){
        return "Hi, my name is Samip.";
    }
;}
function introductionWithLanguage(name, language) {
    if(name === "Aki"){
        return "Hi, my name is Aki and I am learning to program in Ember.js.";
    } else if (name === "Samip"){
        return "Hi, my name is Samip and I am learning to program in React.";
    }

;}

function introductionWithLanguageOptional(name, language = "Javascript") {
    if(language === "Javascript"){
        return "Hi, my name is Gracie and I am learning to program in JavaScript.";
    } else if (language === "Python"){
        return "Hi, my name is Gracie and I am learning to program in Python.";
    }
;}

console.log(introductionWithLanguageOptional("Gracie", "Python"));

console.log(introductionWithLanguageOptional("gracie"));

