function findWords()
{
    // searches for the recipe name in the header div
    var searchHeader = document.getElementById("cuisines-header").value

    var words = document.body.innerHTML.split(" ");
    // for loop to get search each word found in the array
    for( var i=0; i<words.length; i++)
    {      

        if(searchHeader == words[i])
        { 
            return words
        }        
    }
}
