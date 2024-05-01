1. It will print a `3` to the console, given that the length of `prices` is 3, and `i` is instantiated as a `var`, meaning the `console.log` can "see" it. 

2. It will print `150` to the console.
The last iteration of the loop defines (with `var` and thus the scope is for the entire function) runs on `prices[2]`, which is `300`, and is then multiplied by `.5` to give us `150`.

3. It will print `150` to the console.
Since we instantiate `finalPrice` with a var keyword, we can just look at the last case of it's usage (similar to as above).
Since we are already an integer at `150` for discounted price, multiplying by 100 and then dividing by 100 again yields us with `150`.

4. The function returns `[50,100,150]`, because we go through the non discounted prices(`[100,200,300]`), and apply a 50% discount to each of them, and write them to our new `discounted` array.

5. We will get an error, because `i` was defined using the `let` keyword, and thus the `console.log()` is outside of the scope.

6. We will get an error, similar to the case in 5, since the scope of `discountedPrice` only exists within the for loop body, for which the `console.log()` is not a part of.

7. It will print `150` to the console, for a similar reason to 3, but is a stronger case since both `finalPrice` and `console.log()` are within the same code block.

8. It will return `[50,100,150]`, for the same mathematical reason as 3. Note that `discounted` is scoped via `let`, but in this case it doesn't matter since return the value of it anyway.

9. We will get an error for the same reason as 5, wherein `i` is not in the scope of the log.

10. It will print a `3`, given that the length of the `prices` list that we pass into has a length of 3, and we only set the `length` once, where it is `const` forever and ever and ever.

11. It will return `[50,100,150]`, same as above, but more importantly we aren't redefining `discounted` anywhere, but simply just changing the list.

12A. `student.name`

12B. `student['Grad Year']`

12C. `student.greeting()`

12D. `student['Favorite Teacher'].name`

12E. `student.courseLoad[0]`

13A. `'32'`, because the `2` gets converted to a string in the `+` operator

13B. `1` because the `3` gets turned to an int in the `-` operator

13C. `3` because null goes to 0

13D. `'3null'` because null gets converted to a string in the `+` operator

13E. `4` because true gets evaluated to `1`

13F. `0`, because both will evaluate to be 0

13G. `'3undefined'` like in 13D, gets converted to a string with the `+` operator

13H. `NaN`, because we can't turn undefined into an integer for integer arithmetic

14A. `true` because string 2 gets converted to an int 2

14B. `false` because we compare strings by letter, and "2 > 1" in letter land

14C. `true` because our double evaluate turns `'2'` into an int

14D. `false` because they have different types

14E. `false` because true will go to 1, which is not 2

14F. `true` because boolean turns all not 0 -0 NaN into true

**15.** 
`==` can compare with different variable types by doing a type conversion, but `===` compares both the types and values without doing any conversion, and both must be true.

**17.** 
We return `[2,4,6]`. This is because we call `modifyArray` with a list of `[1,2,3]` and the function `doSomething`, which doubles the number given to it. We then push onto the new array the values of `array[i]` except we have passed it into the callback function (in this case the `doSOmething`), and thus all of our values get doubled, before being put into the `newArr` which we return.

19. The output will be `1 4 3 2` in that order (but on new lines)