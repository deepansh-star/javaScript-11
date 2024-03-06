const books = [
    {
        title: "To the Lighthouse",
        auther: "Virginia Woolf",
        year: 1927
    } ,
    {
        title: "The Alchemist",
        auther: "Paulo Coelho",
        year: 1988
    } ,
    {
        title: "The Hobbit",
        auther:  "J.R.R. Tolkien" ,
        year: 1937
    } 
] ;

function logTitle(title) {
    title.sort();
    console.log(title.join(", ")) ;
}

function extractTitle(books, callback) {
const title = books.map((books)=>
    books.title ) ;
    callback(title) ;

}

extractTitle(books, logTitle) ;











