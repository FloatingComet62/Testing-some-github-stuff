require('dotenv').config();

function verifyToken(verySeriousENV){
    return verySeriousENV == 'Lmao';
}

if(verifyToken(process.env.TEST)) {
    process.exit(0);
}else{
    process.exit(1);
}
// just a fake pull request