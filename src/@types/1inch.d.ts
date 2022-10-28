type DEX = {
 title: string;
 swap: <T>() => Promise<T>;
 tokens: <T>() => Promise<T>;
}
