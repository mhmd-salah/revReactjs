import { IuserData } from "../interfaces";

interface Iprops {
  userData: IuserData
}
export default function UserDetails({userData}:Iprops) {
  return <div className="userDetails">
    <h2>{userData.username}</h2>
    <h2>{userData.email}</h2>
    <h2>{userData.password}</h2>
  </div>;
}
