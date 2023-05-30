const { 
    addBookHandler,
    getDetailBookByIdHandler,
    getAllBooksHandler,
    deleteBookByIdHandler,
    editBookByIdHandler
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getDetailBookByIdHandler
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookByIdHandler
    }
];

module.exports = routes;