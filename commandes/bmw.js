"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "my", reaction: "💔", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝚃𝙷𝙸𝚂 𝙸𝚂 yesser md 𝙱𝙾𝚃 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 yessertech🥷 🚗 \n\n ' + "║❒ 𝗥𝗲𝗽𝗼https://github.com/Yassin994/YESSER-MD ";
    let d = '       ║❒ 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 https://www.youtube.com/@Yesserboy92';
    let varmess = z + d;
    var mp4 = 'https://i.imgur.com/rvYXsaV.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")

async(Void, citel, text, isAdmins) => {
Void.sendMessage(citel.chat, { 
              react: { 
                  text: "🤓", 
                  key: citel.key 
              } 
          }) 
          await Void.sendPresenceUpdate('recording', citel.chat);
          await Void.sendMessage(citel.chat, { audio: {url : 'https://a.uguu.se/lOZETVDW.mp4'',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="🤔"
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
