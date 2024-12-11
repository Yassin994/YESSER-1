const { commands, Meta } = require('../lib/');
const { MessageType } = require('@whiskeysockets/baileys');
const axios = require('axios');
const config = require('../config')
const fs = require('fs');
const FormData = require('form-data');
const styles = [
    'editor',
    'deepdream',
    'toonify',
    'colorizer',
    'super-resolution',
    'waifu2x',
    'neural-style',
    'fast-style-transfer',
    'nudity-detection',
    'saliency',
    'text2img',
    'anime-style',
    'mosaic',
    'hatching',
    'sketch',
    'oil-painting',
    'watercolor',
    'pencil-drawing',
    'abstract',
    'pop-art',
    'pointillism',
    'impressionism',
    'cubism',
    'surrealism',
    'vintage',
    'hdr',
    'fisheye',
    'vignette',
    'glitch',
    'low-poly'
];

Meta({
    command: 'editimage',
    category: 'image',
    filename: 'editimage',
    handler: async (sock, message, args, quoted, languages) => {
        const { from } = message;
        if (!quoted || quoted.mtype !== 'imageMessage') {
            return await sock.sendMessage(from, { text: languages[config.LANGUAGE].IMAGE_MSG}, MessageType.text);
        } let style = args[0] || 'editor';
        let apiUrl = 'https://api.deepai.org/api/image-editor';
        switch (style.toLowerCase()) {
            case 'deepdream':
                api_str = 'https://api.deepai.org/api/deepdream';
                break;
            case 'toonify':
                api_str = 'https://api.deepai.org/api/toonify';
                break;
            case 'colorizer':
                api_str = 'https://api.deepai.org/api/colorizer';
                break;
            case 'super-resolution':
                api_str = 'https://api.deepai.org/api/torch-srgan';
                break;
            case 'waifu2x':
                api_str = 'https://api.deepai.org/api/waifu2x';
                break;
            case 'neural-style':
                api_str = 'https://api.deepai.org/api/neural-style';
                break;
            case 'fast-style-transfer':
                api_str = 'https://api.deepai.org/api/fast-style-transfer';
                break;
            case 'nudity-detection':
                api_str = 'https://api.deepai.org/api/nsfw-detector';
                break;
            case 'saliency':
                api_str = 'https://api.deepai.org/api/saliency';
                break;
            case 'text2img':
                api_str = 'https://api.deepai.org/api/text2img';
                break;
            case 'anime-style':
                api_str = 'https://api.deepai.org/api/anime-style';
                break;
            case 'mosaic':
                api_str = 'https://api.deepai.org/api/mosaic';
                break;
            case 'hatching':
                api_str = 'https://api.deepai.org/api/hatching';
                break;
            case 'sketch':
                api_str = 'https://api.deepai.org/api/sketch';
                break;
            case 'oil-painting':
                api_str = 'https://api.deepai.org/api/oil-painting';
                break;
            case 'watercolor':
                api_str = 'https://api.deepai.org/api/watercolor';
                break;
            case 'pencil-drawing':
                api_str = 'https://api.deepai.org/api/pencil-drawing';
                break;
            case 'abstract':
                api_str = 'https://api.deepai.org/api/abstract';
                break;
            case 'pop-art':
                api_str = 'https://api.deepai.org/api/pop-art';
                break;
            case 'pointillism':
                api_str = 'https://api.deepai.org/api/pointillism';
                break;
            case 'impressionism':
                api_str = 'https://api.deepai.org/api/impressionism';
                break;
            case 'cubism':
                api_str = 'https://api.deepai.org/api/cubism';
                break;
            case 'surrealism':
                api_str = 'https://api.deepai.org/api/surrealism';
                break;
            case 'vintage':
                api_str = 'https://api.deepai.org/api/vintage';
                break;
            case 'hdr':
                api_str = 'https://api.deepai.org/api/hdr';
                break;
            case 'fisheye':
                api_str = 'https://api.deepai.org/api/fisheye';
                break;
            case 'vignette':
                api_str = 'https://api.deepai.org/api/vignette';
                break;
            case 'glitch':
                api_str = 'https://api.deepai.org/api/glitch';
                break;
            case 'low-poly':
                api_str = 'https://api.deepai.org/api/low-poly';
                break;
            case 'editor':
            default:
                api_str = 'https://api.deepai.org/api/image-editor';
                break;
        } const media_cn = await sock.downloadMediaMessage(quoted);
          try {
            const formData = new FormData();
            formData.append('image', media_cn, 'image.png');
            const { data } = await axios.post(api_str, formData, {
                headers: {
                    'Api-Key': config.DEEPAI_KEY,
                    ...formData.getHeaders()
                }
            });
            if (data.output_url) {
                const out = await axios.get(data.output_url, { responseType: 'arraybuffer' });
                const naxor = 'xastral-image.png';
                fs.writeFileSync(naxor, out.data);
                await sock.sendMessage(from, { image: { url: naxor }, caption: `*Made with 🤍* , _by_ *_FAMOUS-MD_*\n*Style*: _${style}_` }, MessageType.image);
                fs.unlinkSync(naxor);
            } else {
            }
        } catch (error) {
            console.error(error);
                }
    }
});

Meta({
    command: 'edit_menu',
    category: 'Edit',
    filename: 'editimage',
    handler: async (sock, message) => {
        const { from } = message;
        let menu_str = '*EDIT_AI_MENU:*\n\n';
        styles.forEach((style, index) => {
            menu_str += `${index + 1}. ${style}\n`;
        });
        menu_str += '\n*Utilisation:,* `editimage [style]`';
        await sock.sendMessage(from, { text: menu_str }, MessageType.text);
    }
});
