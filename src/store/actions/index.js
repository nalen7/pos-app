export const ADD='ADD';
export const DEL='DEL';

export function add(){
    return{
        type:ADD
    };
}
export function del(){
    return {
        type : DEL
    }
}