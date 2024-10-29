/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { moneyFormat } from "../helpers";

const Balance = ({ count, subs, spent, setSpent }) => {
    

    const upadateBalance = () => {
        const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
        setSpent(spent);
    }

    useEffect(() => {
        upadateBalance();
    }, [subs, upadateBalance]);

    return ( 
        <div className="balance">
            <h3>Presupuesto: {moneyFormat(count)}</h3>
            <h3>Disponible: {moneyFormat(count - spent)}</h3>
            <h3>Gastado: {moneyFormat(spent)}</h3>
        </div>
    );
}

export default Balance;
