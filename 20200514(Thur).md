# TIL-Today-I-Learned 20200514(Thur)

I decided to study linked lists for my cub3D assignment.
The problems with the tag "Stack" seemed relevant so I chose the following problem for today's challenge:

### Leetcode 1021. Remove Outermost Parentheses

This actually doesn't need to be solved with linked lists, but I used them anyway.
I created a push function which adds a new list at the end of the existing one if there exists any.

The input is supposed to be a valid parentheses string meaning I won't get something like "((()".
Every open parentheses will be closed.

The algorithm behind this problem is simple. (Although I looked it up after a few hours of struggling)
Count 1 for '(' and -1 for ')'.
So if the input looked like `(())()`
then the numbers go `121010`
As long as they are valid parentheses strings there is a pattern with the numbers.
The outermost parentheses correspond to one of two cases:
1. If the number is 1 and the character is `(`
2. If the number is 0 and the character is `)`
So only those that do not match the conditions above should be returned as the output.

I could have created a string of the size of the input string,
but insted I had each character saved in a list.
As a result solution was faster than 6.85% of online submissions.
So I changed my code without using linked lists and its was faster than 100% of online submissions.

1. I learned how to make a list, add it in the front and at the end of an existing list, and to remove it.
2. I learned the algorithm behind the problem 1021.
3. I learned three different ways of linked lists. (Stack, queue, and the one that links both the previous and next lists)
