/*
https://leetcode.com/problems/unique-email-addresses/
emails have local name and domain name, separated by @ sign
emails with '.' will be forwarded to same address without dots
emails with '+', everything after first plus sign will be ignored

how many unique email addresses do we have?

11:35am
12:05pm
30 min

runtime 208ms
...not the best

- go through each email
- use a set to check for unique
- have a count?
- simplify email to basic local and domain name

inside the algo...
- split by the @
- split by the +
- in the +[0], remove the dots
- join the result and domain name
- add this to the set

*/

var numUniqueEmails = function(emails) {
  let set = new Set();
  let count = 0;
  emails.forEach(function(email) {
    let address = email.split('@');
    let plus = address[0].split('+');
    let output = plus[0].split('.').join('') + '@' + address[1];
    // console.log(output)
    if (!set.has(output)) {
      set.add(output);
      count++;
    }
  })
  return count;
}

let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]

console.log(numUniqueEmails(emails)) // 2

