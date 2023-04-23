function findWords()
{
    //creates a variable equal to the value entered in the text box
    var searchHeader = document.getElementById("cuisines-header").value
    //splits the whole page into an array or words
    var words = document.body.innerHTML.split(" ");
    ///loops through the array to get each word
    for( var i=0; i<words.length; i++)
    {      
        //This is where I get lost, i dont know how to make it so that what you enter
        //in the textbox(lookfor) matches somthing on the page. it will get highlighted. i
        //was thinking about using the find object, but im new to javascript and dont know 
        //how to properly use find yet.
        if(searchHeader == words[i]) //Find()------
        { 
            '<span class="highlight">' + words + '</span>'
        }        
    }
}
