const palindromes = function(originalText) {
    Letters = originalText.split("");
    oneWord = []
    for(let i=0; i<=originalText.length-1; i++){
        if (Letters[i]==" "){
        oneWord += "";
        }
        else if(Letters[i]=="."){
        oneWord += "";
        }
        else if(Letters[i]==","){
        oneWord += "";
        }
        else if(Letters[i]==";"){
        oneWord += "";
        }
        else if(Letters[i]==":"){
        oneWord += "";
        }
        else if(Letters[i]=="?"){
        oneWord += "";
        }
        else if(Letters[i]=="!"){
        oneWord += "";
        }
        else {
        oneWord += Letters[i];    
        }
    }

    newWord = []
    for(let i=originalText.length-1; i>=0; i--){
        if (Letters[i]==" "){
        newWord += "";
        }
        else if(Letters[i]=="."){
        newWord += "";
        }
        else if(Letters[i]==","){
        newWord += "";
        }
        else if(Letters[i]==";"){
        newWord += "";
        }
        else if(Letters[i]==":"){
        newWord += "";
        }
        else if(Letters[i]=="?"){
        newWord += "";
        }
        else if(Letters[i]=="!"){
        newWord += "";
        }
        else {
        newWord += Letters[i];    
        }
    }
    if(newWord.toLowerCase()==oneWord.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
