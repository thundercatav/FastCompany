import React from "react";
import { useParams } from "react-router-dom";

const UserLayout = () => {
    const params = useParams();
    console.log(params);

    return <h1>UserLayout</h1>;
};

export default UserLayout;
