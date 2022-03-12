export const GuessColor = (color) => {
    if (color === "dark-gray") {
        return "rgba(117, 117, 117, 1)";
    }
    if (color === "white") {
        return "rgba(255, 255, 255, 1)";
    }
    if (color === "black") {
        return "rgba(41, 41, 41, 1)";
    }
    return color;
}