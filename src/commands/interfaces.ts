export interface Command {
  execute(): void;
  undo(): void;
}

export interface TextOperation {
  getText: () => string;
  insertText: (text: string, position?: number) => void;
  deleteText: (position?: number, length?: number) => void;
}
