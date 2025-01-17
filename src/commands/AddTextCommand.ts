import { Command, TextOperation } from "./interfaces";

export class AddTextCommand implements Command {
  previousText: string;

  constructor(
    private textOperation: TextOperation,
    private newText: string,
    private position: number
  ) {
    this.previousText = textOperation.getText();
  }

  execute(): void {
    this.textOperation.insertText(this.newText, this.position);
  }

  undo(): void {
    this.textOperation.deleteText(this.position, this.newText.length);
  }
}
