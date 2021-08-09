//OTAKUS TECNOLOGICOS
//SEXY QUIEN LO LEA 7w7
//SIGLO 21 : "LA HUMANIDAD ES PRUEBA DE QUE LA EVOLUCION PUEDE IR EN REVERSA"
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    mentionedJid,
    processTime,
    ChatModification,
    whatsappID,
} = require('@adiwajshing/baileys')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

const fs = require("fs")
const axios = require('axios')
const crypto = require('crypto')
const FormData = require('form-data')
const webp = require('webp-converter')
const request = require('request')
const moment = require('moment-timezone')
const util = require('util')
const execter = require('await-exec')
const sizeOf = require('image-size')
const wav = require('node-wav')
const mime = require('mime-types') 
const nrc = require('node-run-cmd')
const { exec, spawn, execSync } = require('child_process')
const fetch = require('node-fetch')
const emojiUnicode = require('emoji-unicode')
const ffmpeg = require('fluent-ffmpeg')
const google = require('google-it')
const get = require('got') 
const FileType = require('file-type')
const cheerio = require('cheerio')
const vapor = require('vapor-text')
const base64Img = require('base64-img')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const toMs = require('ms')
const ms = require('parse-ms')
const imgbb = require('imgbb-uploader')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const cd = 4.32e+7
const lolis = require('lolis.life')
const loli = new lolis()
const figlet = require('figlet')
const path = require('path')
const { exit } = require('process')
const imgugul = require('g-i-s')

//direccion del servidor usado
const { Utils_1 } = require('./node_modules/@adiwajshing/baileys/lib/WAConnection/Utils')

//rutas para datos necesarias en algunos comandos
const welkom = JSON.parse(fs.readFileSync('./basededatosxd/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./basededatosxd/json/nsfw.json'))
const _limit = JSON.parse(fs.readFileSync('./basededatosxd/json/limit.json'))
const samih = JSON.parse(fs.readFileSync('./basededatosxd/json/simi.json'))
const samihhh = JSON.parse(fs.readFileSync('./basededatosxd/json/simi2.json'))
const _registered = JSON.parse(fs.readFileSync('./basededatosxd/usuariosnius/registered.json'));
const anime = JSON.parse(fs.readFileSync('./basededatosxd/json/anime.json'))
const diversion = JSON.parse(fs.readFileSync('./basededatosxd/json/fulldiversion.json'))
const badword = JSON.parse(fs.readFileSync('./basededatosxd/json/badword.json'))
const blocked = JSON.parse(fs.readFileSync('./basededatosxd/json/blocked.json'))
const _antilink = JSON.parse(fs.readFileSync('./basededatosxd/json/antilink.json'))
const _antilinkuwu = JSON.parse(fs.readFileSync('./basededatosxd/json/antilink2.json'))
const antifake = JSON.parse(fs.readFileSync('./basededatosxd/json/antifake.json'))
//nivel :v
const _leveling = JSON.parse(fs.readFileSync('./basededatosxd/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./basededatosxd/json/level.json'))

//Recursos
//Podes incorporar tu propio antitraba :3
const { antitraba } = require('./basededatosxd/uwudefender/antitraba.js')
const { help } = require('./basededatosxd/panelmenu/help')
const { modapk } = require('./basededatosxd/panelmenu/modapk')
const { alist } = require('./basededatosxd/panelmenu/alist')
const { menunsfw } = require('./basededatosxd/panelmenu/menunsfw')
const { menuarteuwu } = require('./basededatosxd/panelmenu/menuarteuwu')
const { menuimagenes } = require('./basededatosxd/panelmenu/menuimagenes')

//apis :v
const lolhumankey = 'NikolaTesla';
const lolhuman = 'AkiRaAPI';
const xteam = 'AkiraBotWa';
const apivinz = 'NikolaTesla';
const zeks = 'apivinz';

//ajustes (editable) 7v7
const up = JSON.parse(fs.readFileSync('./basededatosxd/json/informacion.json'));
const memberLimit = up.memberlimit
const limitt = up.mensajes
const namebotuwu = up.namebotuwu
const ownerNumber1 = up.creadorprincipal
const contribuitor = up.contribuidorxd
const contacto01 = up.contactosd
const contacto1 = up.contactosdd
const nombrecontact = up.sdcarduwu

//bienbenida
const wlcuwu = JSON.parse(fs.readFileSync('./basededatosxd/json/bienbenidauwu.json'));
const bienbenida1 = wlcuwu.bienbenida1
const bienbenida2 = wlcuwu.bienbenida2
const bienbenida3 = wlcuwu.bienbenida3
const bienbenida4 = wlcuwu.bienbenida4

//tu antitraba
const aea = JSON.parse(fs.readFileSync('./basededatosxd/uwudefender/antitrabaxd.json'));
const destravauwu = aea.hackerxxx

//lo que quieras xd
const nombrebot= '𝙉𝙆'; 
const instagram = 'no definido'; 
const miyutub = 'https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA';
const creadoruwu = 'wa.me/51995386439';
const aktif = 'Mi creador anuncia cuando estare Activo y cuando No';

//nidea ._.XD
prefix = "."
ban = [""]

//Tarjera de virtual telefonico
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Matt M.\n'
            + 'ORG:Otakus Tecnologicos;\n'
            + 'TEL;type=CELL;type=VOICE;waid=+51995386439:+51 995 386 439\n'
            + 'END:VCARD'
       
const vcard1 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nombrecontact}\n`
            + 'ORG:NeKosmic UwU;\n'
            + `TEL;type=CELL;type=VOICE;waid=${contacto1}:${contacto01}\n`
            + 'END:VCARD'

/****** FUNCIONES REQUERIDAS ******/
const getRegisteredRandomId = () => {
  return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
  const obj = {
id: userid,
name: sender,
age: age,
time: time,
serial: serials
  }
  _registered.push(obj)
  fs.writeFileSync('./basededatosxd/usuariosnius/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
  let status = false
  Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
  status = true
}
  })
  return status
}
/// 》 UwU 《 ///
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}
function tanggal(){
myMonths = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Deciembre"];
			myDays = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}
function monospace(string) {
return '```' + string + '```'
}
async function starts() {
	const teslagod = new WAConnection()
	teslagod.logger.level = 'warn'
	console.log(banner.string)
	teslagod.on('qr', () => {
		console.log(color('[','red'), color('!','yellow'), color(']','red'), color('Escanea el codigo QR para comenzar mi king :3', 'green'))
	})

	fs.existsSync('./NeKosmic.json') && teslagod.loadAuthInfo('./NeKosmic.json')
	teslagod.on('connecting', () => {
		start('2', '\n\nConectando... U.U')
	})
	teslagod.on('open', () => {
		success('2', '\n\nConectado UwUr')
	})
	await teslagod.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./NeKosmic.json', JSON.stringify(teslagod.base64EncodedAuthInfo(), null, '\t'))

	teslagod.on('group-participants-update', async (anu) => {
		if(antifake.includes(anu.jid)) {
	const mdata = await teslagod.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					teslagod.sendMessage(mdata.id, 'ª', MessageType.text)
					setTimeout(async function () {
						teslagod.groupRemove(mdata.id, [num])
					}, 500)
			    }
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await teslagod.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await teslagod.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.imgur.com/daGiF1x.jpg'
				}
				teks4 = `${bienbenida4}`
				teks3 = `✯𝙿𝚘𝚛 𝙵𝚊𝚟𝚘𝚛 @${num.split('@')[0]} 𝚕𝚕𝚎𝚗𝚎 𝚕𝚊 𝚏𝚒𝚌𝚑𝚊 𝚍𝚎 𝚙𝚛𝚎𝚜𝚎𝚗𝚝𝚊𝚌𝚒ó𝚗✯ \n${bienbenida3}`
				teks2 = `${bienbenida2} \n${mdata.subject} `
				teks = `${bienbenida1} @${num.split('@')[0]} \n~By NK~ ✔`
				let buff = await getBuffer(ppimg)
				teslagod.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				setTimeout( () => {
				teslagod.sendMessage(mdata.id, teks2, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
				}, 1800)
				setTimeout( () => {
				teslagod.sendMessage(mdata.id, teks3, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
				}, 2200)
				setTimeout( () => {
				teslagod.sendMessage(mdata.id, teks4, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
				}, 2600)
				} else if (anu.action == 'promote') {
				num = anu.participants[0]
				try {
					ppimg = await teslagod.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.imgur.com/daGiF1x.jpg'
				}
				teks = `@${num.split('@')[0]} Ahora sos un admin`
				let buff = await getBuffer(ppimg)
				teslagod.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				try {
					ppimg = await teslagod.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.imgur.com/daGiF1x.jpg'
				}
				teks = `@${num.split('@')[0]} Ya no eri admin`
				let buff = await getBuffer(ppimg)
				teslagod.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await teslagod.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.imgur.com/daGiF1x.jpg'
				}
				teks = `Nadie te va a extrañar crack @${num.split('@')[0]} `
				teks5 = ` ෴.෴.෴.෴.෴.෴.෴.෴.෴.\nSe fue alv @${num.split('@')[0]} \n෴.෴.෴.෴.෴.෴.෴.෴.෴.`
				let buff = await getBuffer(ppimg)
				teslagod.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				setTimeout( () => {
				teslagod.sendMessage(mdata.id, teks5, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
				}, 1000)
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'yellow'))
		}
	}
)

		teslagod.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	teslagod.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return 
			mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const farhan = mek.message.conversation
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname = teslagod.contacts[nameReq] != undefined ? teslagod.contacts[nameReq].vname || teslagod.contacts[nameReq].notify : undefined

			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

			const date = new Date().toLocaleDateString()
			const time = moment.tz('America/Lima').format('HH:mm:ss')
			const jam = moment.tz('America/Lima').format('HH:mm')

			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const automensajesxd = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const rtpuwu = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const Far = args.join(' ')
			const txt = mek.message.conversation
			const isCmd = body.startsWith(prefix)
			teslagod.chatRead(from)
			

			mess = {
				wait: '⏳Procesando,por favor espere UwU⏳',
				wait2: 'Cargando... por favor espere marrano kun, Este proceso puede tomar cierto tiempo u.u🕰',
				analice: '🔬Calculando su porcentaje, aguarde...💉',
				audigen: 'Generando audio espere :3',
				success: '[ ✔ ]Completado :D',
				ferr: '_*Intente nuevamente :)*_',
				leveloff: '[ ❌ ] *Nivel fue desactivado €_€*',
				levelon: '[✔]Nivelear fue activado con etsito',
			    levelnoton: '[ ❗ ] *Nivel desactivado U.U*',
				levelnol: '*NIVEL MUY BAJO*',
				error: {
					stick: '[❌ ] Lo siento, no se pudo convertir imagen a sticker :c\nIntente nuevamente',
					Iv: '❌ Link inválido ❌'
				},
				only: {
					group: '[❗] Este comando solo se puede usar en grupos!',
					benned: '❗ *Estas baneado u.u* ❗',
					ownerG: '[❗] Este comando solo lo puede usar el creador del grupo!',
					ownerB: '[❗] Este comando solo lo puede usar el creador del bot!',
					premium: '*ᴍᴀᴀꜰ ꜰɪᴛᴜʀ ɪɴɪ ᴋʜᴜꜱᴜꜱ ᴜꜱᴇʀ ᴩʀᴇᴍɪᴜᴍ!*',
					admin: '[❗] Este comando solo puede ser usado por los administradores del grupo!',
					Badmin: ' [❗] ⚡ El bot deve ser ascendido a admin! ⚡',
					RgOwO: 'No estas registrado en mi base de datos\n\nPorfavor use comando .rg nombre|edad\nEjm: .rg Matt|19'
				}
			}

			const botNumber = teslagod.user.jid
			const contribuidores = [`wa.me/${contribuitor}`]
			const ownerNumber = [`${ownerNumber1}@s.whatsapp.net`] // replace this with your number
			const adminbotnumber = [`${contribuitor}@s.whatsapp.net`]//ubah nomor lo
			const frendsowner = ["51995386439@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await teslagod.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const totalchat = await teslagod.chats.all()
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false 
			const isSimisimi = isGroup ? samihhh.includes(from) : false 
			const isDiversion = isGroup ? diversion.includes(from) : false
			const isAntiLink = isGroup ? _antilink.includes(from) : false 
			const isAntiLinkuwu = isGroup ? _antilinkuwu.includes(from) : false
			const isAntiFake = isGroup ? antifake.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isRegister = checkRegisteredUser(sender)
			const isOwner = ownerNumber.includes(sender)
			const errorurl2 = fs.readFileSync(`./recursos/multimediauwu/urlerror.jpg`)
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
			const isBanned = ban.includes(sender)
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = teslagod.user.phone
			const reply = (teks) => {
				teslagod.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendImage = (teks) => {
		    teslagod.sendMessage(from, teks, image, {quoted:mek})
		    }
			const sendMess = (hehe, teks) => {
				teslagod.sendMessage(hehe, teks, text)
	        }
				const sendPtt = (teks) => {
		    teslagod.sendMessage(from, audio, mp3, {quoted:mek})
			}
			const costum = (pesan, tipe, target, target2) => {
			teslagod.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? teslagod.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : teslagod.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			
 //No editar si no sabes :u
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }        

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./basededatosxd/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./basededatosxd/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./basededatosxd/json/level.json', JSON.stringify(_level))
        }
        
 //funcion de limite
           const isLimit = (sender) =>{
                      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitt ) {
                  position = true
                    teslagod.sendMessage(from, limitend(pushname), text, {quoted: mek})
                    return true
              } else {
                _limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./basededatosxd/json/limit.json',JSON.stringify(_limit))
           return false
       }
     }
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./basededatosxd/json/limit.json', JSON.stringify(_limit))
            }
        }
        
//audidata
        const sendFileFromUrl = async(link, type, options) => {
  	hasil = await getBuffer(link)
	teslagod.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	teslagod.sendMessage(from, hasil, type, options).catch(e => {
	teslagod.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error al descargar el archivo_')
	  console.log(e)
	})
	})
	})
	})
	}
//estado :D
const estadouwur1 = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "imageMessage": { "mimetype": "image/jpeg","caption": `𝙉𝙚𝙆𝙤𝙨𝙢𝙞𝙘-𝘽𝙤𝙩`, 'jpegThumbnail': fs.readFileSync('./recursos/multimediauwu/logouwur.jpg')}}
}
contextInfo: {
mentionedJid: [sender]}
const cuestionuwu = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "imageMessage": { "mimetype": "image/jpeg","caption": `${pushname}?`, 'jpegThumbnail': fs.readFileSync('./recursos/multimediauwu/ajammm.jpg')}}
}
contextInfo: {
mentionedJid: [sender]}
const audiowo = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "audioMessage": { "caption":"𝙉𝙚𝙆𝙤𝙨𝙢𝙞𝙘-𝘽𝙤𝙩", 'jpegThumbnail': fs.readFileSync('./recursos/multimediauwu/audiqwq.jpeg')}}
}
contextInfo: {
mentionedJid: [sender]}
const audiowor = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "audioMessage": {"mimetype": "audio/mp4", "ptt": true, "seconds": -999999}}
}
contextInfo: {
mentionedJid: [sender]}
//subiendo de nivel xd
const levelRole = getLevelingLevel(sender)
        var role = 'Esclavo Nivel-Ⅰ'
        if (levelRole <= 2) {
            role = 'Esclavo Nivel-Ⅱ'
        } else if (levelRole <= 3) {
            role = 'Esclavo Nivel-Ⅲ'
        } else if (levelRole <= 4) {
            role = 'Esclavo Nivel-Ⅳ'
        } else if (levelRole <= 5) {
            role = 'Esclavo Nivel-Ⅴ'
        } else if (levelRole <= 6) {
            role = 'Esclavo Nivel-Ⅴ...'
        } else if (levelRole <= 7) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 8) {
            role = 'Recluta Nivel-Ⅰ'
        } else if (levelRole <= 10) {
            role = 'Recluta Nivel-Ⅱ'
        } else if (levelRole <= 12) {
            role = 'Recluta Nivel-Ⅲ'
        } else if (levelRole <= 14) {
            role = 'Recluta Nivel-Ⅳ'
        } else if (levelRole <= 16) {
            role = 'Recluta Nivel-Ⅴ'
        } else if (levelRole <= 19) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 20) {
            role = 'Soldado De Primera Clase'
        } else if (levelRole <= 22) {
            role = 'Soladado Con Honores'
        } else if (levelRole <= 25) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 26) {
            role = 'Especialista'
        } else if (levelRole <= 29) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 30) {
            role = 'Cabo Sub-1'
        } else if (levelRole <= 32) {
            role = 'Cabo Sub-2'
        } else if (levelRole <= 34) {
            role = 'Cabo Sub-3'
        } else if (levelRole <= 37) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 38) {
            role = 'Sargento'
        } else if (levelRole <= 40) {
            role = 'Sargento de Segunda Clase'
        } else if (levelRole <= 42) {
            role = 'Sargento de Primera Clase'
        } else if (levelRole <= 44) {
            role = 'Sargento Maestro'
        } else if (levelRole <= 46) {
            role = 'Sargento Primero'
        } else if (levelRole <= 48) {
            role = 'Sargento Mayor'
        } else if (levelRole <= 50) {
            role = 'Sargento Mayor de Comando'
        } else if (levelRole <= 51) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 52) {
            role = 'Teniente'
        } else if (levelRole <= 54) {
            role = 'Teniente Primero'
        } else if (levelRole <= 57) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 58) {
            role = 'Capitan'
        } else if (levelRole <= 60) {
            role = 'Capitan Teniente'
        } else if (levelRole <= 63) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 64) {
            role = 'Mayor'
        } else if (levelRole <= 67) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 68) {
            role = 'Teniente coronel'
        } else if (levelRole <= 71) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 72) {
            role = 'Coronel [－]'
        } else if (levelRole <= 74) {
            role = 'Coronel [＝]'
        } else if (levelRole <= 76) {
            role = 'Coronel [≡]'
        } else if (levelRole <= 78) {
            role = 'Coronel [≥]'
        } else if (levelRole <= 80) {
            role = 'Coronel [≧]'
        } else if (levelRole <= 83) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 84) {
            role = 'General de brigada ㈠'
        } else if (levelRole <= 86) {
            role = 'General de brigada ㈡'
        } else if (levelRole <= 88) {
            role = 'General de brigada ㈢'
        } else if (levelRole <= 91) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 92) {
            role = 'General ︾'
        } else if (levelRole <= 94) {
            role = 'General ︾︾'
        } else if (levelRole <= 96) {
            role = 'General ︾︾︾'
        } else if (levelRole <= 99) {
            role = '*FELICIDADES CRACK*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 100) {
            role = 'Lider De Alto Mando •'
        } else if (levelRole <= 102) {
            role = 'Lider De Alto Mando ••'
        } else if (levelRole <= 104) {
            role = 'Lider De Alto Mando ⊙'
        } else if (levelRole <= 106) {
            role = 'Lider De Alto Mando ⊚'
        } else if (levelRole <= 108) {
            role = 'Lider De Alto Mando ⊛'
        } else if (levelRole <= 111) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 112) {
            role = 'Retirado Con Honores'
        } else if (levelRole <= 115) {
            role = '*FELICIDADES MASTER*\n_Estas apunto de pasar a nuevos niveled sigue asi!!!_ ⇑'
        } else if (levelRole <= 116) {
            role = 'Heroe Bronce ☆'
        } else if (levelRole <= 118) {
            role = 'Heroe Plata ☆'
        } else if (levelRole <= 120) {
            role = 'Heroe Oro ☆'
        } else if (levelRole <= 122) {
            role = 'Heroe Diamante ☆'
        } else if (levelRole <= 123) {
            role = '*FELICIDADES MASTER*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 124) {
            role = 'Leyenda ✩'
        } else if (levelRole <= 125) {
            role = 'Leyenda ✩✩'
        } else if (levelRole <= 126) {
            role = 'Leyenda ✩✩✩'
        } else if (levelRole <= 127) {
            role = 'Leyenda ✩✩✩✩'
        } else if (levelRole <= 128) {
            role = 'Leyenda ✩✩✩✩✩'
        } else if (levelRole <= 129) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 130) {
            role = 'Angel ✬'
        } else if (levelRole <= 132) {
            role = 'Angel ✬✬'
        } else if (levelRole <= 134) {
            role = 'Angel ✬✬✬'
        } else if (levelRole <= 145) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 136) {
            role = 'Principado ✯'
        } else if (levelRole <= 138) {
            role = 'Principado ✯✯'
        } else if (levelRole <= 140) {
            role = 'Principado ✯✯✯'
        } else if (levelRole <= 141) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 142) {
            role = 'Potestad ✪'
        } else if (levelRole <= 144) {
            role = 'Potestad ✪✪'
        } else if (levelRole <= 146) {
            role = 'Potestad ✪✪✪'
        } else if (levelRole <= 147) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 148) {
            role = 'Grigori ♧'
        } else if (levelRole <= 152) {
            role = 'Grigori ♧♧'
        } else if (levelRole <= 154) {
            role = 'Grigori ♧♧♧'
        } else if (levelRole <= 155) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 156) {
            role = 'Paladin ♤'
        } else if (levelRole <= 158) {
            role = 'Paladin ♤♤'
        } else if (levelRole <= 160) {
            role = 'Paladin ♤♤♤'
        } else if (levelRole <= 161) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 162) {
            role = 'Regente Tipo 1'
        } else if (levelRole <= 164) {
            role = 'Regente Tipo 2'
        } else if (levelRole <= 166) {
            role = 'Regente Tipo 3'
        } else if (levelRole <= 168) {
            role = 'Regente Tipo 4'
        } else if (levelRole <= 170) {
            role = 'Regente Tipo 5'
        } else if (levelRole <= 171) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 172) {
            role = 'Arcangel •'
        } else if (levelRole <= 174) {
            role = 'Arcangel ○'
        } else if (levelRole <= 176) {
            role = 'Arcangel ●'
        } else if (levelRole <= 178) {
            role = 'Arcangel □'
        } else if (levelRole <= 180) {
            role = 'Arcangel ■'
        } else if (levelRole <= 181) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 182) {
            role = 'Guardia Celestial Tipo 1'
        } else if (levelRole <= 184) {
            role = 'Guardia Celestial Tipo 2'
        } else if (levelRole <= 186) {
            role = 'Guardia Celestial Tipo 3'
        } else if (levelRole <= 188) {
            role = 'Guardia Celestial Tipo 4'
        } else if (levelRole <= 190) {
            role = 'Guardia Celestial Tipo 5'
        } else if (levelRole <= 191) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 192) {
            role = 'Ascension Divina Proceso 1.0...'
        } else if (levelRole <= 194) {
            role = 'Ascension Divina Proceso 2.0...'
        } else if (levelRole <= 196) {
            role = 'Ascension Divina Proceso 3.0...'
        } else if (levelRole <= 198) {
            role = 'Ascension Divina Proceso 4.0...'
        } else if (levelRole <= 200) {
            role = 'Ascension Divina Proceso 5.0...'
        } else if (levelRole <= 209) {
            role = 'Ascendiendo A Poderes Divinos ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 210) {
            role = 'Entidad Menor Tipo I'
        } else if (levelRole <= 220) {
            role = 'Entidad Menor Tipo II'
        } else if (levelRole <= 230) {
            role = 'Entidad Menor Tipo III'
        } else if (levelRole <= 240) {
            role = 'Entidad Menor Tipo IV'
        } else if (levelRole <= 250) {
            role = 'Entidad Menor Tipo V'
        } else if (levelRole <= 259) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 260) {
            role = 'Entidad Mayor Tipo I'
        } else if (levelRole <= 270) {
            role = 'Entidad Mayor Tipo II'
        } else if (levelRole <= 280) {
            role = 'Entidad Mayor Tipo III'
        } else if (levelRole <= 290) {
            role = 'Entidad Mayor Tipo IV'
        } else if (levelRole <= 300) {
            role = 'Entidad Mayor Tipo V'
        } else if (levelRole <= 309) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 310) {
            role = 'Semi-Dios ◇'
        } else if (levelRole <= 320) {
            role = 'Semi-Dios ◇◇'
        } else if (levelRole <= 330) {
            role = 'Semi-Dios ◇◇◇'
        } else if (levelRole <= 340) {
            role = 'Semi-Dios ◇◇◇◇'
        } else if (levelRole <= 349) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 350) {
            role = 'Forjador De Mundos •'
        } else if (levelRole <= 360) {
            role = 'Forjador De Mundos ▪︎'
        } else if (levelRole <= 370) {
            role = 'Forjador De Mundos ○'
        } else if (levelRole <= 380) {
            role = 'Forjador De Mundos ●'
        } else if (levelRole <= 390) {
            role = 'Forjador De Mundos □'
        } else if (levelRole <= 400) {
            role = 'Forjador De Mundos ■'
        } else if (levelRole <= 410) {
            role = 'Forjador De Mundos ♡'
        } else if (levelRole <= 419) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 420) {
            role = 'Dios Nivel 0'
        } else if (levelRole <= 430) {
            role = 'Dios Nivel 1'
        } else if (levelRole <= 440) {
            role = 'Dios Nivel 2'
        } else if (levelRole <= 450) {
            role = 'Dios Nivel 3'
        } else if (levelRole <= 460) {
            role = 'Dios Nivel 4'
        } else if (levelRole <= 470) {
            role = 'Dios Nivel 5'
        } else if (levelRole <= 480) {
            role = 'Dios Nivel 8'
        } else if (levelRole <= 490) {
            role = 'Dios Nivel 10'
        } else if (levelRole <= 499) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 500) {
            role = 'Señor de Panteón Tipo-I'
        } else if (levelRole <= 600) {
            role = 'Señor de Panteón Tipo-II'
        } else if (levelRole <= 700) {
            role = 'Señor de Panteón Tipo-III'
        } else if (levelRole <= 799) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 800) {
            role = 'Juez Del Destino Faze Intermedia'
        } else if (levelRole <= 900) {
            role = 'Juez Del Destino Faze Avanzada'
        } else if (levelRole <= 999) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 1000) {
            role = 'Control De La Materia Fase 1'
        } else if (levelRole <= 2000) {
            role = 'Control De La Materia Fase 2'
        } else if (levelRole <= 3000) {
            role = 'Control De La Materia Fase 3'
        } else if (levelRole <= 4000) {
            role = 'Control De La Materia Fase 4'
        } else if (levelRole <= 5000) {
            role = 'Control De La Materia Fase 5'
        } else if (levelRole <= 5999) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 6000) {
            role = 'Controlador Del Universo\nFase 1'
        } else if (levelRole <= 7000) {
            role = 'Controlador Del Universo\nFase 2'
        } else if (levelRole <= 8000) {
            role = 'Controlador Del Universo\nFase 3'
        } else if (levelRole <= 8999) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 9000) {
            role = 'EN ASCENSO A UN PODER INIMAGINABLE...'
        } else if (levelRole <= 10000) {
            role = '*Control Del Todo Absoluto-Por encima de Dios*\n\nEn este nivel el usuario devera ganarse administracion en el grupo :3'
			}
//casino :v
			const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍐 : 🍒 : 🍋',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍐 : 🍒 : 🍋',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍌 : 🍌 : 🍌'
		]

			colors = ['red','white','black','blue','yellow','green', 'aqua']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			const checkLimit = (sender) => {
                let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitt - lmt.limit
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./basededatosxd/json/limit.json', JSON.stringify(_limit))
                        teslagod.sendMessage(from, limitcount(limitCounts), text, { quoted : mek})
                    }
                                }
                                
                    //function level
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`「 ⚡ACTUALIZACION DE NIVEL⚡  」\n\n➸ *Nombre*: ${pushname}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Nivel*: ${getLevel} -> ${getLevelingLevel(sender)}\n➸ *De acuerdo a tu XP pasas a ser*: ${role}`)
                }
            } catch (err) {
                console.error(err)
            }
        }
          
//Limite en un grupo de whatsapp para que se quede xd                       
                        if (isGroup) {
				try {
					const getmemex = groupMembers.length	
					    if (getmemex <= memberLimit) {
						reply(`Hmmm...`)
						setTimeout( () => {
 	                           teslagod.groupLeave(from) 
 					   	}, 5800)
								setTimeout( () => {
								teslagod.updatePresence(from, Presence.composing)
								reply(`Pedir soporte o ayuda a wa.me/${ownerNumber1} `)
							}, 4500)
								setTimeout( () => {
								teslagod.updatePresence(from, Presence.composing)
								reply("https://youtu.be/ed-6VSF-GGc")
							}, 3500)
								setTimeout( () => {
								teslagod.updatePresence(from, Presence.composing)
								reply("https://vm.tiktok.com/ZMegTanV3/")
							}, 2500)
								setTimeout( () => {
								teslagod.updatePresence(from, Presence.composing)
								reply("*Este grupo no cumple con los requerimientos para el bot*")
							}, 1500)
								setTimeout( () => {
								teslagod.updatePresence(from, Presence.composing)
								reply(` *Lo ciento, minimo de miembros requeridos en el grupo deve ser* ${memberLimit}`)
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 
//Respeto en grupos UvU
if (automensajesxd.includes("mierda")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('No use esas palabras porfavor u.u')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
	
	if (automensajesxd.includes("pene")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('Por favor no use esas palabras')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
	
	if (automensajesxd.includes("vagina")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('Por favor no use esas palabras')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
	
	if (automensajesxd.includes("put")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('Por favor sea respetuoso')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
	
	if (automensajesxd.includes("carajo")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('Por favor sea respetuoso')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
	
	if (automensajesxd.includes("culo")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('Por favor sea respetuoso')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
	
	if (automensajesxd.includes("imbecil")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('Por favor sea respetuoso con los demas')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso con los demas ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
	
	if (automensajesxd.includes("estupido")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('Por favor sea respetuoso con los demas')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso con los demas ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
//AutoBot :v
       if (automensajesxd.includes("://chat.whatsapp.com/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply(`Se detecto un enlace\nVos eri un administrador, así que no te prohibiré el uso de enlaces`)
					teslagod.updatePresence(from, Presence.composing)
					if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin *_「 ACEPTADO 」_*")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`*Desterrado del grupo, motivo = Incumplir una regla*  ❗enviar link de otro grupo❗`)
						setTimeout( () => {
						teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
		}
		
		if (automensajesxd.includes("https://")){
					if (!isGroup) return
					if (!isAntiLinkuwu) return
					if (isGroupAdmins) return reply(`Se detecto un link\nVos eri un administrador, así que no te prohibiré el uso de links`)
					teslagod.updatePresence(from, Presence.composing)
					if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin *_「 ACEPTADO 」_*")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`*Link detectado, eso esta prohebido*`)
						setTimeout( () => {
						teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
		} 
		
		if (automensajesxd.includes("http://")){
		if (!isGroup) return
		if (!isAntiLinkuwu) return
		if (isGroupAdmins) return reply('Se detecto un link\nVos eri un administrador, así que no te prohibiré el uso de links')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link detectado ${sender.split("@")[0]} adiuuu`)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("🌧⛈🌧🌧")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("🌧🌧🌧🌧")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("☁️☁️☁️☁️")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("☁️🌥☁️")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("☀️")
		}, 0)
	}
		
