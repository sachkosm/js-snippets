
Whether you declare a component as a function or a class, it must never modify its own props!


All React components must act like pure functions with respect to their props.

Example:

Pure function:
function sum(a, b) {
  return a + b;
}


Impure function - function that modify its own input:
function withdraw(account, amount) {
  account.total -= amount;
}
