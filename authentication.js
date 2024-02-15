
function generateToken(user) {
    const payload = { username: user.username };
    const secretKey = 'yourSecretKey'; 
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

function verifyToken(token) {
    const secretKey = 'yourSecretKey';
    return jwt.verify(token, secretKey);
}
function isLoggedIn() {
    const token = sessionStorage.getItem('token');
    return !!token && verifyToken(token);
}