"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "🙄", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/Yassin994/YESSER-MD';
  const img = 'https://files.catbox.moe/44l78z.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = ` *𝑯𝒆𝒍𝒍𝒐𝒘 𝒇𝒓𝒊𝒆𝒏𝒅 𝒕𝒉𝒊𝒔 𝒊𝒔 * *𝗬𝗘𝗦𝗦𝗘𝗥 𝗠𝗗.*\n _𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝒎𝒚 𝒄𝒉𝒂𝒏𝒏𝒆𝒍_ *𝒕𝒉𝒓𝒐𝒖𝒏𝒈*,  https://whatsapp.com/channel/0029VakA1mu35fM18opH1s30

🤠 *𝑅𝐸𝑃𝑂𝑆𝐼𝑇𝑂𝑅𝑌:* ${data.html_url}

🕐 *𝑈𝑃 𝐷𝐴𝑇𝐸𝐷 𝑂𝑁 :* ${repoInfo.lastUpdate}
⊷━━━━━━☆•∞•☆━━━━━━⊷  

 ╭━━═✺ *𝚈𝙴𝚂𝚂𝙴𝚁* ✺═━━⊷
 │┌═━━⊷•∞•⊷━━─⊛
 │┊❁*𝐯𝐢𝐬𝐢𝐭𝐨𝐫:* ${repoInfo.visitors}
 │┊❁ *𝐬𝐭𝐚𝐫𝐬:* ${repoInfo.stars}
 │┊❁ *𝐟𝐨𝐫𝐤𝐬:* ${repoInfo.forks}
 │┊❁ *𝐫𝐞𝐥𝐞𝐬𝐞𝐝 𝐝𝐚𝐭𝐞:* ${releaseDate}
 │┊❁ *𝐜𝐫𝐞𝐚𝐭𝐨𝐫:* *𝐲𝐞𝐬𝐬𝐞𝐫𝐭𝐞𝐜𝐡*
 │┊❁ *𝐭𝐡𝐞𝐦:* *𝐦𝐲𝐜𝐚𝐫*
 │┊❁ *𝓌ℯ 𝒶𝓁𝓌𝒶𝓎𝓈 𝓁ℴ𝓋ℯ 𝓎ℴ𝓊❤️*
 │└═━━⊷•∞•⊷━━─⊛
 ╰━━━═⊷✺•∞•✺⊷═━━━⊷ 
 
 > Dont Forget Fork And Star Please `;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
