import React, { useContext,useEffect, useState } from "react";
import {Modal} from '@material-ui/core';
import './Form.css';
import Add_User_Form from "./Add_User_Form";
import Context from "./Context/Context";

export default function Form() {


    const visibility =useContext(Context) 

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={visibility.openForm} onClose={visibility.close_form}>
                <div className="add_user_form">
                    <Add_User_Form></Add_User_Form>
                </div>
            </Modal>
        </div>
    );
}