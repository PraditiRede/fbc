import axios from 'axios';

const url = "http://localhost:4000/books";
const key = 'AIzaSyDPAr8qCQStR1K42vVM96XD9uiqjp9O4Kk';

export const fetchBooks = () => axios.get(url);
export const createBook = (newBook) => axios.post(url, newBook);

export default{
    searchBooks: function(query){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+query+"&key="+key);
    },
};
