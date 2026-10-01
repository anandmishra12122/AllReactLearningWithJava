import { useContext } from "react";
import { UserContext } from "../App";

function ChildC()
{
    const user = useContext(UserContext);

    return (
        <h2>{user.name}</h2>
    );
}

export default ChildC;