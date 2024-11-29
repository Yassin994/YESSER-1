const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "tz", categorie: "My Contact" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
❂━━━════──⊷──════━━━❂
   ⚠︎𝐦𝐲 𝐢𝐧𝐟𝐨.........✍︎
❂━━━➳════⊷════➳━━━━❂

*𝚐𝚋 𝚕𝚒𝚗𝚔*
> https://github.com/yassin994
*𝚢𝚝 𝚌𝚑𝚊𝚗𝚗𝚎𝚕*
>https://www.youtube.com/@Yesserboy92
*𝚋𝚘𝚝 𝚘𝚠𝚗𝚎𝚛*
> https://wa.me/255621995482
*𝚠𝚊 𝚌𝚑𝚊𝚗𝚗𝚎𝚕*
> https://whatsapp.com/channel/0029VakA1mu35fM18opH1s30 
*𝚋𝚘𝚝 𝚛𝚘𝚘𝚖*
> https://github.com/yassin994/YESSER-MD
╭──━━━━═════════━━━━⦿
┃ ❂━━━════➳════━━━━❂
┃▓▒⁠⁠⁠⁠ *ℝ𝔸𝕄* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┃▓▒ *𝔻𝔼𝕍* : *𝐲𝐞𝐬𝐬𝐞𝐫𝐭𝐞𝐜𝐡*
┃ ❂━━━════➳════━━━━❂
⁠⁠⁠⁠╰──━━━━═════════━━━━⦿ 
  `;
    
let menuMsg = `
     ╭──━━━━══⊷══━━━━⦿
     ┃ ❂━━━━━━━━━━━━❂
     ┃⚠︎ 𝐘𝐄𝐒𝐒𝐄𝐑 𝐌𝐃
     ┃ ❂━━━━━━━━━━━━❂
     ╰──━━━━══⊷══━━━━⦿
❂━━━━═════⊷═════━━━━❂
▒♫︎ 𝐰𝐞 𝐥𝐞𝐟𝐭 𝐜𝐡𝐮𝐫𝐜𝐡 𝐧𝐨𝐭 𝐆𝐎𝐃..✞︎
❂━━━════──➳──════━━━❂`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "I am *Lucky Md*, Developed By Fredie Sir" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "I am *LUCKY MD V7*, Developed By Fredie Sir" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
