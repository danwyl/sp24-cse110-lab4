1. The bug is that `num1` and `num2` are being seen as string, so the result concats the two instead of adding them as integers.
2. We can use `Number()` to convert the types to actual integers.