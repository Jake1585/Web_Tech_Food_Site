function findWords()
{
    //creates a variable equal to the value entered in the text box
    var searchHeader = document.getElementById("cuisines-header").value
    //splits the whole page into an array or words
    var words = document.body.innerHTML.split(" ");
    ///loops through the array to get each word
    for( var i=0; i<words.length; i++)
    {      

        if(searchHeader == words[i]) //Find()------
        { 
            '<span class="highlight">' + words + '</span>'
        }        
    }
}
