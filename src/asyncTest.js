const asyncTest = async () => {
    const isInvalid = true;
    let returnText = 'what';

    if(isInvalid) {
        returnText = 'invalid';
        return false;
    }

    returnText = 'valid';
    return true;
}

export default asyncTest;
