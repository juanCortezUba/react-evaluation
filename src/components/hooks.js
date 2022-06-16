export const handleMinus = (valor, setValor) => {
    setValor(valor - 1);
    if (valor < 0) {
        setValor(0);
    }
};


export const handlePlus = (valor, setValor) => {

    setValor(valor + 1);
};