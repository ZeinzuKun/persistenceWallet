import React from 'react';
import Button from "./../../../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {keyStoreSubmit} from "../../../store/actions/transactions/keyStore";

const Submit = () => {
    let loginAddress = localStorage.getItem('address');
    const type = useSelector((state) => state.common.txInfo.value.name);
    const password = useSelector((state) => state.keyStore.password);

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(keyStoreSubmit(loginAddress, type));
    };

    const fee = useSelector((state) => state.fee.fee);
    const gas= useSelector((state) => state.gas.gas);

    const disable = (
        fee.error.message !== '' || gas.error.message !== '' || password.error.message !== ''
    );

    return (
        <div className="buttons">
            <div className="button-section">
                <Button
                    className="button button-primary"
                    type="button"
                    disable={disable}
                    value="Submit"
                    onClick={onClick}
                />
            </div>
        </div>
    );
};

export default Submit;
