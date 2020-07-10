export interface Flys {
  fly(): string
}

// first strategy
export class ItFlys implements Flys {
  fly(): string {
    return "Flying High"
  }
}

// second strategy
export class CantFly implements Flys {
  fly(): string {
    return `Can't fly`
  }
}

