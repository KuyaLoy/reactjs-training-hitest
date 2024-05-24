import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>not login</h1>;

  return (
    <div>
      <h1> Profile: {user.password}</h1>
    </div>
  );
}
export default Profile;
