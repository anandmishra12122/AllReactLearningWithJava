import "./StudentPage.css";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from "../slice/StudentSlice";


function StudentPage() {

    const dispatcher = useDispatch()

    const count = useSelector(
        (state)=> state.studentCounter.value
    )

    

    function incrementfun()
    {
        dispatcher(increment())
    }

    function decrementfun()
    {
        dispatcher(decrement())
    }

    return (
        <div className="container">
            <div className="card">
                <h1>Student Counter</h1>

                <h2>{count}</h2>

                <div className="buttons">
                    <button className="add-btn" onClick={incrementfun}>Add Student</button>
                    <button className="remove-btn" onClick={decrementfun}>Remove Student</button>
                </div>
            </div>
        </div>
    );
}

export default StudentPage;