//autorrespuestas
	
	if (automensajesxd.includes(("antitraba"),("Antitraba"))){
			teslagod.updatePresence(from, Presence.composing)
			reply(`${destravauwu}`)
	}
	
	if (automensajesxd.includes(("destraba"),("Destraba"))){
			teslagod.updatePresence(from, Presence.composing)
			reply(`${destravauwu}`)
	}
	if (automensajesxd.includes(("antitrava"),("Antitrava"))){
			teslagod.updatePresence(from, Presence.composing)
			reply(`${destravauwu}`)
	}
	
	if (automensajesxd.includes(("destrava"),("Destrava"))){
			teslagod.updatePresence(from, Presence.composing)
			reply(`${destravauwu}`)
	}
	
	if (automensajesxd.includes(("help"), ("Help"))){
			teslagod.updatePresence(from, Presence.composing)
			reply(` *digite comando ${prefix}ayuda* :) `)
	}
	
	if (automensajesxd.includes(("menu"), ("Menu"))){
			teslagod.updatePresence(from, Presence.composing)
			reply(` *digite comando ${prefix}ayuda para ver el resto de comandos* :) `)
	}
	
//cringe moment xd
	
	if (automensajesxd.includes("owo")){
			teslagod.updatePresence(from, Presence.composing)
			result = fs.readFileSync(`./misstksuwu/sticker/owobot.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek})
	}
	
	if (automensajesxd.includes("awa")){
			teslagod.updatePresence(from, Presence.composing)
			result = fs.readFileSync(`./misstksuwu/sticker/awabot.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek})
	}
	
	if (automensajesxd.includes("ewe")){
			teslagod.updatePresence(from, Presence.composing)
			result = fs.readFileSync(`./misstksuwu/sticker/ewebot.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek})
	}
	
	if (automensajesxd.includes("unu")){
			teslagod.updatePresence(from, Presence.composing)
			result = fs.readFileSync(`./misstksuwu/sticker/unubot.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek})
	}
	
	if (automensajesxd.includes("7v7")){
			teslagod.updatePresence(from, Presence.composing)
			result = fs.readFileSync(`./misstksuwu/sticker/7v7bot.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek})
	}
	
	if (automensajesxd.includes("7w7")){
			teslagod.updatePresence(from, Presence.composing)
			result = fs.readFileSync(`./misstksuwu/sticker/7w7bot.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek})
	}
	
	if (automensajesxd.includes("7u7")){
			teslagod.updatePresence(from, Presence.composing)
			result = fs.readFileSync(`./misstksuwu/sticker/7u7bot.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek})
	}
	
	if (automensajesxd.includes("zzz")){
			teslagod.updatePresence(from, Presence.composing)
			reply(`*Tienes sueño o anemia?*\n_*Ve al medico y notaras la diferencia ;)*_ `)
	}
	
	if (automensajesxd.includes("impostor")){
			teslagod.updatePresence(from, Presence.composing)
			reply(`*AmongUs*`)
	}
	
	if (automensajesxd.includes("ctm")){
			teslagod.updatePresence(from, Presence.composing)
			reply(`*Cuida-Tu-Mundo* `)
	}
	
//insultos fuertes :v
	
	if (automensajesxd.includes("tonto")){
			teslagod.updatePresence(from, Presence.composing)
			reply(` Se detecto un insulto muy fuerte : \n*Tonto* `)
	}
	
	if (automensajesxd.includes("bobo")){
			teslagod.updatePresence(from, Presence.composing)
			reply(` Se detecto un insulto muy fuerte : \n*Tonto* `)
	}
	
	if (automensajesxd.includes("papanatas")){
			teslagod.updatePresence(from, Presence.composing)
			reply(` Se detecto un insulto muy fuerte : \n*Papanatas* `)
	}
	
	if (automensajesxd.includes("perseve")){
			teslagod.updatePresence(from, Presence.composing)
			reply(` Se detecto un insulto muy fuerte : \n*Perseve* `)
	}
	
	if (automensajesxd.includes("pelele")){
			teslagod.updatePresence(from, Presence.composing)
			reply(` Se detecto un insulto muy fuerte : \n*Pelele* `)
	}
	
	if (automensajesxd.includes("pamplinas")){
			teslagod.updatePresence(from, Presence.composing)
			reply(` Se detecto un insulto muy fuerte : \n*Pamplinas* `)
	}
	
	if (automensajesxd.includes("chispas")){
			teslagod.updatePresence(from, Presence.composing)
			reply(` Se detecto un insulto muy fuerte : \n*Chispas* `)
	}
	
	if (automensajesxd.includes("zarrapastroso")){
			teslagod.updatePresence(from, Presence.composing)
			reply(` Se detecto un insulto muy fuerte : \n*Zarrapastroso* `)
	}
	
	if (automensajesxd.includes("sonso")){
			teslagod.updatePresence(from, Presence.composing)
			reply(` Se detecto un insulto muy fuerte : \n*Sonso* `)
	}
	
	if (automensajesxd.includes("longaniza")){
			teslagod.updatePresence(from, Presence.composing)
			reply(` Se detecto un insulto muy fuerte : \n*Longaniza* `)
	}
	
	if (automensajesxd.includes("mentecato")){
			teslagod.updatePresence(from, Presence.composing)
			reply(` Se detecto un insulto muy fuerte : \n*Mentecato* `)
	}

//antienfermos
	
	if (automensajesxd.includes(("porno"),("Porno"))){
			teslagod.updatePresence(from, Presence.composing)
			reply(`https://www.interpol.int 𝙸𝚗𝚝𝚎𝚛𝚙𝚘𝚕 𝚖𝚘𝚗𝚒𝚝𝚘𝚛𝚎𝚊 𝚕𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚍𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 ${pushname}️ , 𝙿𝚘𝚛 𝚛𝚊𝚣𝚘𝚗𝚎𝚜 𝚍𝚎 𝚜𝚎𝚐𝚞𝚛𝚒𝚍𝚊𝚍 𝚝𝚞 𝚗𝚞𝚖𝚎𝚛𝚘 𝚜𝚎𝚛𝚊 𝚊𝚐𝚎𝚗𝚍𝚊𝚍𝚘 𝚎𝚗 𝚕𝚊 *Database* `)
	}
	
	if (automensajesxd.includes(("xxx"),("XXX"))){
			teslagod.updatePresence(from, Presence.composing)
			reply(`https://www.interpol.int 𝙸𝚗𝚝𝚎𝚛𝚙𝚘𝚕 𝚖𝚘𝚗𝚒𝚝𝚘𝚛𝚎𝚊 𝚕𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚍𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 ${pushname}️ , 𝙿𝚘𝚛 𝚛𝚊𝚣𝚘𝚗𝚎𝚜 𝚍𝚎 𝚜𝚎𝚐𝚞𝚛𝚒𝚍𝚊𝚍 𝚝𝚞 𝚗𝚞𝚖𝚎𝚛𝚘 𝚜𝚎𝚛𝚊 𝚊𝚐𝚎𝚗𝚍𝚊𝚍𝚘 𝚎𝚗 𝚕𝚊 *Database* `)
	}
	
//especial bot
	
	if (automensajesxd.includes("bot")){
			teslagod.updatePresence(from, Presence.composing)
			rm = [
			result = fs.readFileSync(`./misstksuwu/sticker/unu.webp`),
			result1 = fs.readFileSync(`./misstksuwu/sticker/unu1.webp`),
			result2 = fs.readFileSync(`./misstksuwu/sticker/unu2.webp`),
			result3 = fs.readFileSync(`./misstksuwu/sticker/unu3.webp`),
			result4 = fs.readFileSync(`./misstksuwu/sticker/unu4.webp`),
			result5 = fs.readFileSync(`./misstksuwu/sticker/unu5.webp`)
			]
			nk = rm[Math.floor(Math.random() * rm.length)]
  			teslagod.sendMessage(from, nk, sticker, {
			quoted: estadouwur1, "forwardingScore": 9999, "isForwarded": true
  			})
			}

