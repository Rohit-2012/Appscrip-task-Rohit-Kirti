export const joinClasses = (styles,...classes) => {
    return classes.map((className) => styles[className]).join(" ");
};