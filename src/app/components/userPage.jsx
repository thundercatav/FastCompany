import React, { useEffect, useState } from "react";
import api from "../api";
import PropTypes from "prop-types";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const UserPage = ({ id }) => {
    const [users, setUsers] = useState();
    const history = useHistory();
    useEffect(() => {
        api.users.getById(id).then((data) => {
            setUsers(data);
        });
    }, []);

    const handleClick = () => {
        history.push("/users");
    };

    return users ? (
        <>
            <h1>{users.name}</h1>

            <h2>Профессия {users.profession.name}</h2>
            <QualitiesList qualities={users.qualities} />
            <p>completedMeetings: {users.completedMeetings}</p>
            <h2>rate: {users.rate}</h2>
            <button onClick={handleClick}>Все пользователи</button>
        </>
    ) : (
        "loading"
    );
};

UserPage.propTypes = {
    id: PropTypes.string
};

export default UserPage;
