// const userInfo = [101, "Ema", "John", true,  , "2023"];

type genericTuple<X, Y, Z, M, N, O> = [X, Y, Z, M, N, O];

const userInfo: genericTuple<
  number,
  string,
  string,
  boolean,
  undefined,
  string
> = [101, "Ema", "John", true, , "2023"];
