const { zokou } = require("../framework/zokou");
const { enregistrerDuel, getDuelIds } = require('../bdd/duel');
// Liste des arènes
const arenes = [
    { nom: 'plaine vide', image: 'https://i.ibb.co/3h71nT1/image.jpg' },
    { nom: 'Desert', image: 'https://i.ibb.co/z2gwsMQ/image.jpg' },
    { nom: 'Zone de glace', image: 'https://i.ibb.co/3F0mK1s/image.jpg' },
    { nom: 'Vallée de la fin', image: 'https://i.ibb.co/VqFgGzF/image.jpg' },
    { nom: 'Au dela', image: 'https://i.ibb.co/4Wkr6mT/image.jpg' },
    { nom: 'Budokai tenkaichi', image: 'https://i.ibb.co/B429M3M/image.jpg' },
    { nom: 'ville de jour', image: 'https://i.ibb.co/LRDRH9k/image.jpg' },
    { nom: 'Ville detruite', image: 'https://i.ibb.co/80R07hR/image.jpg' }
];

function tirerAr() {
    return arenes[Math.floor(Math.random() * arenes.length)];
}

/*function genererID() {
    let du = getDuelIds();
    let id;
    do {
        id = Math.floor(Math.random() * 20); // Génère un nombre entre 0 et 20
    } while (du.includes(id)); // S'assure que l'ID n'est pas déjà utilisé
    return id;
}*/

zokou(
    {
        nomCom: 'duel',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        try {
            if(!arg[0]) { 
             return repondre('pour obtenir la fiche de duel veuillez suivre ce format: +duel joueur1 à joueurN vs joueur1 à joueurN /ensuite vous mettez les stats\n Ex: +duel hakuji vs Damian / Hakuji + 2');
            };
            const input = arg.join(' ');
            const [joueursInput, statsCustom] = input.split('/').map(part => part.trim());
            const [joueursAvantVs, joueursApresVs] = joueursInput.split('vs').map(part => part.trim());
            const equipe1 = joueursAvantVs.split(',').map(joueur => ({ nom: joueur.trim(), stats: { sta: 100, energie: 100, vie: 100 } }));
            const equipe2 = joueursApresVs.split(',').map(joueur => ({ nom: joueur.trim(), stats: { sta: 100, energie: 100, vie: 100 } }));
            const areneT = tirerAr();
            //const duelID = genererID();
        //    repondre(`🔑 Votre clé d'accès au duel est : *${duelID}*`);

            let ficheDuel = `*🆚𝗩𝗘𝗥𝗦𝗨𝗦 𝗔𝗥𝗘𝗡𝗔 𝗕𝗔𝗧𝗧𝗟𝗘🏆🎮*
░░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔\n`;

            equipe1.forEach(joueur => {
                ficheDuel += `🔷 *${joueur.nom}*: 🫀:${joueur.stats.sta}% 🌀:${joueur.stats.energie}% ❤️:${joueur.stats.vie}%\n`;
            });

            ficheDuel += `                                   ~  *🆚*  ~\n`;

            equipe2.forEach(joueur => {
                ficheDuel += `🔷 *${joueur.nom}*: 🫀:${joueur.stats.sta}% 🌀:${joueur.stats.energie}% ❤️:${joueur.stats.vie}%\n`;
            });

            ficheDuel += `▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔\n
*🌍𝐀𝐫𝐞̀𝐧𝐞*: ${areneT.nom}
*🚫𝐇𝐚𝐧𝐝𝐢𝐜𝐚𝐩𝐞*: Boost 1 fois chaque 2 tours!
*⚖️𝐒𝐭𝐚𝐭𝐬*: ${statsCustom}
*🏞️ 𝐀𝐢𝐫 𝐝𝐞 𝐜𝐨𝐦𝐛𝐚𝐭*: illimitée
*🦶🏼𝐃𝐢𝐬𝐭𝐚𝐧𝐜𝐞 𝐢𝐧𝐢𝐭𝐢𝐚𝐥𝐞*📌: 5m
*⌚𝐋𝐚𝐭𝐞𝐧𝐜𝐞*: 6mins+ 1⚠️
*⭕𝐏𝐨𝐫𝐭𝐞́𝐞*: 10m\n▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔\n
*⚠️Vous avez 🔟 tours max pour finir votre Adversaire! Sinon la victoire sera donnée par décision selon celui qui a dominé le combat ou qui a été le plus offensif !*
❤️❤️❤️❤️❤️ *KEEP USING YESSER MD*❤️❤️❤️❤️`;

            await zk.sendMessage(dest, { image: { url: areneT.image }, caption: ficheDuel }, { quoted: ms });
          //  await enregistrerDuel(duelID, equipe1, equipe2, areneT, statsCustom, 'open');

        } catch (error) {
            console.error('Erreur lors du traitement du duel:', error);
            repondre('Une erreur est survenue lors du traitement de votre demande. Veuillez réessayer plus tard.');
        }
    }
);
