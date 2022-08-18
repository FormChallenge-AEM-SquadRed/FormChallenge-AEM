const phoneMask = (event) => {
    const digit = event.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    event.target.value = !digit[2]
        ? digit[1]
        : "(" + digit[1] + ") " + digit[2] + (digit[3] ? "-" + digit[3] : "");
};

export default phoneMask;
