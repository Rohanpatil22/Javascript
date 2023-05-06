const  addition=(x,y)=>{

    return x+y;
};
const  substaction=(x,y)=>{
    // let max_num=Math.max(x,y);
    // let min_num=Math.min(x,y);
    return x-y;
};

const multiplication=(x,y)=>{

    return x*y;

};

const division=(x,y)=>{

    return x/y;

};

let add_ans=addition(10,5);
let sub_ans=substaction(10,5);
let div_ans=division(10,5);
let mul_ans=multiplication(10,5);

console.log(add_ans);
console.log(sub_ans);
console.log(div_ans);
console.log(mul_ans);