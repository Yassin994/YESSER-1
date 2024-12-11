const { zokou } = require('../framework/zokou');


zokou(
    {
        nomCom: 'menuneo',
        categorie: 'other`
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: 'https://files.catbox.moe/r3x8bb.jpg' }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'history',
        categorie: 'other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: 'https://files.catbox.moe/r3x8bb.jpg' }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'guide',
        categorie: 'other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: 'https://files.catbox.moe/r3x8bb.jpg' }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'cr7',
        categorie: 'other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: 'https://files.catbox.moe/r3x8bb.jpg' }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'com',
        categorie: 'other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: 'https://files.catbox.moe/r3x8bb.jpg' }, caption: msg }, { quoted: ms });
   
        }
    }
);

/*zokou(
    {
        nomCom: '',
        categorie: 'other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: '',
        categorie: 'other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);*/
