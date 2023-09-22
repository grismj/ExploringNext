import { useState } from "react";

const Home = () => {

  //  const user = useUserContext();
   // const cambiaLogin = useUserToggleContext();
    const [user, setUser] = useState(null);

    return <div>
        <h2>Componente Hijo</h2>
        {user && <p>Hola {user.name}</p>}
        <button onClick={cambiaLogin}>Cambia Login</button>
    </div>
}

export default Home;