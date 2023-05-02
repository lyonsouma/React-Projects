import React from "react";

const UserContex = React.createContext();

const Provider = UserContex.Provider;
const Consumer = UserContex.Consumer;

export {Provider ,Consumer};