//autorrespuesta multimedia
 
            if (automensajesxd.includes("hentai")){
			teslagod.updatePresence(from, Presence.composing)
			wlcda = fs.readFileSync('./fiestamp3/audiouwu/tiktoknekosmic.mp3');
            teslagod.sendMessage(from, wlcda, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			reply(`*Alguien dijo hentai* 🥵🤙\n\nˢᶦ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ ᵗᶦᵉⁿᵉ ᵘⁿᵃ ʳᵉᵍˡᵃ ᑫᵘᵉ ⁿᵒ ᵃᶜᵉᵖᵗᵃ ᵉˢᵗᵉ ᵗᶦᵖᵒ ᵈᵉ ᵐᵃᵗᵉʳᶦᵃˡ ᵖᵒʳ ᶠᵃᵛᵒʳ ⁿᵒ ˡᵒ ᶜᵒᵐᵖᵃʳᵗᵃ`)
	}
	
			if (automensajesxd.includes("kawai")){
			teslagod.updatePresence(from, Presence.composing)
			audioxdc = fs.readFileSync('./fiestamp3/audiouwu/onichan.mp3');
            teslagod.sendMessage(from, audioxdc, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
	if (automensajesxd.includes("yamete")){
			teslagod.updatePresence(from, Presence.composing)
			audioxdc = fs.readFileSync('./fiestamp3/audiouwu/yamete.mp3');
            teslagod.sendMessage(from, audioxdc, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
	if (automensajesxd.includes("baka")){
			teslagod.updatePresence(from, Presence.composing)
			audioxdc = fs.readFileSync('./fiestamp3/audiouwu/baka.mp3');
            teslagod.sendMessage(from, audioxdc, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
	if (automensajesxd.includes("araara")){
			teslagod.updatePresence(from, Presence.composing)
			audioxdc = fs.readFileSync('./fiestamp3/audiouwu/araara.mp3');
            teslagod.sendMessage(from, audioxdc, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (automensajesxd.includes("onich")){
			teslagod.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./fiestamp3/audiouwu/onich.mp3');
            teslagod.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
          
	        if (automensajesxd.includes("kudasai")){
			teslagod.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./fiestamp3/audiouwu/ya.mp3');
            teslagod.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
//minimedia
	
				if (automensajesxd.includes("randomxd")){
			teslagod.updatePresence(from, Presence.composing)
			data = fs.readFileSync('./fakeapixd/milenialxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, 'bruh')
	}
	
	if (automensajesxd.includes("pata")){
			teslagod.updatePresence(from, Presence.composing)
			data = fs.readFileSync('./fakeapixd/patasxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, 'patas 🥵')
	}
	
	if (automensajesxd.includes("muslo")){
			teslagod.updatePresence(from, Presence.composing)
			data = fs.readFileSync('./fakeapixd/muslosss.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, 'muslos 😳')
	}
	
	if (automensajesxd.includes("sexo")){
			teslagod.updatePresence(from, Presence.composing)
			data = fs.readFileSync('./fakeapixd/santabiblia.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, 'SEEEXXXOOOOOOOOO!!!')
	}
	
	if (automensajesxd.includes("tesla")){
			teslagod.updatePresence(from, Presence.composing) 
	     	const d = fs.readFileSync('./misstksuwu/sticker/teslagod.webp');
            teslagod.sendMessage(from, d, sticker, {quoted: mek})
    }
        
       /* if (automensajesxd.includes("verify")){
		teslagod.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./basededatosxd/kiana/1.mp3')
        teslagod.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }*/
        
        
        /*if (automensajesxd.includes("kiana")){  // respon tag ubah aja
        const d = fs.readFileSync('./misstksuwu/sticker/4528.webp');
        teslagod.sendMessage(from, d, sticker, {quoted: mek})
        }*/
        
     		if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEjecutando\x1b[1;37m]', time, color(command), 'Numero', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRecibido\x1b[1;37m]', time, color('Message'), 'Numero', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEjecutando\x1b[1;37m]', time, color(command), 'Numero', color(sender.split('@')[0]), 'Grupo', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRecibido\x1b[1;37m]', time, color('Message'), 'Numero', color(sender.split('@')[0]), 'Grupo', color(groupName), 'args :', color(args.length))
			let authorname = teslagod.contacts[from] != undefined ? teslagod.contacts[from].vname || teslagod.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }
			function addMetadata(packname, author) {
				if (!packname) packname = 'Otakus Tecnologicos'; if (!author) author = 'Matt M.';
				author = author.replace(/[^a-zA-Z0-9]/g, '');
				let name = `${author}_${packname}`

				if (fs.existsSync(`./misstksuwu/${name}.exif`)) {
					return `./misstksuwu/${name}.exif`
				}
				const json = {
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}

				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

				let len = JSON.stringify(json).length
				let last

				if (len > 256) {
					len = len - 256
					bytes.unshift(0x01)
				} else {
					bytes.unshift(0x00)
				}

				if (len < 16) {
					last = len.toString(16)
					last = "0" + len
				} else {
					last = len.toString(16)
				}

				const buf2 = Buffer.from(last, "hex")
				const buf3 = Buffer.from(bytes)
				const buf4 = Buffer.from(JSON.stringify(json))

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

				fs.writeFile(`./misstksuwu/${name}.exif`, buffer, (err) => {
					return `./misstksuwu/${name}.exif`
				}
			)
		}

//comienzo de la magia xd
			switch(rtpuwu) {
case 'ola':
const offline1 =[`ℍolaaaa ${pushname} \n¿Como estas mi destinguido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaaa ${pushname} \n¿Como estas mi Excelentísimo amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal `,`ℍolaaaaa ${pushname} \n¿Como estas mi Apreciado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaa ${pushname} \n¿Como estas mi Honorable amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaa ${pushname} \n¿Como estas mi Estimado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaaaa ${pushname} \n¿Como estas wap@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaaaaa ${pushname} \n¿Como estas mi king? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaa ${pushname} \n¿Como estas mi rey ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaa ${pushname} \n¿Como estas mi querido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaa ${pushname} \n¿Como estas? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal `,`ℍolaa ${pushname} \n¿Que tal mi destinguido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaaaa ${pushname} \n¿Que tal mi Excelentísimo amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal `,`ℍolaaaa ${pushname} \n¿Que tal mi Apreciado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaaaa ${pushname} \n¿Que tal mi Honorable amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaaa ${pushname} \n¿Que tal mi Estimado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaaaa ${pushname} \n¿Que tal wap@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaa ${pushname} \n¿Que tal mi king? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaa ${pushname} \n¿Que tal mi rey ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaa ${pushname} \n¿Que tal mi querido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaa ${pushname} \n¿Que tal como estas? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal `]
		const cringe = offline1[Math.floor(Math.random() * (offline1.length))]
mattuwu = `*${cringe}*`
reply(mattuwu)
break
case 'hola':
const offline2 =[`ℍolaaaa ${pushname} \n¿Como estas mi destinguido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaaa ${pushname} \n¿Como estas mi Excelentísimo amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal `,`ℍolaaaaa ${pushname} \n¿Como estas mi Apreciado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaa ${pushname} \n¿Como estas mi Honorable amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaa ${pushname} \n¿Como estas mi Estimado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaaaa ${pushname} \n¿Como estas wap@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaaaaa ${pushname} \n¿Como estas mi king? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaa ${pushname} \n¿Como estas mi rey ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaa ${pushname} \n¿Como estas mi querido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaa ${pushname} \n¿Como estas? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaa ${pushname} \n¿Que tal mi destinguido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaaaa ${pushname} \n¿Que tal mi Excelentísimo amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal `,`ℍolaaaa ${pushname} \n¿Que tal mi Apreciado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaaaa ${pushname} \n¿Que tal mi Honorable amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaaa ${pushname} \n¿Que tal mi Estimado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaaaa ${pushname} \n¿Que tal wap@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaa ${pushname} \n¿Que tal mi king? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaa ${pushname} \n¿Que tal mi rey ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaaa ${pushname} \n¿Que tal mi querido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `ℍolaa ${pushname} \n¿Que tal como estas? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal `]
		const cringe1 = offline2[Math.floor(Math.random() * (offline2.length))]
mattuwu1 = `*${cringe1}*`
reply(mattuwu1)
break
case 'buenas':
const offline3 =[`𝔹uenasss ${pushname} \n¿Como estas mi destinguido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Como estas mi Excelentísimo amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal `,`𝔹uenasssa ${pushname} \n¿Como estas mi Apreciado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Como estas mi Honorable amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Como estas mi Estimado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Como estas wap@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Como estas mi king? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Como estas mi rey ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Como estas mi querido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Como estas? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Que tal mi destinguido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Que tal mi Excelentísimo amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal `,`𝔹uenasss ${pushname} \n¿Que tal mi Apreciado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Que tal mi Honorable amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Que tal mi Estimado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Que tal wap@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Que tal mi king? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Que tal mi rey ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Que tal mi querido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝔹uenasss ${pushname} \n¿Que tal como estas? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal `]
		const cringe2 = offline3[Math.floor(Math.random() * (offline3.length))]
mattuwu2 = `*${cringe2}*`
reply(mattuwu2)
break
case 'wenas':
const offline4 =[`𝕎enas ${pushname} \n¿Como estas mi destinguido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Como estas mi Excelentísimo amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal `,`𝕎enasa ${pushname} \n¿Como estas mi Apreciado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Como estas mi Honorable amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Como estas mi Estimado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Como estas wap@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Como estas mi king? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Como estas mi rey ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Como estas mi querido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Como estas? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Que tal mi destinguido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Que tal mi Excelentísimo amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal `,`𝕎enas ${pushname} \n¿Que tal mi Apreciado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Que tal mi Honorable amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Que tal mi Estimado amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Que tal wap@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Que tal mi king? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Que tal mi rey ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Que tal mi querido amig@? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal`, `𝕎enas ${pushname} \n¿Que tal como estas? ≧ω≦ :_ \nᴿᵉˢᵖᵘᵉˢᵗᵃˢ ᵃᶜᵉᵖᵗᵃᵈᵃˢ\n ▪︎Muy_bien \n ▪︎Masomenos \n ▪︎Mal `]
const cringe3 = offline4[Math.floor(Math.random() * (offline4.length))]
mattuwu3 = `*${cringe3}*`
reply(mattuwu3)
break
case 'muy_bien':
respuesta = `𝐌𝐞 𝐚𝐥𝐞𝐠𝐫𝐨 𝐩𝐨𝐫 𝐭𝐢 𝐔𝐰𝐔, 𝐞𝐬𝐩𝐞𝐫𝐨 𝐪𝐮𝐞 𝐬𝐢𝐞𝐦𝐩𝐫𝐞 𝐞𝐬𝐭é𝐬 𝐝𝐞 𝐥𝐨 𝐦𝐞𝐣𝐨𝐫, 𝐭𝐞𝐧 𝐞𝐧 𝐜𝐮𝐞𝐧𝐭𝐚 𝐝𝐞 𝐥𝐚 𝐦𝐚𝐫𝐚𝐯𝐢𝐥𝐥𝐨𝐬𝐚 𝐩𝐞𝐫𝐬𝐨𝐧𝐚 𝐪𝐮𝐞 𝐞𝐫𝐞𝐬 𝐲 𝐧𝐨 𝐝𝐞𝐣𝐞𝐬 𝐪𝐮𝐞 𝐥𝐨𝐬 𝐦𝐚𝐥𝐨𝐬 𝐦𝐨𝐦𝐞𝐧𝐭𝐨𝐬 𝐭𝐞 𝐡𝐚𝐠𝐚𝐧 𝐬𝐞𝐧𝐭𝐢𝐫 𝐦𝐚𝐥 𝐜𝐫𝐚𝐜𝐤. \n⚡ ${pushname} ⚡\n_Perdon si los usuarios del grupo_ ${groupName} _no te hablen o te ignoren, puede que esten haciendo algunas tareas esten ocupados o jalandosela_ ;) \n_Psdt: ~yo solo soy un bot programado no puedo comunicarme de forma normal lo ciento~`
reply(respuesta)
result = fs.readFileSync(`./misstksuwu/sticker/offlinechat2.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek})
break
case 'mal':
respuesta = `𝐍𝐨 𝐞𝐬𝐭𝐞𝐬 𝐚𝐬𝐢 𝐔𝐧𝐔, 𝐥𝐨 ú𝐧𝐢𝐜𝐨 𝐪𝐮𝐞 𝐩𝐨𝐝𝐫í𝐚 𝐚𝐜𝐨𝐧𝐬𝐞𝐣𝐚𝐫𝐭𝐞 𝐞𝐬 𝐪𝐮𝐞: \n✔Leas un manga \n✔Hagas ejercicio \n✔Escuches musica \n✔Realiza una actividad que te guste \n❖ habla sobre cómo te sientes con un amigo o padres \n✔ ve un anime, te recomiendo ~boku no pico~ \n✯Si nada de esto funciona, _acude a un psicologo_ ;) \n⚡ ${pushname} ⚡ \n_Perdon si los usuarios del grupo_  ${groupName} _no te hablen o te ignoren, puede que esten haciendo algunas tareas esten ocupados o jalandosela_ ;) \nPsdt: ~yo soy un bot programado no puedo comunicarme de forma normal lo ciento mucho~`
reply(respuesta)
result = fs.readFileSync(`./misstksuwu/sticker/offlinechat1.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek})
break
case 'masomenos':
respuesta = `¿𝐦𝐚𝐬 𝐨 𝐦𝐞𝐧𝐨𝐬 𝐩𝐨𝐫𝐪𝐮𝐞?, 𝐭𝐞 𝐫𝐞𝐜𝐨𝐦𝐢𝐞𝐧𝐝𝐨 𝐪𝐮𝐞 𝐡𝐚𝐠𝐚𝐬 𝐚𝐥𝐠𝐨 𝐩𝐚𝐫𝐚 𝐝𝐢𝐬𝐭𝐫𝐚𝐞𝐫𝐭𝐞 𝐲 𝐚𝐬í 𝐬𝐞𝐧𝐭𝐢𝐫𝐭𝐞 𝐦𝐞𝐣𝐨𝐫 𝐦𝐢 𝐜𝐫𝐚𝐜𝐤, 𝐧𝐨 𝐝𝐞𝐣𝐞𝐬 𝐪𝐮𝐞 𝐮𝐧 𝐦𝐚𝐥 𝐝í𝐚 𝐭𝐞 𝐡𝐚𝐠𝐚 𝐬𝐞𝐧𝐭𝐢𝐫 𝐝𝐞 𝐥𝐨 𝐩𝐞𝐨𝐫.\n ⚡ ${pushname} ⚡ \n_Ten en cuenta que los usuarios del grupo_ ${groupName} _puede que esten haciendo algunas tareas o esren ocupados_ \nPsdt: ~yo soy un bot programado no puedo comunicarme de forma normal lo siento mucho~`
reply(respuesta)
result = fs.readFileSync(`./misstksuwu/sticker/offlinechat.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek})
break
case '.ayuda':
if (!isGroup)return reply(mess.only.group)
if (!isRegister) return reply(mess.only.RgOwO)
respuesta5d = ` _*Cargando el panel de comandos espere...*_ \n\n\nQueris tener tu propio bot?, Aqui tutorial: https://youtu.be/hTm-jFfMcCA 𝒕𝒐𝒅@𝒔 𝒑𝒐𝒅𝒆𝒎𝒐𝒔 𝒂𝒑𝒓𝒆𝒏𝒅𝒆𝒓 :D \n\n ${pushname}️ ˢᶦ ⁿᵒ ᵗᵉ ᵃᵖᵃʳᵉᶜᵉ ᵐᶦ ᵖᵃⁿᵉˡ ᵈᵉ ᶜᵒᵐᵃⁿᵈᵒˢ ʳᵉᶦⁿᵗᵉⁿᵗᵃ ⁿᵘᵉᵛᵃᵐᵉⁿᵗᵉ ᵈᵉⁿᵗʳᵒ ᵈᵉ ᵘⁿ ˡᵃᵖˢᵒ ᵈᵉ ⁷ ˢᵉᵍᵘⁿᵈᵒˢ ᵖᵒʳ ᶠᵃᵛᵒʳ `
reply(respuesta5d)
break
case '✯𝙿𝚘𝚛𝚏𝚊𝚟𝚘𝚛':
				const wlcda = fs.readFileSync('./fiestamp3/audiouwu/ohayo.m4a');
            teslagod.sendMessage(from, wlcda, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				reply(`☆𝐺𝑟𝑎𝑐𝑖𝑎𝑠 𝑝𝑜𝑟 𝑐𝑜𝑚𝑝𝑙𝑒𝑡𝑎𝑟 𝑙𝑎 𝑓𝑖𝑐𝒉𝑎, 𝑆𝑒 𝑏𝑖𝑒𝑛𝑏𝑒𝑛𝑖𝑑@ 𝑎 𝑒𝑠𝑡𝑒 𝑔𝑟𝑎𝑛𝑑𝑖𝑜𝑠𝑜 𝑔𝑟𝑢𝑝𝑜 𝑈𝑤𝑈, 𝑅𝑒𝑐𝑢𝑒𝑟𝑑𝑎 𝑞𝑢𝑒 𝑐𝑢𝑎𝑙𝑞𝑢𝑖𝑒𝑟 𝑞𝑢𝑒𝑗𝑎 𝑜 𝑝𝑟𝑜𝑏𝑙𝑒𝑚𝑎 𝑡𝑖𝑒𝑛𝑒𝑠 𝑎 𝑙𝑜𝑠 𝑎𝑑𝑚𝑖𝑛𝑖𝑠𝑡𝑟𝑎𝑑𝑜𝑟𝑒𝑠 `)
break
case 'bot':
respuesta = `${pushname} ◠◡◠\n¿si sabes que soy un bot Verdad?, no puedo comunicarme con vos de forma normal ಥnಥ\n\nPuedes usar mi comando *.preguntame* si gustas distraerte`
reply(respuesta)
break
//autorrespuesta erroneas
case '#menu':
case '#help':
case '_menu':
case '_help':
case '-menu':
case '-help':
case '$menu':
case '$help':
case '!help':
case '!menu':
case '/menu':
case '/help':
case '|help':
case '|menu':
case '¡menu':
case '¡help':
case '%menu':
case '%help':
case '&help':
case '&menu':
case '{menu':
case '{help':
case '[help':
case '[menu':
case '\menu':
case '\help':
case '*menu':
case '*help':
hasil = `𝙿𝚛𝚎𝚏𝚒𝚓𝚘 𝙴𝚛𝚛𝚘𝚗𝚎𝚘 𝙳𝚎𝚝𝚎𝚌𝚝𝚊𝚍𝚘`
reply(hasil)
        break
}
			switch(command) {
				//zona de comandos//
             case 'apoyo':
  if (!args.length<1) return reply(mess.only.daftarB)
  
  if (args.length < 2) return teslagod.sendMessage(from, `💻 *Redes sociales* 📲\n≫ 𝐂𝐚𝐧𝐚𝐥 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞\n📌 https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA ✔\n≫ 𝐏𝐚𝐠??𝐧𝐚 𝐃𝐞 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤\n📌 https://fb.watch/6nGjVpIPsq/ ✔\n≫ 𝐓𝐢𝐤𝐭𝐨𝐤\n📌 https://vm.tiktok.com/ZMexrfdTY/ ✔ \n\nNo pido dinero solo una pisca de tu apoyo mi king :3`, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝙉𝙤 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖𝙨 𝙨𝙚𝙧 𝙪𝙣 𝙚𝙭𝙥𝙚𝙧𝙩𝙤 𝙥𝙖𝙧𝙖 𝙨𝙚𝙧 𝙪𝙣 𝙜𝙧𝙖𝙣 𝙖𝙧𝙩𝙞𝙨𝙩𝙖\n${namebotuwu} ${time}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/apoyo.jpeg')} } }, mek
  })
result = fs.readFileSync(`./misstksuwu/sticker/graciauuu.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek})
  break           
  case 'himnotaku':
  case 'himnootaku':
if (isBanned) return reply(mess.only.benned)
  if (!isRegister) return reply(mess.only.RgOwO)
    if (!isGroup) return reply(mess.only.group)
      if (!isAnime) return reply('Modo anime ta apagado >.<')
               reply(`*Procesando...*`)
				godending = fs.readFileSync(`./fiestamp3/audiouwu/myhimno.m4a`)
				teslagod.sendMessage(from, godending, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `⚡ 𝐎𝐭𝐚𝐤𝐮𝐬 𝐓𝐞𝐜𝐧𝐨𝐥𝐨𝐠𝐢𝐜𝐨𝐬 ⚡\nBy NeKosmic`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/quantic.jpeg')} } }, mek, ptt: true })
				setTimeout( () => {
               reply(`*Letra:*\n\n_Oohouhohouho_\n_Quiero una chica HENTAI para mi, que me haga muy feliz_\n_Cuando la tenga aqui, mi mano no usare_\n_Todos los dias mientras mire anime_\n_Quisiera que este aqui, y mis sueños CUMplir_\n_Y yo sentir su tacto, en mi zona especial..._ \n(Oh WAOOO)\n_Yo quiero una chica hentai!!!_\n_*Que cante asi...*_`)
               }, 3500)
				nekkos = fs.readFileSync(`./misstksuwu/sticker/dancekwaii.webp`)
				setTimeout( () => {
  			teslagod.sendMessage(from, nekkos, sticker, {
			quoted: mek})
			}, 4000)
			break
                case 'informacion':    
                    case 'profile':
                    case 'perfil':
                    if (isBanned) return reply(mess.only.benned)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isRegister) return reply(mess.only.RgOwO)
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                                        teslagod.updatePresence(from, Presence.composing) 
				        uptime = process.uptime()
                                        teslagod.sendMessage(from, `》 *𝐵𝑂𝑇* : (𝐀𝐜𝐭𝐢𝐯𝐨) 《\n┏─━─━━─━─━━─━─┓\n┣➪Tiempo de ejecucion : *${kyun(uptime)}*\n┣➪Version del bot : 2.0 \n┣➪Apodo en Whatsapp : *${teslagod.user.name}*\n┣➪Servidor Web Whatsapp : *${teslagod.browserDescription[0]}*\n┣➪Buscador : *${teslagod.browserDescription[1]}*\n┣➪Velocidad de conexion: *${latensi.toFixed(4)} MS*\n┣➪Velocidad de procesamiento : ${process.uptime()}\n*𝐸𝐽𝐸𝐶𝑈𝑇𝐴𝑁𝐷𝑂𝑆𝐸 𝐷𝐸𝑆𝐷𝐸*\n┣➪Dispositivo: ${device_manufacturer}\n┣➪Version del sistema Operatico OS : ${os_version}\n┣➪Version del dispositivo : ${device_model}\n┣➪RAM : Usado ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / Restante ${Math.round(require('os').totalmem / 1024 / 1024)}MB\n┣➪MCC código de país del móvil : ${mcc}\n┣➪MNC Código de red móvil : ${mnc}\n┣➪Version de Whatsapp : ${teslagod.user.phone.wa_version}\n┗─━─━ 「 ✵ 」━━─━─┛\n⇝ *Bot NeKosmic* \n➣ _*Un bot simple, inicialmente creado para un tema otaku/anime, base original de Mhankbarbar(crack UwU), funcionamiento desde raiz del dispositivo*_\nModos de conexion: con paquete de MBS o con promocion de Whatsapp\n▪︎Fecha de inicio: 2020/09/11 \nIdioma inicial: indonesio, ahora español UwU`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝙉𝙤 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖𝙨 𝙨𝙚𝙧 𝙪𝙣 𝙚𝙭𝙥𝙚𝙧𝙩𝙤 ??𝙖𝙧𝙖 𝙨𝙚𝙧 𝙪𝙣 𝙜𝙧𝙖𝙣 𝙖𝙧𝙩𝙞𝙨𝙩𝙖\n${namebotuwu} ${time}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/muchotexto.jpeg')} } }, mek})
                            await limitAdd(sender)
                            break
                            case 'rg':
                            if (isBanned) return reply(mess.only.benned)
            if (!isGroup)return reply(mess.only.group)
            if (args.length < 1) return reply('ERROR!!!\nPor favor para completar el registro use el comando .rg tunombre|tuedad Ejemplo:\n.rg Matt|19')
if (isRegister) return reply('Ya estas registrado en mi base de datos UwU')
if (!Far.includes('|')) return  reply(`*Mi king escriba bien su registro Ejemplo:* \n${prefix}rg *Matt|19*`)
var reg = body.slice(4)
var jeneng = reg.split("|")[0];
var umure = reg.split("|")[1];
const nombre = Far.substring(0, Far.indexOf('|') - 0)
const edad = Far.substring(Far.lastIndexOf('|') + 1)
const namaUser = `${jeneng}`
const umurUser = `${umure}`
const serialUser = createSerial(20)
if(isNaN(edad)) return await reply('*Solo c acepta numeros para edad -.-*!!')
if (nombre.length >= 10) return reply(`*Wtf muy largo tu nombre sos un alien ._.*\n_Nombre aceptable deve contener 10 digitos maximo_`)
if (edad > 30) return reply(`*Tas muy viejo para usar este bot u.u*`)
if (edad < 13) return reply(`*Eres menor de edad, tienes permiso de tus padres para usar whatsapp?*`)
veri = sender
if (isGroup) {
  addRegisteredUser(sender, jeneng, umure, namaUser, umurUser, time, serialUser)
  hasil = `〘  *REGISTRO* 〙
  Fecha y hora de Registro \n${date} \n${time}
┏─━─━━─━─━━─━─
╠≽️ *Nombre Registrado* : *${namaUser}*
╠≽️ *Nombre usado en whatsapp* : *${pushname}*
╠≽️ *Edad* : *${umurUser}*
╠≽️ *Numero* : *${sender.split("@")[0]}*
┗─━─━━─━─━━─━─
Codigo de registro : *${serialUser}* `
reply(hasil)
  console.log(color('[REGISTRADO]'), color(time, 'yellow'), 'Nombre:', color(namaUser, 'cyan'), 'Edad:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
} else {
  addRegisteredUser(sender, jeneng, umure, namaUser, umurUser, time, serialUser)
  hasil = `〘  *REGISTRO* 〙
  Fecha y hora de Registro \n${date} \n${time}
┏─━─━━─━─━━─━─
╠≽️ *Nombre Registrado* : *${namaUser}*
╠≽️ *Nombre usado en whatsapp* : *${pushname}*
╠≽️ *Edad* : *${umurUser}*
╠≽️ *Numero* : *${sender.split("@")[0]}*
┗─━─━━─━─━━─━─
Codigo de registro : *${serialUser}* `
reply(hasil)
  console.log(color('[REGISTRADO]'), color(time, 'yellow'), 'Nombre:', color(namaUser, 'cyan'), 'Edad:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
}
tm = `*_Tu Registro se completo con etsito, escriba ${prefix}ayuda para mostrar el panel de comandos_*`
reply(tm)
break
case 'ayuda':
if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned)
            if (!isGroup)return reply(mess.only.group)
	                me = teslagod.user
					uptime = process.uptime()
					myMonths = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
                myDays = ['Domingo: dia de dencanso UwU','Lunes: comienzo de la semana','Martes: segundo dia de la semana','Miercoles: tercer dia de la semana','Jueves: FELIZ JUEVES!!!','Viernes: fin de semana','Sabado: dia libre'];
                var tgl = new Date();
                var day = tgl.getDate()
                  bulan = tgl.getMonth()
                var thisDay = tgl.getDay(),
                thisDay = myDays[thisDay];
                var yy = tgl.getYear()
                var year = (yy < 1000) ? yy + 1900 : yy;
                    putagg = fs.readFileSync(`./recursos/multimediauwu/milogo.jpg`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    teslagod.sendMessage(from, putagg, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝙉𝙤 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖𝙨 𝙨𝙚𝙧 𝙪𝙣 𝙚𝙭𝙥𝙚𝙧𝙩𝙤 𝙥𝙖𝙧𝙖 𝙨𝙚𝙧 𝙪𝙣 𝙜𝙧𝙖𝙣 𝙖𝙧𝙩𝙞𝙨𝙩𝙖\n${namebotuwu}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/logouwur.jpg')} } }, caption: help(prefix, thisDay, day, myMonths, bulan, year, pushname, me, uptime, time, namebotuwu, nombrebot, miyutub, creadoruwu, get_result)})
					break
					
//GUGUL-CHAN UwU
					
                    case 'google':
            if (!isGroup)return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                const googleQuery = body.slice(8)
				if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned)
								
				if (isLimit(sender)) return reply(limitend(pushname))
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Los resultados de busqueda para : ${googleQuery}* *No se han podido encontrar*`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Resultados de busqueda para : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Titulo* : ${results[i].title}\n\n*Descripcion* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    teslagod.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break
                
//ACTIVADORES :v
                
                case 'diversion':
                if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isadminbot) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Use 》*activado* ó *desactivado*《')
					if (args[0] === 'activado') {
						if (isDiversion) return reply('Ya estuvo activo')
						diversion.push(from)
						fs.writeFileSync('./basededatosxd/json/fulldiversion.json', JSON.stringify(diversion))
						reply(`se activo modo diversion en este grupo UwU`)
					} else if (args[0] === 'desactivado') {
						if (!isDiversion) return reply('Modo desactivado')
						diversion.splice(from, 1)
						fs.writeFileSync('./basededatosxd/json/fulldiversion.json', JSON.stringify(diversion))
						reply(`De desactivo el modo diversion en el grupo`)
					} else {
						reply(`Ejemplo de uso:\n》Para activar▪︎${prefix}diversion activado \n》Para desactivar\n▪︎${prefix}diversion desactivado`)
					}
					break
					case 'animeuwu':
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
					if (!isOwner && !isadminbot && !isfrendsowner) return reply('Solo el dueño o un contribuidor del bot pueden usar este comando')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Use 》*chi* ó *nu*《\nᶜʳᶦⁿᵍᵉ ᵐᵒᵐᵉⁿᵗ')
					if (args[0] === 'chi') {
						if (isAnime) return reply('Ya estuvo activo')
						anime.push(from)
						fs.writeFileSync('./basededatosxd/json/animaniacoxd.json', JSON.stringify(anime))
						reply(`Se activo el modo anime en el grupo *${groupMetadata.subject}* UwU`)
					} else if (args[0] === 'nu') {
						if (!isAnime) return reply('modo desactivado')
						anime.splice(from, 1)
						fs.writeFileSync('./basededatosxd/json/animaniacoxd.json', JSON.stringify(anime))
						reply(`Se desactivo el modo anime en el grupo *${groupMetadata.subject}*`)
					} else {
						reply(`Ejemplo de uso:\n》Para activar\n▪︎${prefix}animeuwu chi \n》Para desactivar\n▪︎${prefix}animeuwu nu`)
					}
					break
				case 'wlc':
					if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isOwner && !isadminbot && !isfrendsowner) return reply('Solo el dueño o un contribuidor del bot pueden usar este comando')
					if (args.length < 1) return reply('Use 》*on* ó *off*《')
					if ((args[0]) === 'on') {
						if (isWelkom) return reply('Este comando ya estubo activo')
						welkom.push(from)
						fs.writeFileSync('./basededatosxd/json/welkom.json', JSON.stringify(welkom))
						reply(`Bienbenida activado en este grupo UwU`)
					} else if ((args[0]) === '0ff') {
						if (!isWelkom) return reply('Este comando se a apagado')
						welkom.splice(from, 1)
						fs.writeFileSync('./basededatosxd/json/welkom.json', JSON.stringify(welkom))
						reply(`Se desactivo la bienbenida`)
					} else {
						reply('Ejemplo de uso:\nwlc on para activar\n\nwlc off para desactivar')
					}
					break 
					case 'nofakes':                
if (!isWelkom) return reply('El modo de bienbenida tiene que ser activado :)')
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !isadminbot && !isfrendsowner) return reply('Solo el dueño o un contribuidor del bot pueden usar este comando')
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Escribe .nofakes 1 para activar')          
if (args[0] === '1') {                                    
	if (isAntiFake) return reply('*Ya estubo activo*')          
	antifake.push(from)                          
	fs.writeFileSync('./basededatosxd/json/antifake.json', JSON.stringify(antifake))      
	reply(`*[ Activado ]*`)  
	reply(`Los numeros fakes, sera eliminados del grupo :3`)  
} else if (args[0] === '0') {             
	var ini = antifake.indexOf(from)
	antifake.splice(ini, 1)           
	fs.writeFileSync('./basededatosxd/json/antifake.json', JSON.stringify(antifake))       
	reply(`Desactivado`)              
} else {                                         
	reply('1 para activar, 0 para desactivar')           
}           
break
				case 'antilink':
				if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Solo el dueño del bot puede usar este comando')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Use 》*si* ó *no*《')
					if ((args[0]) === 'si') {
						if (isAntiLink) return reply('Anti-link ya estuvo activo')
						_antilink.push(from)
						fs.writeFileSync('./basededatosxd/json/antilink.json', JSON.stringify(_antilink))
						reply(`Se activo el modo Anti-Link en el grupo *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'no') {
						if (!isAntiLink) return reply('anti-link esta desactivado')
						_antilink.splice(from, 1)
						fs.writeFileSync('./basededatosxd/json/antilink.json', JSON.stringify(_antilink))
						reply(`Se desactivo el modo Anti-Link en el grupo *${groupMetadata.subject}*`)
					} else {
						reply('Ejemplos de uso:\nPara activar 》antilink si《\n\nPara desactivar》antilink no《')
					}
					break 
					case 'antilink2':
				if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
					if (!isOwner && !isadminbot && !isfrendsowner) return reply('Solo el dueño o un contribuidor del bot pueden usar este comando')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Use 》*si* ó *no*《')
					if ((args[0]) === 'si') {
						if (isAntiLinkuwu) return reply('Anti-link-extremo ya estuvo activo')
						_antilinkuwu.push(from)
						fs.writeFileSync('./basededatosxd/json/antilink2.json', JSON.stringify(_antilinkuwu))
						reply(`Se activo el modo Anti-Link-Extremo en el grupo *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'no') {
						if (!isAntiLinkuwu) return reply('anti-link-extremo esta desactivado')
						_antilinkuwu.splice(from, 1)
						fs.writeFileSync('./basededatosxd/json/antilink2.json', JSON.stringify(_antilinkuwu))
						reply(`Se desactivo el modo Anti-Link-Extremo en el grupo *${groupMetadata.subject}*`)
					} else {
						reply('Ejemplos de uso:\nPara activar 》antilink2 si《\n\nPara desactivar》antilink2 no《')
					}
					break 
					case 'respeto':
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                if (args.length < 1) return reply('Use 》*sis* ó *non*《')
                if (args[0] === 'sis') {
                if (isBadWord) return reply('Modo respeto ya esta activo')
                 	   badword.push(from)
                 	   fs.writeFileSync('./basededatosxd/json/badword.json', JSON.stringify(badword))
                  	   reply(`Modo respeto activado en el grupo *${groupMetadata.subject}* :)`)
                  teslagod.sendMessage(from,`𝙿𝚘𝚛𝚏𝚊𝚟𝚘𝚛 𝚜𝚎𝚊 𝚛𝚎𝚜𝚙𝚎𝚝𝚞𝚘𝚜𝚘 𝚢 𝚗𝚘 𝚞𝚜𝚎 𝚕𝚎𝚗𝚐𝚞𝚊𝚓𝚎 𝚟𝚞𝚕𝚐𝚊𝚛`, text)
              	  } else if (args[0] === 'non') {
                    	if (!isBadWord) return reply('modo respeto inactivo')
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./basededatosxd/json/badword.json', JSON.stringify(badword))
                 	    reply(`Modo respeto desactivado en el grupo`)
             	   } else {
                 	   reply('sis para activar, non para desactivar')
                	}
                    break
                    case 'hmodo':
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
					if (!isOwner && !isadminbot && !isfrendsowner) return reply('Solo el dueño o un contribuidor del bot pueden usar este comando')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('confirmas o desconfirmas :v?')
					if ((args[0]) === 'confirmo') {
						if (isNsfw) return reply('Este modo ya estuvo activo')
						nsfw.push(from)
						fs.writeFileSync('./basededatosxd/json/nsfw.json', JSON.stringify(nsfw))
						reply(`Modo H activado en el grupo *${groupMetadata.subject}* marrano-kun 7w7r`)
					} else if ((args[0]) === 'desconfirmo') {
						if (!isNsfw) return reply('Modo H desactivado UnU')
						nsfw.splice(from, 1)
						fs.writeFileSync('./basededatosxd/json/nsfw.json', JSON.stringify(nsfw))
						reply(`Modo H desactivado en el grupo`)
					} else {
						reply('Ejemplos de uso:\nPara activar\nhmodo confirmo\n\nPara desactivar\nhmodo desconfirmo')
					}
					break
					case 'chatbot':
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
					if (!isOwner && !isadminbot && !isfrendsowner) return reply('Solo el dueño o un contribuidor del bot pueden usar este comando')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Use 》*y* ó *n*《')
					if ((args[0]) === 'y') {
						if (isSimi) return reply('Este modo ya estuvo activo')
						samih.push(from)
						fs.writeFileSync('./basededatosxd/json/simi.json', JSON.stringify(samih))
						reply(`El modo chat fue activado en el grupo *${groupMetadata.subject}* disfruta de un chat muy random con el bot sin necesidad de un prefijo`)
					} else if ((args[0]) === 'n') {
						if (!isSimi) return reply('Lo ciento, se desactivo el chat-bot')
						samih.splice(from, 1)
						fs.writeFileSync('./basededatosxd/json/simi.json', JSON.stringify(samih))
						reply(`El modo chat con el bot fue desactivado`)
					} else {
						reply('Ejemplos de uso:\nPara activar\nchatbot y\n\nPara desactivar\nchatbot n')
					}
					break
					case 'chatbot2':
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
					if (!isOwner && !isadminbot && !isfrendsowner) return reply('Solo el dueño o un contribuidor del bot pueden usar este comando')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Use 》*yy* ó *nn*《')
					if ((args[0]) === 'yy') {
						if (isSimisimi) return reply('Este modo ya estuvo activo')
						samihhh.push(from)
						fs.writeFileSync('./basededatosxd/json/simi2.json', JSON.stringify(samihhh))
						reply(`El modo chat fue activado en el grupo *${groupMetadata.subject}* disfruta de un chat muy random con el bot usando los prefijos respectivos`)
					} else if ((args[0]) === 'nn') {
						if (!isSimisimi) return reply('Lo ciento no puedes realizar un chat con el bot')
						samihhh.splice(from, 1)
						fs.writeFileSync('./basededatosxd/json/simi2.json', JSON.stringify(samihhh))
						reply(`El modo chat con el bot fue desactivado`)
					} else {
						reply('Ejemplos de uso:\nPara activar\nchatbot yy\n\nPara desactivar\nchatbot nn')
					}
					break
					case 'levelear':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Use 》*infinito* ó *finito*《')
                if (args[0] === 'infinito') {
                    if (isLevelingOn) return reply('Esta funcion ya estuvo activa')
                    _leveling.push(groupId)
                    fs.writeFileSync('./basededatosxd/usuariosnius/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                     teslagod.sendMessage(from,`XP\nCuando el bot este activo ira sumando la actividad de los integrantes mientras mas activo mas xp ganaran\n\nNIVEL\nSubiran de nivel cuanto mayor xp tengan`, text)
					} else if (args[0] === 'finito') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./basededatosxd/usuariosnius/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
					} else {
					reply('Porfavor use \nlevelear infinito para activar \nlevelear finito para desactivar')
					}
					break 
////FIN DE ACTIVADORES////
   ///////////////////////

//Acciones para el bot

					case 'bloquear':
				 teslagod.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner && !isadminbot && !isfrendsowner) return reply('Solo el dueño o un contribuidor del bot pueden usar este comando')
					teslagod.blockUser (`${body.slice(7)}@c.us`, "add")
					teslagod.sendMessage(from, `Se bloqueo con etsito al numero ${body.slice(7)}@c.us`, text)
					break
					case 'desbloquear':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    teslagod.blockUser (`${body.slice(9)}@c.us`, "remove")
					teslagod.sendMessage(from, `El numero ${body.slice(9)}@c.us fue desbloqueado UwU`, text)
				    break
				    case 'bloqueados':
				if (!isRegister) return reply(mess.only.RgOwO)
				if (isBanned) return reply(mess.only.benned)
            if (!isGroup)return reply(mess.only.group)
					teks = 'Lista de contactos bloqueados por el bot :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					teslagod.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					case 'miwasa':
				    case 'wame':
		        	case 'wa.me':
		if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                  options = {
                  text: ` ⚡ *LINKS DE TU NUMERO* ⚡\n\n_Solicitado por_ : 》 *@${sender.split("@s.whatsapp.net")[0]}* 《\n\n▪︎ *Su link directo de whatsapp es* :\n\n▪︎ *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*O puede usar este otro*\n\n▪︎ *https://api.whatsapp.com/send?phone=${sender.split("@")[0]}* \nUwU`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  teslagod.sendMessage(from, options, text, { quoted: mek } )
			         break
			         case 'milimite':
			if (isBanned) return reply(mess.only.benned)
            if (!isGroup)return reply(mess.only.group)
			if (!isRegister) return reply(mess.only.RgOwO)
				var found = false
                    const limidat = JSON.parse(fs.readFileSync('./basededatosxd/json/limit.json'))
                    for (let lmt of limidat) {
                        if (lmt.id === sender) {
                            let limitCounts = limitt - lmt.limit
                            if (limitCounts <= 0) return reply(from,`Limit anda habis`, id)
                            await reply(`*Tu limite restante es : ${limitCounts}*`)
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id : sender, limit : 1 }
                        limit.push(obj);
                        fs.writeFileSync('./basededatosxd/json/limit.json', JSON.stringify(limit, 1));
                        await reply(`Tu limite es: ${limitCounts}`)
                    }
					 break
					 case 'reiniciarlimite':
				if (!isOwner) return reply(mess.only.ownerB)
				  var obj = []
				   fs.writeFileSync('./basededatosxd/json/limit.json', JSON.stringify(obj))
				  await reply(`Se reiniciaron los limites con exito`)
				     break
				     case 'suprimir':
				if (!isRegister) return reply(mess.only.RgOwO)
					if (isBanned) return reply(mess.only.benned)
if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					teslagod.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'closegcen':
			        case 'cerrargrupoen':
			        case 'cgpen':
			if (!isRegister) return reply(mess.only.RgOwO)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              teslagod.updatePresence(from, Presence.composing) 
              if (args[1]=="segundos") {var timer = args[0]+"000"
				} else if (args[1]=="minutos") {var timer = args[0]+"0000"
				} else if (args[1]=="horas") {var timer = args[0]+"00000"
				} else {return reply("*Porfavor seleccione:*\nsegundos\nminutos\nhoras\n\n*Ejemplo*\n10 segundos")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `*Cerrado Temporizado* Accion ejecutada por @${sender.split("@")[0]}\nSolo los administradores podran usar el chat`,
					contextInfo: { mentionedJid: [nomor] }
					}
					teslagod.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				     break
				     case 'opengc':
                     case 'abrirgrupo':
                     case 'agp':
					if (!isRegister) return reply(mess.only.RgOwO)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo abierto por @${sender.split("@")[0]} ⚡\nAhora *todos los participantes* pueden enviar sus mensajes`,
					contextInfo: { mentionedJid: [sender] }
					}
					teslagod.groupSettingChange (from, GroupSettingChange.messageSend, false)
					teslagod.sendMessage(from, open, text, {quoted: mek})
					   break
					   case 'editnamegp':
					if (!isRegister) return reply(mess.only.RgOwO)
                   if (!isGroup) return reply(mess.only.group)
			       if (!isGroupAdmins) return reply(mess.only.admin)
			   	   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   teslagod.groupUpdateSubject(from, `${body.slice(12)}`)
                   teslagod.sendMessage(from, 'Se cambio el name del grupo', text, {quoted: mek})
                       break
                       case 'editdesgp':
					if (!isRegister) return reply(mess.only.RgOwO)
			    	 if (!isGroup) return reply(mess.only.group)
				     if (!isGroupAdmins) return reply(mess.only.admin)
			   	     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				     teslagod.groupUpdateDescription(from, `${body.slice(11)}`)
				     teslagod.sendMessage(from, 'Se cambio la descripcion del grupo con etzito *-*', text, {quoted: mek})
				       break
				       case 'niuperfil':
				if (!isOwner && !isadminbot && !isfrendsowner) return reply('Solo el dueño o un contribuidor del bot pueden usar este comando')
				    teslagod.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Porfavor responda una imagen ya enviada con el comando ${prefix}niuperfil`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(enmedia)
					await teslagod.updateProfilePicture(botNumber, media)
					reply('Ahora tengo un nuevo perfil :3')
					    break
					    case 'infogrupo':
  if (!isRegister) return reply(mess.only.RgOwO)
  
  if (args.length < 2) return teslagod.sendMessage(from, `𝐍𝐨𝐦𝐛𝐫𝐞 𝐚𝐜𝐭𝐮𝐚𝐥 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 : ${groupName}\n\n𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐜𝐢𝐨𝐧 : ${groupDesc}\n\n𝐓𝐨𝐭𝐚𝐥 𝐝𝐞 𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬 : ${groupAdmins.length} AdminGods\n\n𝐓𝐨𝐭𝐚𝐥 𝐝𝐞 𝐢𝐧𝐭𝐞𝐠𝐫𝐚𝐧𝐭𝐞𝐬 : ${groupMembers.length} Besto Integrantes UwU`, text, {
quoted: mek
  })
                         break
                         case 'activos':
                         if (!isGroup) return reply(mess.only.group)
                         if (!isRegister) return reply(mess.only.RgOwO)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(teslagod.chats.get(ido).presences), teslagod.user.jid]
teslagod.sendMessage(from, '*Lista de los usuarios actualmente activos en el grupo:*\n' + online.map(v => '⚡ @' + v.replace(/@.+/, '')).join`\n`, MessageType.text, { quoted: mek,
contextInfo: { mentionedJid: online }
})
                     break
                         case 'creador':
                         if (!isRegister) return reply(mess.only.RgOwO)
                 teslagod.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 teslagod.sendMessage(from, `➢𝑪𝒓𝒆𝒂𝒅𝒐𝒓 𝒑𝒓𝒊𝒏𝒄𝒊𝒑𝒂𝒍 𝒅𝒆𝒍 𝒃𝒐𝒕 ${creadoruwu} `,text, { quoted: mek} )
                        break
                        case 'cocreador':
                        if (!isRegister) return reply(mess.only.RgOwO)
                 teslagod.sendMessage(from, {displayname: "jeff", vcard: vcard1}, MessageType.contact, { quoted: mek})
                 teslagod.sendMessage(from, `➢𝑪𝒐𝒏𝒕𝒓𝒊𝒃𝒖𝒊𝒅𝒐𝒓 ${contribuidores} y actual dueño del bot`,text, { quoted: mek} )
                        break
                        case 'invocar':
                        if (!isRegister) return reply(mess.only.RgOwO)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `Invocador *${pushname}* \n》 *Invocando a los integrantes del grupo*  《📡\n𝕋𝕠𝕥𝕒𝕝 : ${groupMembers.length}\n╔════ஜ۩۞۩ஜ════╗\n`
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`▪︎`+ teks +'╚═══════════', members_id, true)
					      break
					      case 'invocar2':
				if (!isRegister) return reply(mess.only.RgOwO)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `𝕋𝕠𝕥𝕒𝕝 : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					teslagod.sendMessage(from, '╔════ஜ۩۞۩ஜ════╗\n╠➥'+teks+'╚═══════════', text, {detectLinks: false, quoted: mek})
					       break
					       case 'invocar3':
				if (!isRegister) return reply(mess.only.RgOwO)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `𝕋𝕠𝕥𝕒𝕝 : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@c.us\n`
						members_id.push(mem.jid)
					}
					teslagod.sendMessage(from, '╔════ஜ۩۞۩ஜ════╗\n╠➥'+teks+'╚═══════════', text, {quoted: mek})
					     break
					     case 'invocar4':
				if (!isRegister) return reply(mess.only.RgOwO)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `𝕋𝕠𝕥𝕒𝕝 : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					reply('╔════ஜ۩۞۩ஜ════╗\n╠➥'+teks+'╚═══════════')
					      break
					      case 'limpieza':
					if (!isOwner) return reply('Solo el dueño del bot pueden usar este comando')
					anu = await teslagod.chats.all()
					teslagod.setMaxListeners(50)
					for (let _ of anu) {
						teslagod.deleteChat(_.jid)
					}
					reply(`*Se reinicio todos los chats del bot*`)
					      break
					      case 'bc':
					if (!isRegister) return reply(mess.only.RgOwO)
					if (!isOwner && !isadminbot && !isfrendsowner) return reply('Solo el dueño o un contribuidor del bot pueden usar este comando')
					if (args.length < 1) return reply('que asis bro? -.-')
					anu = await teslagod.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await teslagod.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							teslagod.sendMessage(_.jid, buff, image, {caption: `🛰 \n⚡ ${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `🛰 \n⚡ ${body.slice(4)}`)
						}
						reply('⚡Mensaje simultaneo compartido con exito :D⚡')
					}
					       break
					       case 'grupobc':
					if (!isRegister) return reply(mess.only.RgOwO)
					if (!isOwner && !isadminbot && !isfrendsowner) return reply('Solo el dueño o un contribuidor del bot pueden usar este comando')
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await teslagod.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							teslagod.sendMessage(_.jid, buff, image, {caption: `Mensaje compartido\n*Grupo*: ${groupName}\n\n${body.slice(9)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `Mensaje compartido\n*Grupo*: ${groupName}\n\n${body.slice(9)}`)
						}
						reply('Se completo el envio de mensajes a los grupos')
					}
					         break
					         case 'ascender':
                             case 'darpoder':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Elija al usuario que desea ascender!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '⚡Un usuario fue ascendido a admin⚡ \n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						teslagod.groupRemove(from, mentioned)
					} else {
						mentions(`⚡Se le ascendio a admin a : @${mentioned[0].split('@')[0]} Ahora tiene el poder en el grupo!`, mentioned, true)
						teslagod.groupMakeAdmin(from, mentioned)
					}
					          break
					          case 'degradar':
				case 'quitarpoder':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Elija a usuario que desee quitar el poder')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'quitaron admin a un usuario \n*F*\n'
						for (let _ of mentioned) {
							teks += `Degradacion de poder fue ejecutada por el administrador  :\n`
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						teslagod.groupRemove(from, mentioned)
					} else {
						mentions(`Se le quito el poder a @${mentioned[0].split('@')[0]}\n\nfue bueno mientras duro `, mentioned, true)
						teslagod.groupDemoteAdmin(from, mentioned)
					}
					           break
					           case 'banear':
					teslagod.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return
					if (!isOwner && !isadminbot && !isfrendsowner) return reply('Solo el dueño o un contribuidor del bot pueden usar este comando')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`Baneo exitoso al numero : ${ban}\nAhora ya no podra usar ningun comando`)
					           break
					           case 'baneados':
			if (!isRegister) return reply(mess.only.RgOwO)
				ben = '》Lista de usuarios baneados《 :\n'
					for (let banned of ban) {
						ben += `~> @${banned.split('@')[0]}\n`
					}
					ben += `Total : ${ban.length}`
					teslagod.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					            break
					            case 'quitarbaneo':
					if (!isOwner && !isadminbot && !isfrendsowner) return reply('Solo el dueño o un contribuidor del bot pueden usar este comando')
					bnnd = body.slice(13)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					reply(`Se le quito el baneo al numero wa.me/${bnnd} UwU`)
					           break
					          case 'ban':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta al participante que quiere eliminar 🗡')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Adiuuu :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						teslagod.groupRemove(from, mentioned)
					} else {
						mentions(`Adiuuu  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						teslagod.groupRemove(from, mentioned)
					}
					           break
					           case 'admins':
					if (isBanned) return reply(mess.only.benned)
				if (!isRegister) return reply(mess.only.RgOwO)
					if (!isGroup) return reply(mess.only.group)
					teks = `Aqui la lista de los grandiosos admins del grupo *${groupMetadata.subject}*\n\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `🛡 [${no.toString()}]  ⚡ @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					            break
					            case 'grupolink':
                                case 'gplink':
                                if (isBanned) return reply(mess.only.benned)
                                if (!isRegister) return reply(mess.only.RgOwO)
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (!isGroup) return reply(mess.only.group)
                                        linkgc = await teslagod.groupInviteCode(from)
                                        reply('https://chat.whatsapp.com/'+linkgc)
                                        await limitAdd(sender)
                                  break
                                  case 'fotocloner':
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Etiquete a la persona que quiere copiar su foto de perfil\n\n*EJEMPLO:* fotocloner @')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta a un integrante del grupo')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await teslagod.getProfilePicture(id)
						buffer = await getBuffer(pp)
						teslagod.updateProfilePicture(botNumber, buffer)
						mentions(`Foto de perfil actualizada, usando foto de perfil de @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('BRUUUHHH, No c pudo cambiar foto de perfil, puede ser por que ala persona que etiqueto no tiene foto de perfil ._.XD')
					}
					          break
					           case 'fotogrupo':
		        if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
		    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await teslagod.downloadAndSaveMediaMessage(mek)
                    await teslagod.updateProfilePicture (from, media)
                    reply('Se cambio el perfil del grupo UwU')
                                break
                                case 'error':
					var value = body.slice(7)
					var group = await teslagod.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					teslagod.sendMessage(from, options, text)
					           break
					           case 'l':
					           if (isBanned) return reply(mess.only.benned)
				if (!isRegister) return reply(mess.only.RgOwO)
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply(`Ejemplo de uso : ${prefix}l sexy quien lo lea 7w7`)
teslagod.sendMessage(from, `${budy.slice(3)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
                    break
					           case 'grupocreador':
					if (isBanned) return reply(mess.only.benned)
if (!isRegister) return reply(mess.only.RgOwO)
if (!isGroup) return reply(mess.only.group)
               teslagod.updatePresence(from, Presence.composing) 
              options = {
          text: `Creador y propietario del grupo es : \n⚡ @${from.split("-")[0]} ⚡`,
          contextInfo: { mentionedJid: [from] }
           }
           teslagod.sendMessage(from, options, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝙉𝙤 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖𝙨 𝙨𝙚𝙧 𝙪𝙣 𝙚𝙭𝙥𝙚𝙧𝙩𝙤 𝙥𝙖𝙧𝙖 𝙨𝙚𝙧 𝙪𝙣 𝙜𝙧𝙖𝙣 𝙖𝙧𝙩𝙞𝙨𝙩𝙖\n${namebotuwu}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/usergod.jpeg')} } }, mek } )
				               break
				
//Mis agregados xd
                 
case 'apkmods':
if (isBanned) return reply(mess.only.benned)
if (!isRegister) return reply(mess.only.RgOwO)
if (!isGroup) return reply(mess.only.group)
teslagod.sendMessage(from, modapk(prefix), text, { quoted: mek })
break
case 'anirecomendacion':
if (isBanned) return reply(mess.only.benned)
if (!isRegister) return reply(mess.only.RgOwO)
if (!isGroup) return reply(mess.only.group)
teslagod.sendMessage(from, alist(prefix), text)
break

//comandos brrrandom

case 'amp3':
if (isBanned) return reply(mess.only.benned)
if (!isRegister) return reply(mess.only.RgOwO)
if (!isGroup) return reply(mess.only.group)
if (!isQuotedVideo) return reply('Responda un video')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ lo siento no pude convertir el video a audio ;-; ❌')
						buffer = fs.readFileSync(ran)
						teslagod.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
break
case 'aimg':
if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
					if (!isQuotedSticker) return reply('❗Responda o use un sticker >.<❗')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No c puede convertir stickergif a imagen lo ciento 😔❌')
						buffer = fs.readFileSync(ran)
						teslagod.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui tiene :3'})
						fs.unlinkSync(ran)
					})
					break
					case 'lector':
					if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await teslagod.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Por favor use una imagen que contenga texto para poder escanearlo :)')
					}
					break
				case 'sticker':
				case 'stiker':
				case 'stickergif':
				case 'stk':
				case 's':
				case 'estiker':
				case 'esticker':
				case 'estick':
				case 'estik':
				if (!isRegister) return reply(mess.only.RgOwO)
					if (isBanned) return reply(mess.only.benned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await teslagod.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('NeKosmic', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									teslagod.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*teslagod.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(312,iw)':min'(312,ih)':force_original_aspect_ratio=decrease,fps=15, pad=312:312:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await teslagod.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(` Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('NeKosmic', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									teslagod.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*teslagod.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await teslagod.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falló, se produjo un error, inténtelo de nuevo dentro de unos minutos T.T')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('NeKosmic', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									teslagod.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//teslagod.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await teslagod.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								teslagod.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie una imagen usando el texto ${prefix}sticker ⚡`)
					}
					break
				case 'vos':
				case 'voz':
				if (isBanned) return reply(mess.only.benned)
				if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return teslagod.sendMessage(from, 'Prefijo del idioma en el que desea escuchar el audio?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return teslagod.sendMessage(from, 'Donde esta el texto?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 100
					? reply('Limite de caracteres 100 UwU')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('No pude codificar el texto ;-;')
							teslagod.sendMessage(from, buff, audio, {quoted: audiowo, mimetype: 'audio/mp4', duration: -999999999999999999, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
					
//comandos Hxd
             
            case 'listahenta1':
            if (isBanned) return reply(mess.only.benned)
            if (!isRegister) return reply(mess.only.RgOwO)
            if (!isGroup) return reply(mess.only.group)
            if (!isNsfw) return reply('*El modo rikolino esta apagado u.u*')
		teslagod.sendMessage(from, menunsfw(prefix, sender), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝐎𝐭𝐚𝐤𝐮𝐬 𝐓𝐞𝐜𝐧𝐨𝐥𝐨𝐠𝐢𝐜𝐨𝐬 𝐔𝐰𝐔\n${namebotuwu} ${time}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/modohxd.jpeg')} } }, mek})
                break
                case 'nekopoi':
                if (isBanned) return reply(mess.only.benned)
		if (!isNsfw) return reply('El modo rikolino esta apagado u.u')
		if (!isGroup) return reply(mess.only.group)
           if (!isRegister) return reply(mess.only.RgOwO)
                    if (args.length == 0) return reply(`Ejemplo: ${prefix}nekopoi Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Titulo : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Portada : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
            case 'hneko':
           data = await fetchJson('https://waifu.pics/api/nsfw/neko')
           if (!isNsfw) return reply('El modo rikolino esta apagado u.u')
           if (!isGroup) return reply(mess.only.group)
           if (!isRegister) return reply(mess.only.RgOwO)
           if (isBanned) return reply(mess.only.benned)
           if (isLimit(sender)) return reply(ind.limitend(pusname))
           hasil = await getBuffer(data.url)
           teslagod.sendMessage(from, hasil, image, {quoted: mek})
           reply(mess.wait)
           teslagod.sendMessage(from,`*Si no recibe nada dentro de 15 segundos reintente nuevamente :)* `, text)
           await limitAdd(sender)
           break
                      case 'hwaifu':
           data = await fetchJson('https://waifu.pics/api/nsfw/waifu')
           if (!isNsfw) return reply('El modo rikolino esta apagado u.u')
           if (!isGroup) return reply(mess.only.group)
           if (!isRegister) return reply(mess.only.RgOwO)
           if (isBanned) return reply(mess.only.benned)
           if (isLimit(sender)) return reply(ind.limitend(pusname))
           reply(mess.wait)
           teslagod.sendMessage(from,`*Si no recibe nada dentro de 15 segundos reintente nuevamente :)* `, text)
           hasil = await getBuffer(data.url)
           teslagod.sendMessage(from, hasil, image, {quoted: mek})
           await limitAdd(sender)
           break
                     case 'traph':
           data = await fetchJson('https://waifu.pics/api/nsfw/trap')
           if (!isNsfw) return reply('El modo rikolino esta apagado u.u')
           if (!isGroup) return reply(mess.only.group)
           if (!isRegister) return reply(mess.only.RgOwO)
           if (isBanned) return reply(mess.only.benned)
           if (isLimit(sender)) return reply(ind.limitend(pusname))
           reply(mess.wait)
           teslagod.sendMessage(from,`*Si no recibe nada dentro de 15 segundos reintente nuevamente :)* `, text)
           hasil = await getBuffer(data.url)
           teslagod.sendMessage(from, hasil, image, {quoted: mek})
           await limitAdd(sender)
           break
           case 'nhentaipdf':
		if (!isNsfw) return reply('El modo rikolino esta apagado u.u')
           if (!isRegister) return reply(mess.only.RgOwO)
           if (isBanned) return reply(mess.only.benned)
           if (!isGroup) return reply(mess.only.group)
           if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}nhentaipdf 12345`)
                    reply(mess.wait)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    teslagod.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    await limitAdd(sender)
                    break
           case 'nhentaibuscar':
		if (!isNsfw) return reply('El modo rikolino esta apagado u.u')
		if (!isGroup) return reply(mess.only.group)
           if (!isRegister) return reply(mess.only.RgOwO)
           if (isBanned) return reply(mess.only.benned)
           if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}nhentaibuscar bocchi`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Aqui tus resultados marranonichan : \n"
                    for (var x of get_result) {
                        ini_txt += `Codigo nuclear : ${x.id}\n`
                        ini_txt += `Titulo en ingles : ${x.title_english}\n`
                        ini_txt += `Titulo en japones: ${x.title_japanese}\n`
                        ini_txt += `Titulo original : ${x.title_native}\n`
                        ini_txt += `Subida : ${x.date_upload}\n`
                        ini_txt += `Paginas : ${x.page}\n`
                        ini_txt += `Favorito de : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
                    case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (!isNsfw) return reply('El modo rikolino esta apagado u.u')
                if (isBanned) return reply(mess.only.benned)
                if (!isGroup) return reply(mess.only.group)
		if (!isRegister) return reply(mess.only.RgOwO)
		if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhumankey}`)
                    reply(mess.wait)
                    teslagod.sendMessage(from,`*Si no recibe nada dentro de 15 segundos reintente nuevamente :)* `, text)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'chiisaihentai':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
		if (!isNsfw) return reply('El modo rikolino esta apagado u.u')
		if (isBanned) return reply(mess.only.benned)
		if (!isGroup) return reply(mess.only.group)
		if (!isRegister) return reply(mess.only.RgOwO)
		if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolhumankey}`)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek})
                    reply(mess.wait)
           teslagod.sendMessage(from,`*Si no recibe nada dentro de 15 segundos reintente nuevamente :)* `, text)
                    await limitAdd(sender)
                    break
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
		if (!isNsfw) return reply('El modo rikolino esta apagado u.u')
		if (isBanned) return reply(mess.only.benned)
		if (!isGroup) return reply(mess.only.group)
		if (!isRegister) return reply(mess.only.RgOwO)
		if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhumankey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        teslagod.sendMessage(from, buff, sticker, { quoted: mek})
                        fs.unlinkSync(rano)
                    })
                    await limitAdd(sender)
                    break
					
