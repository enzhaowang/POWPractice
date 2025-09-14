import crypto from 'crypto';

const nickName = 'GraceYin';


function nonceHunter(nickName, diffcultPrefix) {

    let foundNonce = false;
    let nonce = 0;
    const startTime = Date.now();

    while (!foundNonce) {
        console.log("huntting nonce with value: " + nonce)
        const hash = crypto.createHash('sha256').update(nickName + nonce).digest('hex');

        if(hash.startsWith(diffcultPrefix)) { // found nounce
            foundNonce = true;
            console.log("Found nonce!! ");
            console.log("Spent Time: " + (Date.now() - startTime) + 'ms');
            console.log("Content of the Hash: " + nickName + nonce);
            console.log("The Hash Value: " + hash);
        }
        
        nonce++;
    }

}


// nonceHunter(nickName, '000');
nonceHunter(nickName, '0000');






