import React from "react";
// How to add default value in a contex
const UserContex = React.createContext('Lyons');

const Provider = UserContex.Provider;
const Consumer = UserContex.Consumer;

export {Provider ,Consumer};