export const inc = () =>({type: 'INC'});//action creator
export const dec = () =>({type:'DEC'});
export const rnd = ()=>{
    const value = Math.floor(Math.random()*10);
    return  {type: 'RND', value}
};