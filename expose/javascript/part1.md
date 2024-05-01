## Var:
1. `values added: 20` is printed
2. `final result: 20` is printed

## Let
1. `values added: 20` is printed
2. The code returns an error, because the `let result` scopes it to the `if` block, which line 13 is not contained in.

## Const
1. We return an error, because we try to redefine the `const result` again on line 7
2. We return an error, for the same reason as before.