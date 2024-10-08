// Regular Expressions\n
var a = str.search(/CheatSheet/i);
Modifiers
i  // perform case-insensitive matching
g  // perform a global match
m  //perform multiline matching
// Patterns
\  // Escape character
\d // find a digit
\s  // find a whitespace character
\b  //find match at beginning or end of a word
n +   // contains at least one n
    n *   //contains zero or more occurrences of n
    n ?   //contains zero or one occurrences of n
^    //Start of string
    $    //End of string
\    //uxxxxfind the Unicode character
.    //Any single character
(a | b)   ///a or b
    (...)   //Group section
[abc]   ///n range (a, b or c)
[0 - 9]    //any of the digits between the brackets
[^ abc]   //Not in range
\s        //White space
a ?        //Zero or one of a
    a *       //Zero or more of a
        a *?     //Zero or more, ungreedy
        a +     //One or more of a
            a +?    //One or more, ungreedy
            a{ 2 }    //Exactly 2 of a
a{ 2,}   //2 or more of a
a{, 5 }    //Up to 5 of a
a{ 2, 5 }   //2 to 5 of a
a{ 2, 5 }?   //2 to 5 of a, ungreedy
[: punct: ]  //Any punctu­ation symbol
[: space:]  //Any space character
[: blank: ]  //Space or tab