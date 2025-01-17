import { ChangeEvent, useCallback, useState } from "react";
import { Command, TextOperation } from "../../commands/interfaces";
import { AddTextCommand } from "../../commands/AddTextCommand";

const TextEditor = () => {
  const [text, setText] = useState<string>("");
  const [undoStack, setUndoStack] = useState<Command[]>([]);
  const [redoStack, setRedoStack] = useState<Command[]>([]);

  const executeCommand = useCallback((command: Command): void => {
    command.execute();
    setUndoStack((perv) => [...perv, command]);
    setRedoStack([]);
  }, []);

  const undo = useCallback((): void => {
    if (undoStack.length === 0) return;
    const command = undoStack[undoStack.length - 1];
    command.undo();
    setUndoStack((perv) => perv.slice(0, -1));
    setRedoStack((perv) => [...perv, command]);
  }, [undoStack]);

  const redo = useCallback((): void => {
    if (redoStack.length === 0) return;
    const command = redoStack[redoStack.length - 1];
    command.execute();
    setRedoStack((perv) => perv.slice(0, -1));
    setUndoStack((perv) => [...perv, command]);
  }, [redoStack]);

  const handleAddText = (newText: string, position: number): void => {
    const textOperations: TextOperation = {
      getText: () => text,
      insertText: (t: string, p: number = 0) =>
        setText((prev) => prev.slice(0, p) + t + prev.slice(p)),
      deleteText: (p: number = 0, l: number = 0) =>
        setText((prev) => prev.slice(0, p) + prev.slice(p + l)),
    };

    const command = new AddTextCommand(textOperations, newText, position);
    executeCommand(command);
  };

  return (
    <div className="container p-4">
      <div className="mb-4 flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          onClick={undo}
          disabled={undoStack.length === 0}
        >
          Undo
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          onClick={redo}
          disabled={redoStack.length === 0}
        >
          Redo
        </button>
      </div>

      <textarea
        className="w-full h-40 p-2 border rounded text-black"
        value={text}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          handleAddText(e.target.value, 0)
        }
      />
      <div className="mt-2 text-sm text-gray-600">
        Undo Stack:{undoStack.length} | Redo Stack :{redoStack.length}
      </div>
    </div>
  );
};

export default TextEditor;
