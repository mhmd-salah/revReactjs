//-> Function Overloading 

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: unknown, b: unknown): unknown {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + " " + b;
  }
}

console.log(add(1, 3));
console.log(add("ali", "mohamed"));
