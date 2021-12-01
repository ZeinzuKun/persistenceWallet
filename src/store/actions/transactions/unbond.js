import {
    TX_UNBOND_AMOUNT_SET,
    TX_UNBOND_MODAL_HIDE,
    TX_UNBOND_MODAL_SHOW,
    TX_UNBOND_MEMO_SET
} from "../../../constants/unbond";
import {setTxName, setTxIno} from "./common";
import {showFeeModal} from "./fee";

export const setTxUnbondAmount = (data) => {
    return {
        type: TX_UNBOND_AMOUNT_SET,
        data,
    };
};

export const showTxUnbondModal = (data) => {
    return {
        type: TX_UNBOND_MODAL_SHOW,
        data,
    };
};

export const hideTxUnbondModal = (data) => {
    return {
        type: TX_UNBOND_MODAL_HIDE,
        data,
    };
};

export const setTxMemo = (data) => {
    return {
        type: TX_UNBOND_MEMO_SET,
        data,
    };
};

export const submitFormData = (message) => (dispatch, getState) => {
    dispatch(setTxName({
        value:{
            name:"unbond",
        }
    }));
    dispatch(setTxIno({
        value:{
            modal:showTxUnbondModal(),
            data:{
                message:message,
                memo:getState().unbond.memo.value,
            }
        }
    }));
    dispatch(hideTxUnbondModal());
    dispatch(showFeeModal());
};