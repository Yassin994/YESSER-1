const { commands, Meta } = require('../lib/');
const config = require('../config');

Meta({
  command: 'botowner',
  category: 'divers',
  filename: 'contact.js',
  handler: async (sock, message, args) => {
    const { from } = message;

    const nomProprietaire = config.OWNER_NAME;
    const numeroProprietaire = config.MODS[0];
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${nomProprietaire}
TEL;type=CELL;type=VOICE;waid=${numeroProprietaire}:${numeroProprietaire}
END:VCARD`;
   const message_str = {
      contacts: {
        displayName: nomProprietaire,
        contacts: [{ vcard }],
      },
      contextInfo: {
        externalAdReply: {
          title: "Numéro du propriétaire",
          body: "Enregistrez le contact du propriétaire",
          mediaType: 2,
          thumbnailUrl: "https://i.imgur.com/jQWY9mm.jpeg",
          mediaUrl: "", 
          sourceUrl: "", 
        },
      },
    };

    await sock.sendMessage(from, message_str);
  },
});

const get_Backstory = (role) => {
    const backstories = {
        "🌾 Fermier": "Un individu humble qui s'occupe des champs, assurant que la guilde est bien nourrie.",
        "🛡️ Écuyer": "Un aspirant chevalier, apprenant l'art du combat et de l'honneur.",
        "🏹 Forestier": "Un éclaireur habile avec une capacité incroyable à naviguer et survivre dans la nature.",
        "⚔️ Chevalier": "Un guerrier expérimenté avec un fort sens du devoir et de la protection.",
        "🐉 Cavalier de dragon": "Un des élus rares qui a apprivoisé un dragon et commande son pouvoir.",
        "🧙‍♂️ Archimage": "Un maître des arts arcanes, maniant de puissants sorts et des connaissances anciennes.",
        "👑 Roi suprême": "Un leader révéré avec la sagesse et la force pour régner et guider la guilde.",
        "🌠 Céleste": "Un être mystique avec une influence cosmique, transcendant l'existence ordinaire.",
        "⚔️ Grand maître": "Le leader ultime, révéré par tous, avec une compétence et un respect inégalés.",
        "🌌 Éternel": "Une figure légendaire qui a transcendé le temps et l'espace, incarnant l'essence de l'éternité."
    };
    return backstories[role] || "Aucune";
};

const determineRole = (Activit) => {
    if (Activit <= 10) {
        return "🌾 Fermier";
    } else if (Activit <= 20) {
        return "🛡️ Écuyer";
    } else if (Activit <= 30) {
        return "🏹 Forestier";
    } else if (Activit <= 40) {
        return "⚔️ Chevalier";
    } else if (Activit <= 50) {
        return "🐉 Cavalier de dragon";
    } else if (Activit <= 60) {
        return "🧙‍♂️ Archimage";
    } else if (Activit <= 70) {
        return "👑 Roi suprême";
    } else if (Activit <= 80) {
        return "🌠 Céleste";
    } else if (Activit <= 90) {
        return "⚔️ Grand maître";
    } else {
        return "🌌 Éternel";
    }
};
Meta({
    command: 'profile',
    category: 'divers',
    filename: 'user',
    handler: async (sock, message, args, author, mentionedJid) => {
        const { from } = message;
        const cible = mentionedJid.length > 0 ? mentionedJid[0] : author;
        const Activit = Math.floor(Math.random() * 100);
        const role = determineRole(Activit);
        const backstory = get_Backstory(role);
         try{ const profilePictureUrl = await sock.profilePictureUrl(cible, 'image').catch(() => 'Pas de photo de profil');
            const contact = await sock.onWhatsApp(cible);
        if (contact && contact[0]) {
            const menuProfil = `
         *Nom:* ${contact[0].notify || ''}
         *Bio:* ${contact[0].status || ''}
         *Rôle:* ${role}
         *Histoire:* ${backstory}
              `; 
         await sock.sendMessage(from, { 
           image: { url: profilePictureUrl },
           text: menuProfil });
            } else {
            }
        } catch (error) {
            console.error(error);
        }
    }
});