//Zona crea logos :u
                    //xd
                    case 'crealogos':
                    if (isBanned) return reply(mess.only.benned)
            if (!isRegister) return reply(mess.only.RgOwO)
            if (!isGroup) return reply(mess.only.group)
            if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
		teslagod.sendMessage(from, menuarteuwu(prefix, sender), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝙏𝙪 𝙞𝙢𝙖𝙜𝙞𝙣𝙖𝙘𝙞𝙤𝙣 𝙚𝙨 𝙚𝙡 𝙡𝙞𝙢𝙞𝙩𝙚\n${namebotuwu} ${time}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/chambiando.jpeg')} } }, mek})
                    break
                    case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
		if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (isBanned) return reply(mess.only.benned)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso: ${prefix + command} NeKosmic`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolhumankey}&text=${ini_txt}`)
                    reply(mess.wait)
           teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
		if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (isBanned) return reply(mess.only.benned)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso: ${prefix + command} NeKosmic`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolhumankey}&text=${ini_txt}`)
                    reply(mess.wait)
           teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'bannerlol':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
		if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (isBanned) return reply(mess.only.benned)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso: ${prefix + command} Ne Kosmic`)
                cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Ne Kosmic`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolhumankey}&text1=${txt1}&text2=${txt2}`)
                    reply(mess.wait)
           teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
		if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (isBanned) return reply(mess.only.benned)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso: ${prefix + command} NeKosmic`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolhumankey}&text=${ini_txt}`)
                    reply(mess.wait)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek})
                    teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
                    await limitAdd(sender)
                    break
                    case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (!isRegister) return reply(mess.only.RgOwO)
                if (isBanned) return reply(mess.only.benned)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`▪︎Ejemplos de uso : ${prefix + command} Ne|Kosmic `)
                cf = args.join(" ").split("|")
                uwu = cf[0]
                uwur = cf[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolhumankey}&text1=${uwu}&text2=${uwur}`)
                    reply (mess.wait)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek})
                    teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
                    await limitAdd(sender)
                    break
                    
