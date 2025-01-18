interface Command {
  execute(): void;
  undo(): void;
}

export class AddCommand implements Command {
  constructor(
    private number: number,
    private setResult: (value: number) => void,
    private currentResult: number
  ) {}

  execute() {
    this.setResult(this.currentResult + this.number);
  }
  undo(): void {
    this.setResult(this.currentResult - this.number);
  }
}

export class SubtractCommand implements Command {
  constructor(
    private number: number,
    private setResult: (value: number) => void,
    private currentResult: number
  ) {}

  execute(): void {
    this.setResult(this.currentResult - this.number);
  }
  undo(): void {
    this.setResult(this.currentResult + this.number);
  }
}
