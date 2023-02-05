import React, { useEffect, useState } from "react";
import api from "../api";
import PropTypes from "prop-types";

const UserPage = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => {
            setUsers(data);
            console.log(users);
        });
    }, []);

    return users ? (
        <>
            <h1>UserPage</h1>
        </>
    ) : (
        "loading"
    );
};

UserPage.propTypes = {
    id: PropTypes.string
};

export default UserPage;