//imagenes ._.
                    
                    case 'fullimagenes':
                    if (isBanned) return reply(mess.only.benned)
            if (!isRegister) return reply(mess.only.RgOwO)
            if (!isGroup) return reply(mess.only.group)
            if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
		teslagod.sendMessage(from, menuimagenes(prefix, sender), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝙐𝙣 𝙖𝙧𝙩𝙞𝙨𝙩𝙖 𝙘𝙧𝙚𝙖 𝙩𝙤𝙙𝙤 𝙨𝙪 𝙪𝙣𝙞𝙫𝙚𝙧𝙨𝙤\n${namebotuwu} ${time}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/artyou.jpeg')} } }, mek})
                    break
                    case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
		        if (!isRegister) return reply(mess.only.RgOwO)
		if (isBanned) return reply(mess.only.benned)
                    if (!isGroup) return reply(mess.only.group)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
			    if (!isAnime) return reply('Modo anime ta apagado >.<')
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumankey}`)
                    reply(mess.wait)
           teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
                    teslagod.sendMessage(from, buffer, image, { quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                if (isBanned) return reply(mess.only.benned)
		if (!isRegister) return reply(mess.only.RgOwO)
			if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
			if (!isGroup) return reply(mess.only.group)
			if (args.length == 0) return reply(`▪︎Ejemplos de uso : ${prefix + command} NeKosmic `)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${lolhumankey}&text=${ini_txt}`)
                    reply(mess.wait)
                    teslagod.sendMessage(from, ini_buffer, sticker, { quoted: mek})
                    break
                    case 'escritoriowpp':
		if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (isBanned) return reply(mess.only.benned)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`▪︎Ejemplos de uso : ${prefix}escritoriowpp univers `)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${lolhumankey}&query=${query}`)
                    reply(mess.wait)
           teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'escritoriowpp2':
                    if (isBanned) return reply(mess.only.benned)
		if (!isRegister) return reply(mess.only.RgOwO)
if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
if (!isGroup) return reply(mess.only.group)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`▪︎Ejemplos de uso : ${prefix}escritoriowpp2 univers `)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${lolhumankey}&query=${query}`)
                    reply(mess.wait)
           teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
                    ini_buffer = await getBuffer(get_result.result)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'tesla':
                    if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))

teslagod.updatePresence(from, Presence.composing)
uk = [""]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=NikolaTesla&query=nikola+tesla+anime`, {
  method: 'get'
})
reply(mess.wait)
teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
nene = await getBuffer(data.result)
teslagod.sendMessage(from, nene, image, {
  quoted: mek, caption: ` *Tesla-Kun* `
})
await limitAdd(sender)

} catch {
  reply(mess.ferr)
}
                    break
                    case 'nekosmic':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))

teslagod.updatePresence(from, Presence.composing)
uk = [""]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=NikolaTesla&query=astronaut+cat`, {
  method: 'get'
})
reply(mess.wait)
teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
nene = JSON.parse(JSON.stringify(data.result));
nimek = nene[Math.floor(Math.random() * nene.length)];
pok = await getBuffer(nimek)
teslagod.sendMessage(from, pok, image, {
  quoted: mek, caption: ` *NeKosmic* `
})
await limitAdd(sender)

} catch {
  reply(mess.ferr)
}
                    break
                    case 'animeme':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isAnime) return reply('Modo anime ta apagado >.<')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))

