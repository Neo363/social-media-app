import axios from 'axios';

const url = 'http://lcoalhost:5000/posts';

export const fetchPosts = () => axios.get(url);