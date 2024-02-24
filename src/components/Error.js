

import { useRouteError } from "react-router-dom"
const Error = () => {

    const err = useRouteError()

    console.log(err);

    return (
        <div>

            <h2>Oppssss !!  ....Something went Wrong</h2>

            <h3>  {err.data} !!!  is  {err.statusText}</h3>



        </div>
    )

}

export default Error