teslagod.updatePresence(from, Presence.composing)
uk = [""]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=NikolaTesla&query=shitpost+otaku+espa%C3%B1ol`, {
  method: 'get'
})
reply(mess.wait)
						teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
n = JSON.parse(JSON.stringify(data.result));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
teslagod.sendMessage(from, pok, image, {
  quoted: mek, caption: ` equis d `
})
await limitAdd(sender)

} catch {
  reply(mess.ferr)
}
                    break
                    case 'memerandom':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))

teslagod.updatePresence(from, Presence.composing)
uk = [""]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=NikolaTesla&query=humor+estupido`, {
  method: 'get'
})
reply(mess.wait)
teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
n = JSON.parse(JSON.stringify(data.result));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
teslagod.sendMessage(from, pok, image, {
  quoted: mek, caption: ` ._.XD `
})
await limitAdd(sender)

} catch {
  reply(mess.ferr)
}
                    break
                    case 'videtexto':
                    if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}videtexto a`)
					aruga = body.slice(11)
					reply(mess.wait)
					aruga = await getBuffer(`https://api.xteam.xyz/videomaker/poly?text=${aruga}&APIKEY=AkiraBotWa`)
					teslagod.sendMessage(from, aruga, video, {mimetype:  'video/mp4', caption: 'Tu videotexto', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝙎𝙚𝙭𝙮 𝙀𝙡 𝙌𝙪𝙞𝙚𝙣 𝙇𝙤 𝙡𝙚𝙖 7𝙬7\n${namebotuwu} ${time}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/logouwur.jpg')} } }})
				    await limitAdd(sender)
					break
					case 'creavideoxd':
					if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}creavideoxd https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR680jOmdJF67hRyT2DFG-Zr2xVvz46J1f_8w&usqp=CAU`)
					aruga = body.slice(13)
					reply(mess.wait)
					aruga = await getBuffer(`https://api.xteam.xyz/videomaker/shaunthesheep?url=${aruga}&APIKEY=AkiraBotWa`)
					teslagod.sendMessage(from, aruga, video, {mimetype:  'video/mp4', caption: 'un mini edit xd', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝙎𝙚𝙭𝙮 𝙀𝙡 𝙌𝙪𝙞𝙚𝙣 𝙇𝙤 𝙡𝙚𝙖 7𝙬7\n${namebotuwu} ${time}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/logouwur.jpg')} } }})
				    await limitAdd(sender)
					break
					case 'fakedonald':
					if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}fakedonald tesla un grande`)
                    reply(mess.wait)
                    ini_txt = args.join(" ")
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=${lolhumankey}&text=${ini_txt}`)
                    teslagod.sendMessage(from, ini_anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝙁𝙪𝙚𝙣𝙩𝙚𝙨: TWITTER\n${namebotuwu} ${time}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/trompp.jpeg')} } }, mek})
                    await limitAdd(sender)
                    break
                    case 'logocosmic':
                    if (isBanned) return reply(mess.only.benned)
                if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
                if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}logocosmic NeKosmic`)
				ct = body.slice(11)
				reply(mess.wait)
				ct = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/galaxystyle?apikey=${lolhumankey}&text=${ct}`)
				teslagod.sendMessage(from, ct, image, { quoted: mek})
				setTimeout( () => {
					teslagod.sendMessage(from, ' *Si no recibe una respuesta dentro de 10s, por favor intente nuevamente :)* ', text) // ur cods
					}, 2500)
				await limitAdd(sender)
				break
				case 'xdnot':
				if (isBanned) return reply(mess.only.benned)
				if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
                if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                if (isLimit(sender)) return reply(ind.limitend(pusname))

teslagod.updatePresence(from, Presence.composing)
uk = ["image cursed",
"Imagenes turbias terror"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=NikolaTesla&query=${nk}`, {
  method: 'get'
})
reply(mess.wait)
teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
n = JSON.parse(JSON.stringify(data.result));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
teslagod.sendMessage(from, pok, image, {
  quoted: mek, caption: `. _.`
})
await limitAdd(sender)

} catch {
  reply(mess.ferr)
}
                    break
                    case 'xd':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
                if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                if (isLimit(sender)) return reply(ind.limitend(pusname))

teslagod.updatePresence(from, Presence.composing)
uk = ["memes sin sentido",
"random imagenes",
"shitpost magia"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=NikolaTesla&query=${nk}`, {
  method: 'get'
})
reply(mess.wait)
teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
n = JSON.parse(JSON.stringify(data.result));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
teslagod.sendMessage(from, pok, image, {
  quoted: mek, caption: `. _.`
})
await limitAdd(sender)

} catch {
  reply(mess.ferr)
}
                    break
                    case 'loliuwu':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
                if (!isAnime) return reply('Modo anime ta apagado >.<')
                if (isLimit(sender)) return reply(ind.limitend(pusname))

teslagod.updatePresence(from, Presence.composing)
uk = ["cute loli anime",
"loli anime"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=NikolaTesla&query=${nk}`, {
  method: 'get'
})
reply(mess.wait)
teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
n = JSON.parse(JSON.stringify(data.result));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
teslagod.sendMessage(from, pok, image, {
  quoted: mek, caption: ` *UwU* `
})
await limitAdd(sender)

} catch {
  reply(mess.ferr)
}
                    break
                    case 'infoprota':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
                if (!isAnime) return reply('Modo anime ta apagado >.<')
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}infoprota megumin`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ` ➢ *Id* : ${get_result.id}\n`
                    ini_txt += ` ➫ *Nombre* : ${get_result.name.full}\n`
                    ini_txt += `  ➥ *Nombre nativo* : ${get_result.name.native}\n`
                    ini_txt += ` ★ *Favorito* : ${get_result.favourites}\n`
                    ini_txt += ` ✿ *Protagonista* : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    thumbnail = await getBuffer(get_result.image.large)
                    teslagod.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    await limitAdd(sender)
                    break
                    case 'nekos':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isAnime) return reply('Modo anime ta apagado >.<')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
           data = await fetchJson('https://waifu.pics/api/sfw/neko')
           reply(mess.wait)
           teslagod.sendMessage(from,`*Si no recibe nada dentro de 15 segundos reintente nuevamente :)* `, text)
           hasil = await getBuffer(data.url)
           teslagod.sendMessage(from, hasil, image, {quoted: mek})
           await limitAdd(sender)
           break
           case 'waifus':
           if (isBanned) return reply(mess.only.benned)
                     if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isAnime) return reply('Modo anime ta apagado >.<')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
           data = await fetchJson('https://waifu.pics/api/sfw/waifu')
           reply(mess.wait)
           teslagod.sendMessage(from,`*Si no recibe nada dentro de 15 segundos reintente nuevamente :)* `, text)
           hasil = await getBuffer(data.url)
           teslagod.sendMessage(from, hasil, image, {quoted: mek})
           await limitAdd(sender)
           break
                    case 'kawaii1':
                    if (isBanned) return reply(mess.only.benned)
                if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isAnime) return reply('Modo anime ta apagado >.<')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
teslagod.updatePresence(from, Presence.composing)
				reply(mess.wait)
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/neko?apikey=${lolhumankey}`)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ` *ÛwÛ* ` })
                    await limitAdd(sender)
                    break
                    case 'kawaii2':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isAnime) return reply('Modo anime ta apagado >.<')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
teslagod.updatePresence(from, Presence.composing)
				reply(mess.wait)
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/neko?apikey=${lolhumankey}`)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ` *ÛwÛ* ` })
                    await limitAdd(sender)
                    break
                    case 'kawaii3':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isAnime) return reply('Modo anime ta apagado >.<')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
teslagod.updatePresence(from, Presence.composing)
				reply(mess.wait)
				teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/neko?apikey=${lolhumankey}`)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ` *UwU* ` })
                    await limitAdd(sender)
                    break
                    case 'stickbaka':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isAnime) return reply('Modo anime ta apagado >.<')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
teslagod.updatePresence(from, Presence.composing)
				reply(mess.wait)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random2/baka?apikey=${lolhumankey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        teslagod.sendMessage(from, buff, sticker, { quoted: mek})
                        fs.unlinkSync(rano)
                    })
                    await limitAdd(sender)
                    break
                    case 'fraseedit':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
                if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(11)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Ejemplo de uso : \n${prefix}fraseedit a|alguien`
					if (args.length < 1) return reply(pref)
					reply(mess.wait)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					teslagod.sendMessage(from, buffer, image, {caption: ':)', quoted: mek})
				teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
					await limitAdd(sender)
					break
					case 'gneon':
					if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
                if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					gh = `${body.slice(7)}`
					gbl1 = gh.split("|")[0];
					if (args.length < 1) return reply(`Ejemplo de uso : ${prefix}gneon tesla`)
					buffer = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=${apivinz}&text=${gbl1}`, {method: 'get'})
					reply(mess.wait)
					teslagod.sendMessage(from, buffer, image, {quoted: mek})
					teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
					await limitAdd(sender) 
					break
                case 'matrixlogo':
                if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
                if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					gh = `${body.slice(12)}`
					gbl1 = gh.split("|")[0];
					gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply(`Ejemplo de uso : ${prefix}matrixlogo tesla|uwu`)
					buffer = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=${apivinz}&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
					reply(mess.wait)
					teslagod.sendMessage(from, buffer, image, {quoted: mek})
					teslagod.sendMessage(from,`*Si no recibe nada dentro de 10 segundos reintente nuevamente :)* `, text)
					await limitAdd(sender) 
					break
					case 'text3d':
					if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
                if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('digite un texto')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return teslagod.sendMessage(from, 'maximo de digitos 10', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    teslagod.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	break
			await limitAdd(sender)
                    
//random comandos
                    
                    case 'minidatos':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
                if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fakta-unik`, {method: 'get'})
                    args.shift()
                    ini_txt = anu.result
                    
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/es?apikey=${lolhumankey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `${get_result.translated}\n`
					teslagod.sendMessage(from, init_txt, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'frasesamor':
					if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
                if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
                    args.shift()
                    ini_txt1 = anu.result
                    
                    get_result2 = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/es?apikey=${lolhumankey}&text=${ini_txt1}`)
                    get_result = get_result2.result
                    init_txt = `${get_result.translated}\n`
					teslagod.sendMessage(from, init_txt, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'estadoxd':
					if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
                if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`, {method: 'get'})
                    args.shift()
                    ini_txt2 = anu.result.fml
                    
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/es?apikey=${lolhumankey}&text=${ini_txt2}`)
                    get_result = get_result.result
                    init_txt = `${get_result.translated}\n`
					teslagod.sendMessage(from, init_txt, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'miname':
					if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
                if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}miname tesla`)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/artinama?nama=${body.slice(8)}`, {method: 'get'})
                    args.shift()
                    ini_txt = anu.result
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/es?apikey=${lolhumankey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `${get_result.translated}\n`
					teslagod.sendMessage(from, init_txt, text, { quoted: mek })
					await limitAdd(sender)
					break
					
                    case 'ledstick':
                    if (isBanned) return reply(mess.only.benned)
				if (!isRegister) return reply(mess.only.RgOwO)
                if (!isGroup) return reply(mess.only.group)
                if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}ledst NeKosmic`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(10)}`)
				teslagod.sendMessage(from, attp2, sticker, {quoted: mek})
				await limitAdd(sender)
				break
                    case 'semoji':
                    if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}semoji 😳`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolhumankey}`)
                    teslagod.sendMessage(from, ini_anu, sticker, {quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'bandera?':
                    if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${lolhumankey}`, {method: 'get'})
					tebakbender = `*nombre de esta bandera?* \n ${anu.result.flag}`
					setTimeout( () => {
					teslagod.sendMessage(from, '*➸ Respuesta :* '+anu.result.name, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					teslagod.sendMessage(from, '_10 Segundos restantes…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					teslagod.sendMessage(from, '_20 Segundos restantes_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					teslagod.sendMessage(from, '_30 Segundos restantes_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					teslagod.sendMessage(from, tebakbender, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break
                    case 'amongus':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}amongus TeslaGod`)
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=${lolhumankey}&text=${body.slice(9)}`)
                    teslagod.sendMessage(from, buffer, sticker, { quoted: mek})
                    await limitAdd(sender)
                    amongusss = fs.readFileSync('./fiestamp3/audishitxd/amonggg.m4a');
            teslagod.sendMessage(from, amongusss, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                    break
                    case 'audio':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (args.length == 0) return reply(`Ejemplo: ${prefix}audio mtc s3rl`)
reply('*Aguarde toy procesando su pedido...*')
query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    teslagod.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek })
                    get_audio = await getBuffer(get_result.audio)
await teslagod.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', duration :-999999999999999, ptt: true, filename: `${get_result.title}.mp3`, quoted: audiowor })
                    break
                    case 'infomusica':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}infomusica mtc`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = ` *Titulo* : ${get_info.title}\n`
                    ini_txt += ` *Fecha de subida* : ${get_info.uploader}\n`
                    ini_txt += ` *Duracion* : ${get_info.duration}\n`
                    ini_txt += ` *Vistas* : ${get_info.view}\n`
                    ini_txt += ` *Likes* : ${get_info.like}\n`
                    ini_txt += ` *Dislike* : ${get_info.dislike}\n`
                    ini_txt += ` *Description del video* :\n ${get_info.description}\n`
                    buffer = await getBuffer(get_info.thumbnail)
                    teslagod.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝐎𝐭𝐚𝐤𝐮𝐬 𝐓𝐞𝐜𝐧𝐨𝐥𝐨𝐠𝐢𝐜𝐨𝐬 𝐔𝐰𝐔\n${namebotuwu} ${time}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/logouwur.jpg')} } }, caption: ini_txt})
                    setTimeout( () => {
					teslagod.sendMessage(from, ' 🎧 ', text) // ur cods
					}, 2500)
					await limitAdd(sender)
                    break
                    case 'buscar':
                    if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso: ${prefix}buscar mtc `)
                    reply(mess.wait)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                    	ini_txt += ` ➫ *Link* : https://www.youtube.com/watch?v=${x.videoId}\n`
                        ini_txt += ` ♬ *Titulo* : ${x.title}\n`
                        ini_txt += ` ❖ *Vistas* : ${x.views}\n`
                        ini_txt += ` ✎ *Publicado* : ${x.published}\n`
                        ini_txt += ` ✠ *Logo* : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
                    case 'yutump3':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}yutump3 https://youtu.be/ed-6VSF-GGc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${lolhumankey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `▪︎Titulo : ${get_result.title}\n`
                    ini_txt += `▪︎Fecha de subida : ${get_result.uploader}\n`
                    ini_txt += `▪︎Duracion : ${get_result.duration}\n`
                    ini_txt += `▪︎Vistas : ${get_result.view}\n`
                    ini_txt += `▪︎Likes : ${get_result.like}\n`
                    ini_txt += `▪︎Dislikes : ${get_result.dislike}\n`
                    ini_txt += `▪︎Descripcion :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    teslagod.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝐎𝐭𝐚𝐤𝐮𝐬 𝐓𝐞𝐜𝐧𝐨𝐥𝐨𝐠𝐢𝐜𝐨𝐬 𝐔𝐰𝐔\n${namebotuwu} ${time}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/logouwur.jpg')} } }, mek})
                    setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply(`*Puedes apoyar al creador en sus redes* :)\n\n 》https://vm.tiktok.com/ZMecXQmoA/ \n﻿━━━━━━━/\/\━━━━━━━\n 》https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA`)
		}, 5000)
		            await limitAdd(sender)
                    break
                    case 'telesticker':
		if (!isRegister) return reply(mess.only.RgOwO)
		if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : .${prefix}telesticker https://t.me/addstickers/LINE_Menhera_chan_ENG\n\nPagina para que encuentren links de stickers de telegram : https://tlgrm.es/stickers`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${lolhumankey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        teslagod.sendMessage(from, ini_buffer, sticker)
                    }
                    await limitAdd(sender)
                    break
                    case 'heroeml':
                    if (isBanned) return reply(mess.only.benned)
  if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isAnime) return reply('Modo anime ta apagado >.<')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}heroeml nana`)
                    hero = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Nombre : ${get_result.hero_name}\n`
                    ini_txt += `Vos de entrada : ${get_result.ent_quotes}\n`
                    ini_txt += `Fecha de lanzamiento : ${get_result.detail.release_date}\n`
                    ini_txt += `Velocidad de movimiento : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Ataque fisico : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Poder magico : ${get_result.attr.magic_power}\n`
                    ini_txt += `Defensa fisica : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Defensa magica : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Tasa de ataque critico : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana de regeneracion : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    teslagod.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
			        await limitAdd(sender)
                    break
                    case 'traductor':
                    if (isBanned) return reply(mess.only.benned)
  if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}traductor es hi friend`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolhumankey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `Prefijo del idioma detectado : ${get_result.from}\n`
                    init_txt += `Traducido a : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Traducido : ${get_result.translated}\n`
                    init_txt += `Pronunciacion : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    await limitAdd(sender)
                    break
                    case 'letra':
                    if (isBanned) return reply(mess.only.benned)
  if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}letra oh me vengo`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=${lolhumankey}&query=${query}`)
                    reply(get_result.result)
                    await limitAdd(sender)
                    break
                    case 'clima':
                    if (isBanned) return reply(mess.only.benned)
  if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}clima sicuani`)
                    daerah = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `•Lugar : ${get_result.tempat}\n`
                    ini_txt += `•Velocidad de viento : ${get_result.angin}\n`
                    ini_txt += `•Humedad : ${get_result.kelembapan}\n`
                    ini_txt += `•Temperatura : ${get_result.suhu}\n`
                    ini_txt += `•Aire : ${get_result.udara} Presion atmosferica\n`
                    ini_txt += `•Nivel del mar : ${get_result.permukaan_laut} Presion atmosferica\n`
                    teslagod.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek})
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
                    case 'wattpadbuscar':
                    if (isBanned) return reply(mess.only.benned)
  if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}wattpadbuscar romeo y julieta`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Resultados de wattpad : \n"
                    for (var x of get_result) {
                        ini_txt += `Titulo : ${x.title}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Numero de partes : ${x.parts}\n`
                        ini_txt += `Fecha de modificacion : ${x.modifyDate}\n`
                        ini_txt += `Fecha de creacion : ${x.createDate}\n`
                        ini_txt += `Recuento de comentarios : ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
                    case 'playstore':
                    if (isBanned) return reply(mess.only.benned)
  if (!isRegister) return reply(mess.only.RgOwO)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Example: ${prefix}playstore minecraft`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Resultados de su busqueda en playstore : \n\nFREE = Gratis\n》 $ 《= Precio en dolar\n\n'
                    for (var x of get_result) {
                        ini_txt += `Nombre : ${x.title}\n`
                        ini_txt += `Nombre del Paquete : ${x.appId}\n`
                        ini_txt += `Desarrollado por : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Precio : ${x.priceText}\n`
                        ini_txt += `Precio : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
                    case 'stickerwa':
		if (!isGroup) return reply(mess.only.group)
	    if (!isGroupAdmins) return reply(mess.only.admin)
	if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
	    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Ejemplo de uso : ${prefix}stickerwa anime`)
                    reply('Procesando...')
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lolhumankey}&img=${x}`)
                        teslagod.sendMessage(from, ini_buffer, sticker)
                    }
                    await limitAdd(sender)
                    break
                    case 'qrcode':
                    if (isBanned) return reply(mess.only.benned)
  if (!isRegister) return reply(mess.only.RgOwO)
if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
if (!isGroup) return reply(mess.only.group)
                    if (args.length == 0) return reply(`Ejemplo de uso : .qrcode tesla`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/qrcode?apikey=${lolhumankey}&text=${query}`)
                    teslagod.sendMessage(from, ini_buffer, image, { quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'nombrerandom':
                    if (isBanned) return reply(mess.only.benned)
		if (!isRegister) return reply(mess.only.RgOwO)
if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
if (!isGroup) return reply(mess.only.group)
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${lolhumankey}`)
                    reply(anu.result)
                    break
                    case 'infotik':
                    if (isBanned) return reply(mess.only.benned)
			if (!isRegister) return reply(mess.only.RgOwO)
			if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
                    if (!isGroup) return reply(mess.only.group)
                    if (args.length == 0) return reply(`Ejemplo de uso: ${prefix + command} nekosmic`)
reply(mess.wait) 
jaksjsjdjajgjajajaha = body.slice(9) 
hans = await fetchJson (`https://api.lolhuman.xyz/api/stalktiktok/${jaksjsjdjajgjajajaha}?apikey=${lolhumankey}`) 
buffer = await getBuffer(hans.result.user_picture) 
teks = `*Sobrenombre* : ${hans.result.nickname}\n*Nombre* : ${hans.result.username}\n*Descripcion* : ${hans.result.bio}\n*No de seguidores*: ${hans.result.followers}\n*Siguiendo a* : ${hans.result.followings} usuarios\n*Corazones* : ${hans.result.likes}\n*Videos* : ${hans.result.video}`
teslagod.sendMessage(from, buffer, image, { quoted: mek, caption: teks })
break
                    case 'ultimoanimes':
                    case 'ultimoanime':
                    if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
