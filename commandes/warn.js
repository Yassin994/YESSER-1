const { zokou } = require('../framework/zokou');
const {ajouterUtilisateurAvecWarnCount , getWarnCountByJID , resetWarnCountByJID} = require('../bdd/warn')
const s = require("../set")


zokou(
    {
        nomCom : 'warn',
        categorie : 'Group'
        
    },async (dest,zk,commandeOptions) => {

 const {ms , arg, repondre,superUser,verifGroupe,verifAdmin , msgRepondu , auteurMsgRepondu} = commandeOptions;
if(!verifGroupe ) {repondre('this is a group commands') ; return};

if(verifAdmin || superUser) {
   if(!msgRepondu){repondre('reply a message of user to warn'); return};
   
   if (!arg || !arg[0] || arg.join('') === '') {
    await ajouterUtilisateurAvecWarnCount(auteurMsgRepondu)
   let warn = await getWarnCountByJID(auteurMsgRepondu)
   let warnlimit = s.WARN_COUNT
   
   if( warn >= warnlimit ) { await repondre('𝘁𝗵𝗶𝘀 𝗳𝘂𝗰𝗸𝗲𝗿 𝗿𝗲𝗮𝗰𝗴 𝗹𝗶𝗺𝗶𝘁 𝗼𝗳 𝘄𝗮𝗿𝗻𝗶𝗻𝗴  , 𝘀𝗼 𝗮𝘀 𝗮𝗱𝗺𝗶𝗻 𝗶 𝗸𝗶𝗰𝗸 𝘁𝗵𝗶𝘀 𝘀𝘁𝘂𝗽𝗶𝗱.!');
                zk.groupParticipantsUpdate(dest, [auteurMsgRepondu], "remove")
 } else { 

    var rest = warnlimit - warn ;
     repondre(`𝘀𝘁𝘂𝗽𝗶𝗱.! 𝗿𝗲𝗺𝗼𝘃𝗲𝗱 𝗶𝘀 𝗹𝗼𝗼𝗱𝗶𝗻𝗴....😡 : ${rest} `)
   }
} else if ( arg[0] === 'reset') { await resetWarnCountByJID(auteurMsgRepondu) 

    repondre("𝘀𝘁𝘂𝗽𝗶𝗱.! 𝗿𝗲𝗺𝗼𝘃𝗲𝗱 𝗶𝘀 𝗹𝗼𝗼𝗱𝗶𝗻𝗴... 😡")} else ( repondre('reply to a user by typing  .warn ou .warn reset'))
   
}  else {
    repondre('🤠𝗬𝗢𝗨𝗥 𝗡𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 𝗛𝗘𝗥𝗘 𝗠𝗬 𝗙𝗥𝗜𝗘𝗡𝗗.')
}
 
   });
