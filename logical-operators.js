Logical operators are typically used with Boolean (logical) values. When they are, they return a Boolean value. However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they will return a non-Boolean value.


DescriptionSection
The logical operators are described in the following table (the expressions may be of any type, not just boolean):

Operator	Syntax	Description
Logical AND (&&)	expr1 && expr2	If expr1 can be converted to true, returns expr2; else, returns expr1.
Logical OR (||)	expr1 || expr2	If expr1 can be converted to true, returns expr1; else, returns expr2.
Logical NOT (!)	!expr	Returns false if its single operand can be converted to true; otherwise, returns true.
If a value can be converted to true, the value is so-called truthy. If a value can be converted to false, the value is so-called falsy.

Examples of expressions that can be converted to false are:

null;
NaN;
0;
empty string ("" or '' or ``); 
undefined.
Even though the && and || operators can be used with operands that are not Boolean values, they can still be considered boolean operators since their return values can always be converted to boolean primitives. To explicitly convert their return value (or any expression in general) to the corresponding boolean value, use a double NOT operator or the Boolean constructor.

Short-circuit evaluationSection
As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules:

(some falsy expression) && expr is short-circuit evaluated to the falsy expression;
(some truthy expression) || expr is short-circuit evaluated to the truthy expression.
Short circuit means that the expr parts above are not evaluated, hence any side effects of doing so do not take effect (e.g., if expr is a function call, the calling never takes place). This happens because the value of the operator is already determined after the evaluation of the first operand. See example:

function A(){ console.log('called A'); return false; }
function B(){ console.log('called B'); return true; }

console.log( A() && B() );
// logs "called A" due to the function call,
// then logs false (which is the resulting value of the operator)

console.log( B() || A() );
// logs "called B" due to the function call,
// then logs true (which is the resulting value of the operator)
Operators precedenceSection
Please note that the following expressions are not equivalent due to operator precedence.

false &&  true || true      // returns true, unlike one might expect
false && (true || true)     // returns false, as expected
Logical AND (&&)Section
The following code shows examples of the && (logical AND) operator.

a1 = true  && true       // t && t returns true
a2 = true  && false      // t && f returns false
a3 = false && true       // f && t returns false
a4 = false && (3 == 4)   // f && f returns false
a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
a6 = false && 'Cat'      // f && t returns false
a7 = 'Cat' && false      // t && f returns false
a8 = ''    && false      // f && f returns ""
a9 = false && ''         // f && f returns false
Logical OR (||)Section
The following code shows examples of the || (logical OR) operator.

o1 = true  || true       // t || t returns true
o2 = false || true       // f || t returns true
o3 = true  || false      // t || f returns true
o4 = false || (3 == 4)   // f || f returns false
o5 = 'Cat' || 'Dog'      // t || t returns "Cat"
o6 = false || 'Cat'      // f || t returns "Cat"
o7 = 'Cat' || false      // t || f returns "Cat"
o8 = ''    || false      // f || f returns false
o9 = false || ''         // f || f returns ""
Logical NOT (!)Section
The following code shows examples of the ! (logical NOT) operator.

n1 = !true               // !t returns false
n2 = !false              // !f returns true
n3 = !''                 // !f returns true
n4 = !'Cat'              // !t returns false
Double NOT (!!)
It is possible to use a couple of NOT operators in series to explicitly force the conversion of any value to the corresponding boolean primitive. The conversion is based on the "truthyness" or "falsyness" of the value (see truthy and falsy).

The same conversion can be done through the Boolean function.

n1 = !!true                   // !!truthy returns true
n2 = !!{}                     // !!truthy returns true: any object is truthy...
n3 = !!(new Boolean(false))   // ...even Boolean objects with a false .valueOf()!
n4 = !!false                  // !!falsy returns false
n5 = !!""                     // !!falsy returns false
n6 = !!Boolean(false)         // !!falsy returns false
 

Conversion rules for booleansSection
Converting AND to OR
The following operation involving booleans:

bCondition1 && bCondition2
is always equal to:

!(!bCondition1 || !bCondition2)
Converting OR to AND
The following operation involving booleans:

bCondition1 || bCondition2
is always equal to:

!(!bCondition1 && !bCondition2)
Converting between NOTs
The following operation involving booleans:

!!bCondition
is always equal to:

bCondition
Removing nested parenthesesSection
As logical expressions are evaluated left to right, it is always possible to remove parentheses from a complex expression following some rules.

Removing nested AND
The following composite operation involving Booleans:

bCondition1 || (bCondition2 && bCondition3)
is always equal to:

bCondition1 || bCondition2 && bCondition3
Removing nested OR
The following composite operation involving Booleans:

bCondition1 && (bCondition2 || bCondition3)
is always equal to:

!(!bCondition1 || !bCondition2 && !bCondition3)
