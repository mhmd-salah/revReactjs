import { ChangeEvent, useState } from "react";
import { IuserData } from "../../interfaces";
import { formInputList } from "../../Data";

interface Iprops {
  setIsLoggedIn: (v: boolean) => void;
  userData: IuserData;
  setUserData: (user: IuserData) => void;
}
export default function FormLogin({
  setIsLoggedIn,
  userData,
  setUserData,
}: Iprops) {
  const [inputArr, setInputArr] = useState(formInputList);
  //** renders
  const renderFormInputList = inputArr.map((input, i) => (
    <div key={i} style={{ display: "flex" }}>
      <div>
        <label htmlFor={input.id}>{input.label}</label>
        <input
          type={input.type}
          name={input.name}
          id={input.id}
          value={userData[input.name]}
          onChange={onChangeHandler}
        />
      </div>
      <button
        style={{ width: "fit-content" }}
        onClick={() => {
          const filltered = inputArr.filter(
            (input) => input.name !== inputArr[i]["name"]
          );
          setInputArr(filltered);
        }}
      >
        ❌
      </button>
    </div>
  ));
  //Handler
  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        {renderFormInputList}
        <button onClick={() => setIsLoggedIn(true)}> submit</button>
      </form>
    </>
  );
}
