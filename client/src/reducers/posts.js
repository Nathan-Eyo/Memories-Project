export default (posts = [], action) =>{
switch (action.type) {
    case 'FETCH_ALL':
        return posts;
        break;
    case 'CREATE':
        return posts;
    default:
        return posts;
}
}

