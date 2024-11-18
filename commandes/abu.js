"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "what", reaction: "🙏", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '🤠hellow 𝗧𝗵𝗶𝘀 𝗶𝘀 *YESSER-𝗠𝗗*  𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 *YESSERTECH*🥷 𝗣𝗹𝗲𝗮𝘀𝗲 𝗚𝗶𝘃𝗲 𝗮 𝗦𝘁𝗮𝗿 ✨ 𝗢𝗻 𝗧𝗵𝗲 𝗥𝗲𝗽𝗼 𝗔𝗻𝗱 𝗙𝗼𝗿𝗸 𝗜𝘁 🚗 \n\n ' + "║❒ 𝗥𝗲𝗽𝗼 https://github.com/Yassin994/YESSER-MD";
    let d = '       ║❒ 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 https://www.youtube.com/@Yesserboy92';
    let varmess = z + d;
    var mp3 = 'https://s31.aconvert.com/convert/p3r68-cdx67/7uiwm-6zr16.mp3'';
    await zk.sendMessage(dest, { audio: { url: mp3 }, caption: varmess });
    //console.log("montest")
    
});
console.log("mon tellt");
/*module.exports.commande = () => {
  var nomCom = ["tell","t"]
  var reaction="☠️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *YESSER-MD-REPO* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *YESSER-MD-REPO*'
      let varmess=z+d
      var img='https://files.catbox.moe/ixbkja.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
