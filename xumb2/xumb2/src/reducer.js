const reducer=(state,action)=>{
 switch(action.type){
     case 'Decremenet':
         return state-1;
         default :
         return state
 }
       
}

export default reducer