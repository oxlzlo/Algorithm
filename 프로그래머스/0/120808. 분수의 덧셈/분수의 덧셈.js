function solution(numer1, denom1, numer2, denom2) {
    const finalDenom = denom1 * denom2;
    const finalNumer = numer1*denom2 + numer2*denom1;
    const gcd = findGCD(finalDenom, finalNumer);
    return [finalNumer/gcd , finalDenom/gcd];
}

function findGCD(a, b) {
    return b === 0 ? a
        : findGCD(b, a%b);
}