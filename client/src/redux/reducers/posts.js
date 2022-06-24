import { INIT_STATE } from "../../constant";
import { getType, getPosts } from "../actions";

export default function postsReducers(state=INIT_STATE.posts, action){
    switch(action.type){
        case getType(getPosts.getPostsRequest):// case 'getPostsRequest
            return {...state, isLoading: true};
        case getType(getPosts.getPostSuccess):
            return {...state, isLoading: false};
        case getType(getPosts.getPostFailure):
            return {...state, isLoading: false}
        default:
            return state
    }
}