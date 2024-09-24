// Função para criptografar usando Cifra de César
function caesarCipher(text, shift) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if (char.match(/[a-z]/i)) {
            const base = char.toLowerCase() === char ? 97 : 65;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}

// Função para descriptografar
function caesarDecipher(text, shift) {
    return caesarCipher(text, 26 - shift);
}

// Ações de clique nos botões de criptografar e descriptografar
document.getElementById('encryptBtn').addEventListener('click', () => {
    const shift = parseInt(document.getElementById('shift').value);
    const inputText = document.getElementById('inputText').value;
    const result = caesarCipher(inputText, shift);
    document.getElementById('resultText').textContent = result;
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const shift = parseInt(document.getElementById('shift').value);
    const inputText = document.getElementById('inputText').value;
    const result = caesarDecipher(inputText, shift);
    document.getElementById('resultText').textContent = result;
});