if (!isGroup) return reply(mess.only.group)
					if (!isAnime) return reply('Modo anime ta apagado >.<')
					data = await fetchJson(`https://api.lolhuman.xyz/api/neonimelatest?apikey=${lolhumankey}`, {method: 'get'})
					teks = ' 𝙀𝙨𝙩𝙖 𝙚𝙨 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙡𝙤𝙨 𝙣𝙪𝙚𝙫𝙤𝙨 𝙡𝙖𝙣𝙯𝙖𝙢𝙞𝙚𝙣𝙩𝙤𝙨 𝙖𝙣𝙞𝙢𝙚 \n\n'
					for (let i of data.result) {
						teks += `🏷 *Titulo* : ${i.title}\n\n ⛩ *Episodio* : ${i.episode}\n 🗓 *fecha de lanzamiento* : ${i.date}\n.෴.෴.෴.෴.෴.෴.෴.෴.෴.෴.෴.෴. \n`
					}
					setTimeout( () => {
					teslagod.sendMessage(from, ' *PSDT: No encontre un API en español para los resultados, lo ciento u.u* ', text)
					}, 2500)
					reply(teks.trim())
                    await limitAdd(sender)
					break
					case 'mapa':
					if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
if (!isGroup) return reply(mess.only.group)
if (args.length == 0) return reply(`Ejemplo de uso: ${prefix + command} peru`)
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(6)}`)
                   reply(mess.wait)
                   hasil = await getBuffer(data.gambar)
                   teslagod.sendMessage(from, hasil, image, {quoted: mek, caption: `Aqui un minimapa de *${body.slice(6)}*`})
                   break
                   
                   //
                 //
               //
                   
                   case 'data':
                   if (isBanned) return reply(mess.only.benned)
                   if (!isRegister) return reply(mess.only.RgOwO)
			   if (args.length < 1) return reply('Ejemplo de uso : .data img1...img∞')
				namastc = body.slice(8)
				anu = fs.readFileSync(`./recursos/imagenesrandoms/${namastc}.jpeg`)
				teslagod.sendMessage(from, anu, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝐎𝐭𝐚𝐤𝐮𝐬 𝐓𝐞𝐜𝐧𝐨𝐥𝐨𝐠𝐢𝐜𝐨𝐬 𝐔𝐰𝐔\n${namebotuwu} ${time}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/logouwur.jpg')} }}, caption: `...` })
				break
                   case 'musica':
if (!isRegister) return reply(mess.only.RgOwO)
			   if (args.length < 1) return reply('Ejemplo de uso: .musica 1x...∞x')
				namastc = body.slice(8)
				anu = fs.readFileSync(`./fiestamp3/musicas/${namastc}.mp3`)
				teslagod.sendMessage(from, anu, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝐎𝐭𝐚𝐤𝐮𝐬 𝐓𝐞𝐜𝐧𝐨𝐥𝐨𝐠𝐢𝐜𝐨𝐬 𝐔𝐰𝐔\n${namebotuwu} ${time}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/logouwur.jpg')} } }, mek, ptt: true })
				break
				
//comandos basicos

case 'calumnia':
                   if (!isRegister) return reply(mess.only.RgOwO) 
if (isBanned) return reply(mess.only.benned)
if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Usa :\n${prefix}calumnia [@tag|mensaje|respuesta]]\n\nEjemplo : \n${prefix}calumnia @usuarioetiquetado|bendiceme|bendecido`)
				var fitn = body.slice(10)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace3 = fitn.split("|")[0];
					var target3 = fitn.split("|")[1];
					var bot3 = fitn.split("|")[2];
					teslagod.sendMessage(from, `${bot3}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target3}` }}})
					break
					case 'tragamoneda':
					if (!isRegister) return reply(mess.only.RgOwO) 
if (isBanned) return reply(mess.only.benned)
if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
if (!isGroup) return reply(mess.only.group)
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            teslagod.sendMessage(from, `[  🎰  *TRAGAMONEDAS*  🎰  ]\n-----------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n-----------------\n[  🎰 Prueba tu suerte 🎰  ]\n\nDescripción: Si obtienes 3 mismas frutas,\n!Ganas¡\nEjemplo : 🍒 : 🍒 : 🍒<=====`, text, { quoted: mek })
            break
                   case 'dado':
                   if (!isRegister) return reply(mess.only.RgOwO) 
if (isBanned) return reply(mess.only.benned)
if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
if (!isGroup) return reply(mess.only.group)
					kapankah = body.slice(1)
					const eluuuu =['2️⃣','1️⃣','5️⃣','3️⃣','6️⃣','4️⃣']
					const uleeee = eluuuu[Math.floor(Math.random() * eluuuu.length)]
					teslagod.sendMessage(from, uleeee, text, { quoted: mek })
					break
					case 'dados':
					if (!isRegister) return reply(mess.only.RgOwO) 
if (isBanned) return reply(mess.only.benned)
if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
if (!isGroup) return reply(mess.only.group)
					kapankah = body.slice(1)
					const elu2 =['⚁','⚀','⚄','⚂','⚅','⚃']
					const ule2 = elu2[Math.floor(Math.random() * elu2.length)]
					teslagod.sendMessage(from, ule2, text, { quoted: mek })
					break
					case 'da2':
					if (!isRegister) return reply(mess.only.RgOwO) 
if (isBanned) return reply(mess.only.benned)
if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
if (!isGroup) return reply(mess.only.group)
					kapankah = body.slice(1)
					const elu3 =['⚀\n      ⚁','⚀\n      ⚂','⚀\n      ⚃','⚀\n      ⚄','⚀\n      ⚅','⚀\n      ⚀','⚁\n      ⚁','⚁\n      ⚂','⚁\n      ⚃','⚁\n      ⚄','⚁\n      ⚅','⚁\n      ⚀','⚂\n      ⚁','⚂\n      ⚂','⚂\n      ⚃','⚂\n      ⚄','⚂\n      ⚅','⚂\n      ⚀','⚃\n      ⚁','⚃\n      ⚂','⚃\n      ⚃','⚃\n      ⚄','⚃\n      ⚅','⚃\n      ⚀','⚄\n      ⚁','⚄\n      ⚂','⚄\n      ⚃','⚄\n      ⚄','⚄\n      ⚅','⚅\n      ⚀','⚅\n      ⚁','⚅\n      ⚂','⚅\n      ⚃','⚅\n      ⚄','⚅\n      ⚅','⚅\n      ⚀']
					const ule3 = elu3[Math.floor(Math.random() * elu3.length)]
					teslagod.sendMessage(from, ule3, text, { quoted: mek })
					break
					case 'emparejar':
					if (!isRegister) return reply(mess.only.RgOwO) 
