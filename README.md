# combination_and_permutation_js

# install
```
$  npm i @merarli/combination_and_permutation_js
```

# How to use

## Ask for a combination
```
const cap = require('@merarli/combination_and_permutation_js')

console.log(cap.getCombination(['a','b','c','d'],3))

```

### result
```
[
  [ 'a', 'b', 'c' ],
  [ 'a', 'b', 'd' ],
  [ 'a', 'c', 'd' ],
  [ 'b', 'c', 'd' ]
]


```


## Find permutations
```
const cap = require('@merarli/combination_and_permutation_js')

console.log(cap.getPermutation(['a','b','c','d'],3))
```

### result
```
[
  [ 'a', 'b', 'c' ], [ 'a', 'b', 'd' ],
  [ 'a', 'c', 'b' ], [ 'a', 'c', 'd' ],
  [ 'a', 'd', 'b' ], [ 'a', 'd', 'c' ],
  [ 'b', 'a', 'c' ], [ 'b', 'a', 'd' ],
  [ 'b', 'c', 'a' ], [ 'b', 'c', 'd' ],
  [ 'b', 'd', 'a' ], [ 'b', 'd', 'c' ],
  [ 'c', 'a', 'b' ], [ 'c', 'a', 'd' ],
  [ 'c', 'b', 'a' ], [ 'c', 'b', 'd' ],
  [ 'c', 'd', 'a' ], [ 'c', 'd', 'b' ],
  [ 'd', 'a', 'b' ], [ 'd', 'a', 'c' ],
  [ 'd', 'b', 'a' ], [ 'd', 'b', 'c' ],
  [ 'd', 'c', 'a' ], [ 'd', 'c', 'b' ]
]

```
