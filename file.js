== -> Equal to (loose) // only the value
=== -> Equal to (strict) // value and data type
!= -> not equal to (loose)
!== -> not equal to (strict)
> -> greater than
< -> less than
>= -> greater than or equal to
<= -> less than or equal to 


let age =20;
let hasId=true;


console.log(age >= 18 && hasId ===true);
console.log(age >= 18 || hasId ===false);
console.log (!hasId);