if (isBanned) return reply(mess.only.benned)
if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
if (!isGroup) return reply(mess.only.group)
                    reply(`${pushname} esta realizando una boda\n\n*Generando pareja...*`)
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = ` ❑ *Pareja formada* : \n\n ┏─━─━─━∞◆∞━─━─━─┓\n@${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} \n ┗─━─━─━∞◆∞━─━─━─┛`
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					setTimeout( () => {
					mentions(teks, jds, true)
					}, 800)
					vivannn = fs.readFileSync(`./fiestamp3/audiouwu/willyuwu.m4a`)
				teslagod.sendMessage(from, vivannn, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `𝗘𝘀𝘁𝗼 𝗳𝘂𝗲 𝗽𝗼𝘀𝗶𝗯𝗹𝗲 𝗴𝗿𝗮𝗰𝗶𝗮𝘀 𝗮 ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/vivannnnn.jpg')} } }, mek, ptt: true })
					break
					case 'top5':
					if (!isRegister) return reply(mess.only.RgOwO) 
if (isBanned) return reply(mess.only.benned)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Que top quieres :3?')
                    tagxd = body.slice(6)
					jds = []
					const jdiai = groupMembers
					const koses = groupMembers
					const jdiii = groupMembers
					const kosss = groupMembers
					const jdiiu = groupMembers
					const akuau = jdiai[Math.floor(Math.random() * jdiai.length)]
					const dieaa = koses[Math.floor(Math.random() * koses.length)]
					const akuaua = jdiii[Math.floor(Math.random() * jdiii.length)]
					const diaaa = kosss[Math.floor(Math.random() * kosss.length)]
					const ekuau = jdiiu[Math.floor(Math.random() * jdiiu.length)]
					teks = ` *TOP 5 ${tagxd}* : \n\n✵  :･ﾟ✧ :･ﾟ✵ *:･ﾟ✧:･ﾟ✵\n\n▪︎ @${akuau.jid.split('@')[0]} \n\n▪︎ @${dieaa.jid.split('@')[0]} \n\n▪︎ @${akuaua.jid.split('@')[0]} \n\n▪︎ @${diaaa.jid.split('@')[0]} \n\n▪︎ @${ekuau.jid.split('@')[0]} \n\n✵  :･ﾟ✧ :･ﾟ✵ *:･ﾟ✧:･ﾟ✵\n\n 》 *Gracias por ver* 《 \nGenerador del top ${pushname}`
					jds.push(akuau.jid)
					jds.push(dieaa.jid)
					jds.push(akuaua.jid)
					jds.push(diaaa.jid)
					jds.push(ekuau.jid)
					mentions(teks, jds, true)
					break
					case 'top10':
					if (!isRegister) return reply(mess.only.RgOwO) 
if (isBanned) return reply(mess.only.benned)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Que top quieres :3?')
                    reply('*Generando TOP, Espere...*')
                    tagxd2 = body.slice(7)
					jds = []
					const jdiai1 = groupMembers
					const koses2 = groupMembers
					const jdiii3 = groupMembers
					const kosss4 = groupMembers
					const jdiiu5 = groupMembers
					const gaea6 = groupMembers
					const gozu7 = groupMembers
					const albaf8 = groupMembers
					const teru9 = groupMembers
					const miowo0 = groupMembers
					const akauau = jdiai1[Math.floor(Math.random() * jdiai1.length)]
					const dieaua = koses2[Math.floor(Math.random() * koses2.length)]
					const aakuaua = jdiii3[Math.floor(Math.random() * jdiii3.length)]
					const ediaaa = kosss4[Math.floor(Math.random() * kosss4.length)]
					const aekuau = jdiiu5[Math.floor(Math.random() * jdiiu5.length)]
					const aku2au = gaea6[Math.floor(Math.random() * gaea6.length)]
					const die3aa = gozu7[Math.floor(Math.random() * gozu7.length)]
					const aku4aua = albaf8[Math.floor(Math.random() * albaf8.length)]
					const dia5aa = teru9[Math.floor(Math.random() * teru9.length)]
					const ek6uau = miowo0[Math.floor(Math.random() * miowo0.length)]
					teks = ` *TOP 10 ${tagxd2}* : \n\n|= ✧ = ✵ |  ¥  | ✵ = ✧ =|\n\n_1.º @${akauau.jid.split('@')[0]}_ \n\n_2.º @${dieaua.jid.split('@')[0]}_ \n\n_3.º @${aakuaua.jid.split('@')[0]}_ \n\n_4.º @${ediaaa.jid.split('@')[0]}_ \n\n_5.º @${aekuau.jid.split('@')[0]}_ \n\n_6.º @${aku2au.jid.split('@')[0]}_ \n\n_7.º @${die3aa.jid.split('@')[0]}_ \n\n_8.º @${aku4aua.jid.split('@')[0]}_ \n\n_9.º @${dia5aa.jid.split('@')[0]}_ \n\n_10.º @${ek6uau.jid.split('@')[0]}_ \n\n|= ✧ = ✵ |  ¥  | ✵ = ✧ =|`
					jds.push(akauau.jid)
					jds.push(dieaua.jid)
					jds.push(aakuaua.jid)
					jds.push(ediaaa.jid)
					jds.push(aekuau.jid)
					jds.push(aku2au.jid)
					jds.push(die3aa.jid)
					jds.push(aku4aua.jid)
					jds.push(dia5aa.jid)
					jds.push(ek6uau.jid)
					setTimeout( () => {
					mentions(teks, jds, true)
					}, 3500)
					rem = [
			result = fs.readFileSync(`./fiestamp3/audishitxd/audishit1.m4a`),
			result1 = fs.readFileSync(`./fiestamp3/audishitxd/audishit2.m4a`),
			result2 = fs.readFileSync(`./fiestamp3/audishitxd/audishit3.m4a`),
			result3 = fs.readFileSync(`./fiestamp3/audishitxd/audishit4.m4a`),
			result4 = fs.readFileSync(`./fiestamp3/audishitxd/audishit5.m4a`),
			result5 = fs.readFileSync(`./fiestamp3/audishitxd/audishit6.m4a`)
			]
			nkc = rem[Math.floor(Math.random() * rem.length)]
            teslagod.sendMessage(from, nkc, MessageType.audio, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Top10 ${tagxd2}\n>𝙂𝙧𝙖𝙘𝙞𝙖𝙨 𝙥𝙤𝙧 𝙫𝙚𝙧<`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/top10bruh.jpeg')} } },mek, mimetype: 'audio/mp4', ptt:true})
					break
case 'testgay':
				    if (!isRegister) return reply(mess.only.RgOwO) 
if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isGroup) return reply(mess.only.group)
				reply(mess.analice)
				    try {
					const ab =['No eri gei 😎👌', '10%', '15%', '❗Limite de gay superado❗😳', '1%', '97%', '5%', '93%', '8%', '90%', '10%', '89%', '15%', '85%', '17%', '83%', '19%', '80%', '21%', '24%', '76%', '77%', '25%', '74%', '28%', '70%', '32%', '69%', '35%', '65%', '37%', '63%', '40%', '60%', '41%', '59%', '43%', '44%', '57%', '47%', '49%', '51%', '54%', '56%', '57%', '99.99%', '100%']
					const be = ab[Math.floor(Math.random() * ab.length)] 
					buffer = fs.readFileSync(`./recursos/multimediauwu/erigei.jpeg`)
					teslagod.sendMessage(from, buffer, image, { quoted: mek, caption:`*🏳‍🌈 | Test gay*\n${pushname} su porcentaje de gay es de `+be +` `}) 
					resultgei = fs.readFileSync(`./fiestamp3/audishitxd/audigeyxd.m4a`)
            teslagod.sendMessage(from, resultgei, MessageType.audio, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${pushname} es ${be} gay`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/erigei.jpeg')} } },mek, mimetype: 'audio/mp4', ptt:true})
					await limitAdd(sender)
					} catch {
  reply(mess.ferr)
}
					break
					case 'preguntame':
		if (!isRegister) return reply(mess.only.RgOwO) 
if (isBanned) return reply(mess.only.benned)
if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
if (!isGroup) return reply(mess.only.group)
		const pregunta =['¿Crees que las amistades son para siempre?', '¿Hasta qué punto llegarías por conseguir fama?', '¿Qué te frustra más no haber conseguido?', '¿Qué talento desearía tener?', '¿Cómo definirías tu tipo de sentido del humor?', '¿Qué tipo de personas son más atractivas para ti?', '¿Quién te ha influenciado más en esta vida?', '¿Con qué personaje de ficción te identificas más?', '¿Cuál ha sido tu mejor momento de tu vida?', '¿Qué es lo que echas más de menos de tu infancia?', '¿Quién es la persona más importante de tu vida?', '¿Qué tipo de música te gusta más?', 'Si te hicieras un tatuaje, ¿de qué se trataría?', '¿Qué es lo que más deseas en este mundo?', '¿Cuál es tu película favorita? ¿Por qué?', '¿Cuál es el recuerdo más vergonzoso de tu infancia?', '¿Qué comerías en tu última cena?', '¿Hay alguna prenda de ropa que no te pondrías nunca?', '¿Qué superpoder tendrías si pudieras elegir?', 'Si dominaras el mundo, ¿qué harías para cambiarlo?', '¿Tienes algún libro favorito? ¿Cuál es?', '¿Cuál sería tu trabajo soñado?', '¿Tienes algún secreto que no me hayas contado?', '¿Alguna vez te has descargado una app para ligar?', '¿Te has sentido atraído hacia una hermana (o hermano) de un amigo/a?', '¿Quieres más a tu perro (o gato) que a algún otro miembro de tu familia?', '¿Qué tipo de personas te asustan más?', '¿Qué es lo más extraño que has hecho por comer algo que te apetecía?', 'Si te gastaran una broma pesada, ¿cómo te vengarías?', '¿Cómo sería un día perfecto para ti?', 'Si pudieses saber sólo una cosa del futuro, ¿qué preguntarías?', 'Si fueras un fantasma que habita una casa encantada, ¿Cómo atraerías a la gente dentro?', '¿Qué es lo que te pone más nervioso?', '¿Cuál es el momento en el que te has sentido más sexy a lo largo de tu vida?', '¿Qué harías si te diera un ataque de risa en una situación inapropiada o en lugar del que no puedes salir?', '¿Qué es lo más vergonzoso que te han atrapado haciendo?', '¿A quién querrías ver desnudo/a y a quién odiarías ver así?', 'Si te tuvieras que poner un nombre a ti mismo, ¿cuál sería?', '¿Qué animal te gustaría ser y por qué?', '¿Qué harías si ganaras la lotería?', 'Si pudieses intercambiar tu vida con alguien, ¿con quién sería?', '¿Cómo harías reír a alguien?', '¿Qué parte de tu cuerpo te gusta más y por qué?', '¿Qué es lo más loco que has hecho por amor?', 'Si pudieras encerrar a alguien de por vida, ¿a quién sería?', '¿Qué harías si un/a desconocido/a te besara en plena calle?', '¿Cuál ha sido el sueño más extraño que has tenido nunca?', '¿En qué época te hubiese gustado vivir?', '¿Qué superpoder querrías tener?', 'Si tuvieras diez segundos para un deseo, ¿qué pedirías?', '¿Sin cuál de los cinco sentidos podrías vivir?', 'Si pudieras cenar con cualquier personaje histórico, ¿a quién elegirías?', 'Si te dijesen que eres inmortal y que ninguno de tus actos va a ser castigado, ¿qué sería lo primero que harías?', 'Si fueses capaz de cambiar algo en el mundo... ¿qué cambiarías?', 'Si pudieras viajar en el tiempo, ¿viajarías al pasado o al futuro?', '¿Qué querías ser de adulto cuando eras niño?', 'Si fueras un producto, ¿cuál sería tu nombre?', '¿Por qué crees que te pusieron tu nombre?', '¿crees que es peligroso comer halgo que cayo al suelo?', 'Si los seres humanos crecemos a partir de aprender de nuestros errores, ¿por qué tenemos miedo a fallar?', '¿Qué es lo que haces por la noche cuando no puedes dormir?', '¿Cómo crees que vas a ser como pareja?', '¿Qué crees que es lo que te impide ser completamente feliz?', '¿Qué es lo que más miedo te da?', 'Si tuvieras suficiente dinero como para que no tener que trabajar nunca, ¿en qué te dedicarías en tu tiempo libre?', '¿Cómo cambiarías el mundo si pudieras?', 'Si pudieras convertirte en famoso, ¿qué te gustaría que fuera lo que te hiciera famoso?', 'Si pudieras viajar tres años atrás en el tiempo, ¿qué consejo te darías a ti mismo?', 'Piensa en la peor cosa que te haya ocurrido en toda tu vida. ¿Qué aprendiste sobre ello?', '¿Crees que el dinero ayuda a comprar la felicidad?', '¿Cómo le explicarías la palabra “amor” a alguien sin usar la palabra “amor”?', '¿Cómo describirías un día perfecto desde que te levantas hasta que te acuestas?', '¿Qué has aprendido en tu vida que consideras que te va a ser lo más útil?', 'Si pudieras vivir en cualquier lugar del mundo, ¿dónde sería?', 'Imagina que eres el presidente y necesitas escoger a tres personas para que te ayuden: ¿cuáles serían y por qué?', 'Si pudieras hacer un regalo a cada persona del mundo pero solo pudiera ser el mismo, ¿cuál sería?', 'Si pudieras tener un solo superpoder, ¿cuál sería?', '¿Preferirías ser el jefe o un empleado?', '¿Qué preferirías: 1.000.000 € hoy mismo o 1 céntimo duplicado cada día durante 30 días?', '¿Crees que los de tu generación son realmente diferentes a cómo son las otras generaciones?', '¿Cómo crees que se acabará el mundo?', '¿Hay algo de tu cuerpo con lo que no te sientas a gusto?', '¿Qué es lo que más te motiva?', '¿Cómo de masculino o femenino te sientes?', '¿Crees que los alienígenas existen?', '¿Qué series te gusta ver?', '¿Quién es tu profesor favorito y cuál es el que peor te cae?', '¿Quién me dirías que es tu mejor amigo?', '¿Cuál crees que es la cosa más vergonzosa que ha hecho tu padre o madre?', '¿Dónde te gustaría vivir?', '¿En qué lugar transcurrirían tus vacaciones perfectas?', '¿Me puedes describir tu dormitorio?', '¿A qué personaje histórico te gustaría entrevistar?', '¿Qué tipo de ropa no llevarías puesta en ningún caso?', '¿Cuáles son tus tres bandas de música favoritas?']
		const random = pregunta[Math.floor(Math.random() * (pregunta.length))]
  	
			   hasil = `⚡ *${pushname}* \n\n>>> _*${random}*_ <<< `
			   reply(hasil)
			   break
			case 'pregunta2':
		if (!isRegister) return reply(mess.only.RgOwO) 
if (isBanned) return reply(mess.only.benned)
if (!isAnime) return reply('Modo anime ta apagado >.<')
if (!isGroup) return reply(mess.only.group)
		const testaku =['sufriste bulling por ser otaku?', 'uwu?', 'sabes cantar algun opening?', 'te bañas?', 'eres social o antisocial?', 'imitas algun movimiento de un personaje anime?', 'algun anime que te que iso reir a mas no poder?', 'personaje mas kawaii que te guste?', 'te gustan las lolis?', 'conoces o viste algun cosplayer?', 'que es ser otaku para ti?', 'recomiendarias 5 animes, como cuales?', 'anime que no te gusta', 'anime que mas odias', 'poder que quisieras tener de un personaje anime', 'te gustaria vivir tu vida como en un anime? como cual?', 'personaje anime del cual estas enamod@?', 'si reencarnarias en un mundo anime cual seria?', 'sabes que significa onichan?', 'Has cantado alguna vez el opening de tu anime favorito?', 'genero que mas te gusta de anime?', 'haces dibujos o mangas?', 'openings que no dejas de escuchar', 'te gusta el h3nta1?', 'Sabes palabras en japonés?', 'Cada cuánto tiempo ves anime?', 'Vas o has ido a convenciones de anime y manga?', 'Qué animes ves o has visto recientemente?', 'Escuchas canciones/openings de tus series favoritas?', 'Cuántas series de anime as visto?', 'Te gustaría conocer a alguien que tengas las mismas cualidades que tu personaje de anime favorito?', 'Qué es ser otaku para ti?', 'Te iniciaste solo en esto o un amigo o familiar te inicio?', 'Cuál es el género que más te gusta?', 'anime con el cual lloraste?', 'nombre del autor de naruto?', 'nombre del autor de dragon ball?', 'lees algun manga? titulo?', 'estas atento a la salida de animes nuevos?', 'algun familiar sabe que eres otaku?', 'tus amigos saben que eres otaku?', 'tienes algun poster, almohada, juguete, decoraciones de un anime?', 'que te parecio el anime bocu no pico? si no lo viste te lo recomiendo!!!', 'te gusta el NTR?', 'viste un anime yaoi? name?','que haces si alguien habla mal de tu anime fav?', 'te regalan dinero para ver anime legal, seguirias viendolo de forma ilegal?', 'te gustaria vajar a japon? por que?', 'quien crees que sea mas fuerte goku o saitma?', 'que opinas de los animes clasicos|antiguos?', 'Como se llama el Hijo de Naruto según el manga?', 'primer anime que viste?', 'anime que viste y no te gusto?', 'animes que quieres ver y no has visto?', 'tu crush del anime?(waifu)(husbando)', 'pareja fovorita del anime k viste?', 'el mejor villano del anime?', 'mejor pelea del anime que viste?', 'escena mas triste que viste en un anime?', 'personaje del anime q es parecido a ti?', 'anime antiguo q para ti no pasa de moda?', 'mascotas|animales favoritos del anime?', 'anime q para ti tiene la mejor animación?', 'personaje(femenino) favorito segundario del anime?', 'personaje(femenino) principal favorito del anime?', 'personaje(masculino) principal favorito del anime?', 'personaje(masculino) favorito segundario del anime?', 'la escena mas épica del anime para ti?', 'personaje anime q te pone de nervios?', 'arma fovorita de un anime que viste?', 'la muerte mas trite del anime que viste?', 'la mejor pelea anime?', 'la escena mas genial del anime para t?', 'un anime q decearias q fuera real?', 'frase favorita de algun personaje del anime?', 'anime q decearias q nunca acabará?', 'name de tu anime favorito?']
		const brandom = testaku[Math.floor(Math.random() * (testaku.length))]
  	
			   hasil = `*${pushname}* \n\n▪︎ _*${brandom}*_ `
			   setTimeout( () => {
				reply(hasil)
				}, 500)
			   rama = [
			result = fs.readFileSync(`./misstksuwu/sticker/duda1.webp`),
			result1 = fs.readFileSync(`./misstksuwu/sticker/duda2.webp`),
			result2 = fs.readFileSync(`./misstksuwu/sticker/duda3.webp`),
			result3 = fs.readFileSync(`./misstksuwu/sticker/duda4.webp`),
			result4 = fs.readFileSync(`./misstksuwu/sticker/duda5.webp`),
			result5 = fs.readFileSync(`./misstksuwu/sticker/duda6.webp`),
			result6 = fs.readFileSync(`./misstksuwu/sticker/duda7.webp`),
			result7 = fs.readFileSync(`./misstksuwu/sticker/duda8.webp`),
			result8 = fs.readFileSync(`./misstksuwu/sticker/duda9.webp`),
			result9 = fs.readFileSync(`./misstksuwu/sticker/duda10.webp`),
			result10 = fs.readFileSync(`./misstksuwu/sticker/duda11.webp`),
			result11 = fs.readFileSync(`./misstksuwu/sticker/duda12.webp`),
			result12 = fs.readFileSync(`./misstksuwu/sticker/duda13.webp`),
			result13 = fs.readFileSync(`./misstksuwu/sticker/duda14.webp`),
			result14 = fs.readFileSync(`./misstksuwu/sticker/duda15.webp`)
			]
			dude = rama[Math.floor(Math.random() * rama.length)]
  			teslagod.sendMessage(from, dude, sticker, {
			quoted: cuestionuwu})
			   break
			   case 'frase':
				if (!isRegister) return reply(mess.only.RgOwO) 
if (isBanned) return reply(mess.only.benned)
if (!isDiversion) return reply('❌ *EL MODO FULL ESTA DESACTIVADO  (>﹏<)* ❌')
if (!isGroup) return reply(mess.only.group)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				quotes = body.slice(1)
				const quo =['Es mejor entender un poco que malinterpretar. ',' Casi todos los hombres son capaces de resistir la adversidad.  Sin embargo, si quieres probar el verdadero carácter de un hombre, dale poder. ',' Si la determinación de una persona es fuerte y firme, Dios se unirá a sus esfuerzos. ',' El sufrimiento es una lección. ',' La ciencia sin religión es cojo. ',' La vida es como una bicicleta, para mantener el equilibrio tenemos que seguir moviéndonos. ',' Las diferencias del pasado, presente y futuro no son más que obstinadas ilusiones. ',' Una mesa, una silla, un cuenco de fruta y un violín;  ¿Qué más se necesita para que una persona se sienta feliz? ',' Ten piedad de los demás, sé duro contigo mismo ',' La mejor manera de moverte es asignándote asignaciones ',' No debemos desanimarnos.  La pasión es el estimulante más fuerte para amar, para ser creativo y el deseo de vivir más tiempo. ',' El hombre será feliz mientras elija ser feliz. ',' No espero ser todo para todos.  Solo quiero ser algo para alguien. ',' Si el intelecto de alguien es perfecto, entonces dice un poco. ',' Feliz es un hombre que puede ser un maestro por sí mismo, un auriga por su pasión y un capitán del arca de su vida. mayor en precio que la propiedad heredada de los antepasados. ',' Lo más agotador en la vida es ser una persona insincera. ',' Abierto para ti, así es como Dios nos dio una manera de intentarlo.  Nunca pienses que el camino está cerrado. ',' La procrastinación es una tumba donde se entierran las oportunidades ',' El amor no es mirarnos a los ojos, sino mirar juntos en la misma dirección ',' Somos lo que hacemos repetidamente.  Por lo tanto, la brillantez no es un acto, sino un hábito. ',' Nunca intente hacer que su hijo o hija sea como usted.  Solo tienes una cosa. ',' Si puedes hacer reír a otras personas, obtendrás todo el amor que quieras ',' Los problemas llegarán tarde o temprano.  Si surge un problema, déle la bienvenida lo mejor posible.  Cuanto más amistoso lo saludes, antes se irá. ',' No podemos hacer nada para cambiar el pasado.  Pero hagamos lo que hagamos puede cambiar el futuro ',' La paciencia es amiga de la sabiduría ',' Las personas creativas están motivadas por el deseo de progresar, no por el deseo de vencer a los demás ',' Dondequiera que estés, sé siempre el mejor y dar lo mejor que podamos dar. ',' El odio es como el amor, ardiendo sobre las pequeñas cosas ',' No tienes que triunfar la primera vez ',' Una hora intensiva, mucho mejor y gratificante en lugar de años de soñar y reflexionar. ',' Lo mejor que puede hacer por alguien más no es compartir su riqueza, sino ayudarlo a tener su propia riqueza. ',' No hay garantía de éxito, pero no intentarlo es una garantía del fracaso. ',' No sé cuál es la clave del éxito, pero la clave del fracaso es tratar de hacer felices a todos.']
				const tes = quo[Math.floor(Math.random() * quo.length)]
				teslagod.sendMessage(from, ''+tes+'\n\n_By : ª._', text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "SIGLO XXI : LA HUMANIDAD ES PRUEBA DE QUE LA EVOLUCION PUEDE IR EN REVERSA", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/frases.jpg')} } }, mek })
				await limitAdd(sender)
				break
					case 'cronometro':
					setTimeout( () => {
					teslagod.sendMessage(from, 'Se acabo el tiempo', text) // ur cods
					}, 50000) // 1000 equivale = 1s,
					setTimeout( () => {
					teslagod.sendMessage(from, '1 segundos', text) // ur cods
					}, 45000) // 1000 equivale = 1s,
					setTimeout( () => {
					teslagod.sendMessage(from, '2 segundos', text) // ur cods
					}, 40000) // 1000 equivale = 1s,
					setTimeout( () => {
					teslagod.sendMessage(from, '3 segundos', text) // ur cods
					}, 35000) // 1000 equivale = 1s,
					setTimeout( () => {
					teslagod.sendMessage(from, '4 segundos', text) // ur cods
					}, 30000) // 1000 equivale = 1s,
					setTimeout( () => {
					teslagod.sendMessage(from, '5 segundos', text) // ur cods
					}, 25000) // 1000 equivale = 1s,
					setTimeout( () => {
					teslagod.sendMessage(from, '6 segundos', text) // ur cods
					}, 20000) // 1000 equivale = 1s,
					setTimeout( () => {
					teslagod.sendMessage(from, '7 segundos', text) // ur cods
					}, 15000) // 1000 equivale = 1s,
					setTimeout( () => {
					teslagod.sendMessage(from, '8 segundos', text) // ur cods
					}, 10000) // 1000 equivale = 1s,
					setTimeout( () => {
					teslagod.sendMessage(from, '9 segundos', text) // ur cods
					}, 5000) // 1000 equivale = 1s,
					setTimeout( () => {
					teslagod.sendMessage(from, '10 segundos', text) // ur cods
					}, 0) // 1000 equivale = 1s,
					break
					case 'miperfil':
    				teslagod.updatePresence(from, Presence.composing)
    								
					if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned)
    				try {
					profil = await teslagod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i.imgur.com/daGiF1x.jpg'
					}
					 profile = `╭─「 *_Perfil de usuario_* 」\n│• *Nombre:* ${pushname}\n│• *Usuario registrado:* √\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────`
					buff = await getBuffer(profil)
					teslagod.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					break
					case 'minivel':
                if (!isRegister) return reply(mess.only.RgOwO)
					if (!isLevelingOn) return reply(mess.levelnoton)
					if (!isGroup) return reply(mess.only.group)
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
					sem = sender.replace('@s.whatsapp.net','')
					resul = `┏━━━━❉ ℕ𝕚𝕧𝕖𝕝 ❉━━━━\n┣⊱ Nombre: ${pushname}\n┣⊱ XP conseguido asta el momento:  ${userXp}\n┣⊱ Su nivel actual es: ${userLevel}\n┣⊱ De acuerdo a tu nivel eres: ${role}\n┗━━━━━━━━━━━━━`
					teslagod.sendMessage(from, resul, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝙏𝙤𝙙𝙤 𝙚𝙨𝙛𝙪𝙚𝙧𝙯𝙤 𝙩𝙞𝙚𝙣𝙚 𝙧𝙚𝙘𝙤𝙢𝙥𝙚𝙣𝙨𝙖", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('recursos/multimediauwu/lvlup.jpg')} } }, mek})
					.catch(async (err) => {
                    console.error(err)
                    await reply(`Error!\n${err}`)
                    })
                    break
					case 'nk4':
					if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
					if (!isSimisimi) return reply('chat-bot ta apagado U.U')
					iamgod2 = body.slice(5)
					anu = await fetchJson(`https://api.zeks.xyz/api/simi?apikey=${apivinz}&text=${iamgod2}`, {method: 'get'})
                    args.shift()
                    ini_txt = anu.result
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/es?apikey=${lolhumankey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `${get_result.translated}\n`
					teslagod.sendMessage(from, init_txt, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'nk3':
					if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
					if (!isSimisimi) return reply('chat-bot ta apagado U.U')
					iamgoood = body.slice(5)
					anu = await fetchJson(`https://api.simsimi.net/v1/?text=${iamgoood}&lang=es`, {method: 'get'})
                    args.shift()
                    ini_txt = anu.success
                    init_txt = `${ini_txt}`
					teslagod.sendMessage(from, init_txt, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'nk2':
					if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
					if (!isSimisimi) return reply('chat-bot-random ta Re-apagado U.U')
					iamgod = body.slice(5)
					anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${iamgod}`, {method: 'get'})
                    args.shift()
                    ini_txt = anu.success
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/es?apikey=${lolhumankey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `${get_result.translated}\n`
					teslagod.sendMessage(from, init_txt, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'nk':
					if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
					if (!isSimisimi) return reply('chat-bot ta apagado U.U')
					iamgod = body.slice(4)
					anu = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=NikolaTesla&text=${iamgod}`, {method: 'get'})
                    args.shift()
                    ini_txt = anu.result
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/es?apikey=${lolhumankey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `${get_result.translated}\n`
					teslagod.sendMessage(from, init_txt, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'simisimi':
					if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
					if (!isSimisimi) return reply('chat-bot ta apagado U.U')
					iamgod = body.slice(4)
					anu = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=NikolaTesla&text=${iamgod}`, {method: 'get'})
                    args.shift()
                    ini_txtuwu = anu.result
                    init_txt = `${ini_txtuwu}\n`
					teslagod.sendMessage(from, init_txt, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'simi':
					if (isBanned) return reply(mess.only.benned)
					if (!isRegister) return reply(mess.only.RgOwO)
					if (!isSimisimi) return reply('chat-bot ta apagado U.U')
					if (args.length < 1) return reply('Este modo chatbot no tiene buenas respuestas y es algo lenta UnU')
					zteee = body.slice(4)
					
					resuestaxdd = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/en?apikey=${lolhumankey}&text=${zteee}`)
					args.shift()
					ananu = resuestaxdd.result
					ananau = ananu.translated
					
					anu = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=NikolaTesla&text=${ananau}`, {method: 'get'})
                    args.shift()
                    ini_txtt = anu.result
                    
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/es?apikey=${lolhumankey}&text=${ini_txtt}`)
                    get_result = get_result.result
                    init_txt = `${get_result.translated}\n`
					teslagod.sendMessage(from, init_txt, text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'cambiogit':
                    holaxxx = `c lo coge xd`
				     reply(holaxxx)
                       break
				
case 'prueba':
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'TeslaGod'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'UwU'}, type: 1}
]

const buttonMessage = {
    contentText: "Hola!!! :3",
    footerText: 'Otakus Tecnologicos',
    buttons: buttons,
    headerType: 1
}

const sendMsg1 = await teslagod.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
reply(sendMsg1)
break
				
				
				
				
				
				
				
					
				
					
					

				case 'afk':
				if (!isRegister) return reply(mess.only.RgOwO)
                                        tels = body.slice(5)
                                        if (args.length < 1) return reply('Causa o situacion?')                                  
                                        var nom = mek.participant
                                        const tag = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} _Estará afk, su motivo:_\n*${tels}* _no meloste por favor_`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        teslagod.sendMessage(from, tag, text, {quoted: mek})
                                        break
					
//conversores
				
		            case 'inframundo':
                    if (!isGroup) return reply(mess.only.group) 
if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned) 
if (!isQuotedAudio) return reply('Responda un audio :3')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration: 666})
						fs.unlinkSync(ran)
					    })
				       break
				case 'nightcore':
				case 'happyhardcore':
                if (!isGroup) return reply(mess.only.group) 
if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned) 
if (!isQuotedAudio) return reply('Responda un audio :3')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek, duration:9999999999})
						fs.unlinkSync(ran)
					   })
				       break
				       case 'ardilla':
	                 if (!isGroup) return reply(mess.only.group) 
if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned) 
if (!isQuotedAudio) return reply('Responda un audio :3')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration:9999999999})
						fs.unlinkSync(ran)
					    })
				       break
				       case 'superveloz':
	                 if (!isGroup) return reply(mess.only.group) 
if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned) 
if (!isQuotedAudio) return reply('Responda un audio :3')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration:9999999999})
						fs.unlinkSync(ran)
					    })
				        break
				        case 'demonio':
	                 if (!isGroup) return reply(mess.only.group) 
if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned) 
if (!isQuotedAudio) return reply('Responda un audio :3')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration:9999999999})
						fs.unlinkSync(ran)
					    })
				        break
				        case 'lento':
	                 if (!isGroup) return reply(mess.only.group) 
if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned) 
if (!isQuotedAudio) return reply('Responda un audio :3')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration:9999999999})
						fs.unlinkSync(ran)
					    })
				        break
				        case 'bruhbajo':
				        case 'distorcionado':
	                 if (!isGroup) return reply(mess.only.group) 
if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned) 
if (!isQuotedAudio) return reply('Responda un audio :3')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=44:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true,  quoted: mek, duration:9999999999})
						fs.unlinkSync(ran)
					   })
				       break
				        case 'aumentarbajo':
	                 if (!isGroup) return reply(mess.only.group) 
if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned) 
if (!isQuotedAudio) return reply('Responda un audio :3')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=34:width_type=o:width=2:g=26 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true,  quoted: mek, duration:9999999999})
						fs.unlinkSync(ran)
					   })
				       break
				       case 'grabacion':
	                 if (!isGroup) return reply(mess.only.group) 
if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned) 
if (!isQuotedAudio) return reply('Responda un audio :3')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Error al convertir en grabacion U.U')
						topt = fs.readFileSync(ran)
						teslagod.sendMessage(from, topt, audio, {mimetype: 'audio/mp4',  quoted: mek})
						})
						await limitAdd(sender)
					    break
					
					
					
					
					
					    case 'imagen':
assistant = fs.readFileSync('./recursos/multimediauwu/milogo.jpg')
if (!isRegister) return teslagod.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length < 1) return reply('Que deseas buscar?')
reply(`Porfavor espera un momento mientras busco imagenes de ` + args.join(' '))
ggimg = args.join(' ')
res = await imgugul(ggimg, google)
function google(error, result){
if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: sam, caption: `*🔍Busqueda de* _${ggimg}_\n*Realizada por 🐉Samu330🐉*`})
}
}
break
					case 'ssstik':
				   if (!isGroup) return reply(mess.only.group)
			if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned)
				var itsme = `0@s.whatsapp.net`
				var split = `${name}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(6)
				try {
				result = fs.readFileSync(`./miniserver/stick/${namastc}.webp`)
				teslagod.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
			  case 'gggetstik':
			if (!isGroup) return reply(mess.only.group)
				var itsme = `0@s.whatsapp.net`
				var split = `${mek}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./miniserver/stick/${namastc}.webp`)
				teslagod.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('Pack tidak terdaftar')
				}
				breaku
			case 'llliststik':
			   if (!isGroup) return reply(mess.only.group)
                        
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*\nGunakan perintah\n*${prefix}stik (nama)*\nuntuk mengambil stiker`
				teslagod.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
				break
				case 'aaaddimg':
				if (!isQuotedImage) return reply('Reply imagenya')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await teslagod.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./miniserver/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./miniserver/image.json', JSON.stringify(imagenye))
				teslagod.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
				break

			case 'iiimgkia':
			   if (!isGroup) return reply(mess.only.group)
					if (isPublic) return reply(mess.only.publikG)
			if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned)
                        
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./miniserver/foto/${namastc}.jpeg`)
				teslagod.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
			case 'lllistimg':
			   if (!isGroup) return reply(mess.only.group)
					if (isPublic) return reply(mess.only.publikG)
			if (!isRegister) return reply(mess.only.RgOwO)
if (isBanned) return reply(mess.only.benned)
                        
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*\nGunakan perintah\n*${prefix}imgkia (nomer)*\nuntuk mengambil gambar`
				teslagod.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
				break

			case 'aaaddvid':
			  if (!isOwner) return reply(mess.only.ownerB)
				if (!isQuotedVideo) return reply('Reply videonya')
				svst = body.slice(8)
				if (!svst) return reply('Nama videonya')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await teslagod.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./miniserver/video/${svst}.mp4`, delb)
				fs.writeFileSync('./miniserver/vid.json', JSON.stringify(videonye))
				teslagod.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvid`, MessageType.text, { quoted: mek })
				break
			case 'ccclip':
			if (!isGroup) return reply(mess.only.group)
			if (!isPrem) return reply(mess.only.premium)
				namastc = body.slice(6)
				try {
				buffer = fs.readFileSync(`./miniserver/video/${namastc}.mp4`)
				teslagod.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
			case 'lllistclip':
			if (!isGroup) return reply(mess.only.group)
				teks = '*List Video clip :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*\nGunakan perintah\n*${prefix}clip (nama clip)*\nuntuk mengambil video`
				teslagod.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
				break
				case 'aaaddstik':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await teslagod.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./miniserver/stick/${svst}.webp`, delb)
				fs.writeFileSync('./miniserver/stik.json', JSON.stringify(setiker))
				teslagod.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: mek })
				break
				case 'aaaddvn':
				if (!isQuotedAudio) return reply('Reply vnnya')
				if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)    
				svst = body.slice(8)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await teslagod.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./miniserver/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./miniserver/vn.json', JSON.stringify(audionye))
				teslagod.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
				break
				case 'vvvn':
				if (!isGroup) return reply(mess.only.group)
				namastc = body.slice(4)
				try {
				buffer = fs.readFileSync(`./miniserver/audio/${namastc}.mp3`)
				teslagod.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
			
				default:
				if (!isSimi) return
                  if (isGroup && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','aqua'), 'comando no registrado de:', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'white'))
		}
	})
}
starts()
    