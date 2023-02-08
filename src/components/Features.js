import { useNavigate } from "react-router-dom"

function App(){
    const navigate = useNavigate();
    function Error(){
        navigate('/error')
    }
    function Callback(){
        navigate('/callback')
    }
    function Memo(){
        navigate('/memo')
    }
    function Ref(){
        navigate('/ref')
    }
    return(
        <>
        <br/>
        <div>
        <h2>Hooks</h2>
        </div>
        <br/>
        <div>
        <button onClick={Error}>Errorboundary</button>
        <button onClick={Callback}>UseCallback</button>
        <button onClick={Memo}>useMemo</button>
        <button onClick={Ref}>useRef</button>
        </div>
        </>
    )
}
export default App