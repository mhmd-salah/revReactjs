import { useState } from "react";
import { AddCommand, SubtractCommand } from "./calcutatorCommands";
import { Command } from "../commands/interfaces";

const CalcComponent = () => {
  const [result, setResult] = useState(0);
  const [number, setNumber] = useState(0);
  const [operations, setOperations] = useState<Command[]>([]);

  const handleAdd = () => {
    const command = new AddCommand(number, setResult, result);
    command.execute();
    setOperations([...operations, command]);
  };

  const handleSubtract = () => {
    const command = new SubtractCommand(number, setNumber, result);
    command.execute();
    setOperations([...operations, command]);
  };

  const handleUndo = () => {
    if (operations.length === 0) return;

    const lastCommand = operations[operations.length - 1];
    lastCommand.undo();
    setOperations(operations.slice(0, -1));
  };

  return (
    <div className="p-4 text-center" dir="rtl">
      <div className="mb-4">
        <p className="text-2xl mb-2 text-white ">النتيجة: {result}</p>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="border p-2 mb-2 text-center w-40"
        />
      </div>

      <div className="flex gap-2 justify-center mb-4">
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>
        <button
          onClick={handleSubtract}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
        <button
          onClick={handleUndo}
          disabled={operations.length === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          تراجع
        </button>
      </div>

      <div className="text-sm text-gray-600">
        عدد العمليات: {operations.length}
      </div>
    </div>
  );
};

export default CalcComponent;
