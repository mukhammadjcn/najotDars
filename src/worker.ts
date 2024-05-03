export const fibonacciNumber = (value: number): number => {
  if (value < 2) return value;
  return fibonacciNumber(value - 1) + fibonacciNumber(value - 2);
};

const worker: Worker = self as never;

worker.addEventListener("message", (event: MessageEvent<number>) => {
  postMessage(fibonacciNumber(event.data));
});

export default null;
