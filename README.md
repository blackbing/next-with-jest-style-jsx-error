
# This is a problem reproduction in Next@6
1. [with-jest](https://github.com/zeit/next.js/tree/canary/examples/with-jest)
2. add some styled-jsx as external style.<https://github.com/zeit/styled-jsx#keeping-css-in-separate-files>

# reproduce steps
1. yarn test

# result

``` sh
● With Enzyme › App shows "Hello world!"

ReferenceError: style is not defined

    2 |
    3 | export default () => (
  > 4 |   <div className='hello'>
    5 |     <p>Hello World</p>
    6 |     <style jsx global>{style}</style>
    7 |   </div>

    at Object._default [as type] (pages/index.js:4:3)
    at Object.<anonymous> (__tests__/index.test.js:11:17)

● With Snapshot Testing › App shows "Hello world!"

ReferenceError: style is not defined



    at _default (pages/index.js:21:10)
    at Object.<anonymous> (__tests__/index.test.js:22:48)

```

# Note:
but `yarn dev` and `yarn build` is work fine.
