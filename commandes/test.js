"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "❤️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝙟𝙖𝙢𝙗𝙤👋 𝙬𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 𝙩𝙝𝙚 𝙣𝙚𝙬 𝙥𝙧𝙤𝙟𝙚𝙘𝙩  𝙨𝙞𝙢𝙥𝙡𝙚 𝙬𝙖𝙨𝙩𝙖𝙥𝙥 𝙗𝙤𝙩 𝙘𝙧𝙚𝙖𝙩𝙚𝙙 𝙗𝙮𝗬𝗘𝗦𝗦𝗘𝗥𝗧𝗘𝗖𝗛  * \n\n ' + "𝙞𝙢 𝙝𝙚𝙧𝙚 𝙩𝙤 𝙝𝙚𝙡𝙥𝙞𝙣𝙜 𝙮𝙤𝙪 𝙖𝙡𝙡 𝙩𝙝𝙞𝙣𝙜𝙨 𝙖𝙗𝙤𝙪𝙩 𝙬𝙖𝙨𝙩𝙖𝙥𝙥✅ 𝙡𝙚𝙩 𝙪𝙨 𝙀𝙉𝙅𝙊𝙔 𝙇𝙄𝙁𝙀🎶 ";
    let d = '𝑝𝑜𝑤𝑒𝑟𝑒𝑑 𝑏𝑦 𝑌𝐸𝑆𝑆𝐸𝑅 𝑇𝐸𝐶𝐻 ';
    let varmess = z + d;
    var img = 'https://files.catbox.moe/9it5tk.jpeg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Hi my name is *YESSER MD* \n\n '+' I'm a Multi-device Whatsapp bot '
      let d =' developed by *🅈🄴🅂🅂🄴🅁*'
      let varmess=z+d
      var img='https://files.catbox.moe/9it5tk.jpeg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
