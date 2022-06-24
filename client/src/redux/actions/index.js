import {createActions} from 'redux-actions';

export const getType = (reducerAction) =>{
    return reducerAction().type;
}

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostSuccess: (payload) => payload,
    getPostFailure: (err) => err
})
/* 
{
    type: 'getPostSuccess;
    payload: {
        name: 'test'
    }
}
*/