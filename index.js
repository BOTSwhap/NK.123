/*
* Bacot
*/

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
} = require('@adiwajshing/baileys')

// Load Js File
const { color, bgcolor } = require('./lib/color')
const { menunsfw } = require('./src/menunsfw')
const { reglas } = require('./src/reglas')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { ind } = require('./language')

// Load Npm Package
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')
const cd = 4.32e+7
const crypto = require('crypto')
const qrcode = require("qrcode-terminal")
const axios = require('axios')

// Load Json File
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/json/uang.json'))
const _registered = JSON.parse(fs.readFileSync('./database/json/registered.json'))

/*let {
    botName,
    ownerName,
    BarBarKey,
} = ('./settings/setting')*/

// Load Menu File
const { ayuda } = require('./database/menu/ayuda')
const { help } = require('./database/menu/help')

// Load Vcard Contact
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Matt M\n' //NAMA LU
            + 'ORG:NeKosmic;\n' // NAMA CONTACT OWNER
            + 'TEL;type=CELL;type=VOICE;waid=51995386439:+51 995 386 439\n' // NOMER OWNER
            + 'END:VCARD'
prefix = '.'//PREFIX BOT
blocked = ['51995386439']//NOMER BLOCK
limitawal = '20'
cr = '*Otakus tecnologicos*'

// Functions
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
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
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
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }
        const getLimit = (sender) => {
                let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }

        const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/json/registered.json', JSON.stringify(_registered))
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

        const addATM = (sender) => {
                const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
        }

        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }

        const checkATMuser = (sender) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }

        const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }

        const confirmATM = (sender, amount) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
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
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Hora ${pad(minutes)} Minuto ${pad(seconds)} Segundo`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el codigo qr para comenzar prieto kun OwO'))
	})

	fs.existsSync('./Nekosmic.json') && client.loadAuthInfo('./Nekosmic.json')
	client.on('connecting', () => {
		start('2', 'Conectando... U.U')
	})
	client.on('open', () => {
		success('2', 'Conectado UwUr')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nekosmic.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/nfMn2Cz/Pics-Art-04-06-08-21-20.jpg'
				}
				teks = `Hola @${num.split('@')[0]}-Chan 😳🎉\nSe bienvenid@ a este grandioso grupo 🎖 \n꧁⚡${mdata.subject}⚡꧂ \n\n✓Por fabor lea las reglas que se encuentran en la descripcion 📑\n\n\nEspero y te agrade el grupo :3`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/nfMn2Cz/Pics-Art-04-06-08-21-20.jpg'
				}
				teks = `Se fue alv @${num.split('@')[0]}, 👌`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
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
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Lima').format('DD/MM HH:mm:ss')
                        const timi = moment.tz('America/Lima').add(30, 'days').calendar();
                        const timu = moment.tz('America/Lima').add(20, 'days').calendar();
			const date = moment.tz('America/Lima').format('DD,MM,YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1) 
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isCmd = body.startsWith(prefix)
                        const tescuk = ["0@s.whatsapp.net"]
                        const q = args.join(' ')

			mess = {
				wait: '⏳Procesando,por favor espere UwU⏳',
				wait2: 'Cargando... por favor espere marrano kun, Este proceso puede tomar cierto tiempo u.u🕰',
				success: '[ ✔ ]Completado :D',
				analice: 'Analizando u.u 🔬',
				convert: 'Convirtiendo, por favor espere, este proceso puede tomar cierto tiempo TvT ⚙',
				proces:'🔍Escaneando texto... Espere O.O 🔎',
                                levelon: '[✔ ]*Nivel activado €-€*',
				leveloff: '[ ❌ ]*Nivel fue desactivado €_€*',
				levelnoton: '[ ❗ ]*Nivel desactivado U.U*',
				levelnol: '*NIVEL MUY BAJO* 0 *-*',
				error: {
					stick: '[❌ ] Lo siento, no se pudo convertir imagen a sticker :c',
					Iv: '[ ❌ ]Link inválido.'
				},
				only: {
					group: '[❗] Este comando solo se puede usar en grupos!',
					ownerG: '[❗] Este comando solo lo puede usar el creador del grupo!',
					ownerB: '[❗] Comando especial, solo para el creador del bot!',
					admin: '[❗] Este comando solo puede ser usado por los administradores del grupo!',
					Badmin: '[❗] ⚡ El bot deve ser ascendido a admin! ⚡',
                                        daftarB: `[ ❗ *Registrese primero para comenzar X-X*❗]\nBuen dia, tarde, noche :D\n✖Usted no esta registrado en mi banco de datos U.U!✖ \nPara comenzar el registro use el siguiente comando\n\nComando : ${prefix}rg Nombre|Edad\nEjemplo : ${prefix}rg Matt|20\n\nBot NeKosmic te lo agradese🤖\n\nUse el comando *.help* para comenzar`,
				}
			}
    			const vof = ['Confirmo','ConfirmoNot','Verdadero','Falso','Desconfirmo','Si cierto','No lo c tu dime']
        		const podre = ['Si','No','Puede ser','Quisa','Deverias!', 'Si', 'Tu crees?', 'No deverias ;-;', 'No lo haga compa', 'Si te lo propones aslo solo aslo', 'En tus sueños', 'Pregunta nuevamente UwU', 'No', 'Ni lo pienses', 'Es tu decisión', 'Tal vez', 'Enserio?', 'Voy a ignorar eso', 'Ok', 'No lo pienses', '🤐', 'a', 'quede lol']
		        const cuando = ['Algun dia', 'De aqui 100 años', 'Puede ser hoy', 'Puede ser mañana', 'Ahora', 'Voy por unos cigarros', 'Al proximo mes', 'En nueve meses', 'El dia de tu cumpleaños', 'Nunca', 'El dia nunca', 'Cuando los cerdos vuelen', 'Pregunta nuevamente UwU', 'En 3 segundos', 'No soy cronos para saber eso', 'El dia que nos extingamos', 'Ni idea', 'Cuando este universo se termine', 'Solo se que no se nada', 'La respuesta esta en ti', 'Cuando dejes de existir', 'Eso lo decide el destino', '365 dias y contando', 'No se', 'Mucho texto', 'F', 'En tu cuarto', 'El fin de semana', 'En google encontraras tu respuesta u.u', 'Cuando llegemos a la utopia', 'Proximos dias', 'Pronto', '🤐', 'a']
			const botNumber = client.user.jid
			const ownerNumber = ["51995386439@s.whatsapp.net"] // Nomer Owner
			const nomorOwner = [ownerNumber]
			const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false 
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '51995386439@s.whatsapp.net'//Nomer Owner
                        const isEventon = isGroup ? event.includes(from) : false
                        const isRegister = checkRegisteredUser(sender)
                        pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined

                        // Options
                        const botName = 'NeKosmic'//Nama Bot
                        const ownerName = 'Matt M'//Nama Owner
                        const BarBarKey = 'YOUR_APIKEY'
                        const vKey = 'Vhtearkey'
                        const viKey = 'Vinzapi'
                        const meKey = 'Itsmeikyapi'
                        const lolKey = 'LolHumanKey'

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
                        const sendImage = (teks) => {
		                client.sendMessage(from, teks, image, {quoted:mek})
		        }
		        const costum = (pesan, tipe, target, target2) => {
			        client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		        const sendPtt = (teks) => {
		                client.sendMessage(from, audio, mp3, {quoted:mek})
		        }

	        //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 ⚡ASCENDIO DE NIVEL⚡ 」*\n\n➸ *Nombre*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Nivel*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nFELICITACIONES CRACK UwU!! 🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }
            //function check limit
          const checkLimit = (sender) => {
                let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Su límite de solicitudes ha terminado 😔👍\n\n📌Psdt : el límite se restablece cada 21h!📌`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
                                }

                        //funtion limited
           const isLimit = (sender) =>{
                      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitawal ) {
                  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
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
                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
           return false
       }
     }



            //function balance
            if (isRegister && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        } 
        if (messagesC.includes("://chat.whatsapp.com/")){



		if (!isGroup) return

		if (!isAntiLink) return
		if (isGroupAdmins) return reply('Eso esta prohibido crack ._.👍Adiu >:3🚮')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Desterrado del grupo, motivo = Incumplir una regla*  ❗enviar link de otro grupo❗`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
	}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Mensage'), 'del numero', color(sender.split('@')[0]), 'en el grupo', color(groupName), 'args :', color(args.length))
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'TESLARK'; if (!author) author = 'NeKosmic';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
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

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
                     // Load Commands
			switch(command) {
                                case 'ayuda':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			                const uangku = checkATMuser(sender)
                                        await costum(ayuda(pushname, prefix, botName, ownerName, reqXp, uangku), text, tescuk, cr)
                                        break
                                        case 'help':
                                        case 'menu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(help(prefix, sender), text, tescuk, cr)
                                     break   
                case 'menunsfw':
		client.sendMessage(from, menunsfw(prefix, sender), text, {quoted: mek})
                break
                case 'reglas':
		client.sendMessage(from, reglas(prefix, sender), text, {quoted: mek})
                break
				case 'quitarpoder':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Elija a usuario que desee quitar el poder')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'quitaron admin a un usuario 😭👌\nF\n'
						for (let _ of mentioned) {
							teks += `Degradacion de poder fue ejecutada por el administrador  :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`💉Se le quito el poder a @${mentioned[0].split('@')[0]}\n\nfue bueno mientras duro 😭👌 *${groupMetadata.subject}*_`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
                                        case 'loliuwu':
if (!args.length < 1) return reply(mess.only.daftarB)

client.updatePresence(from, Presence.composing)
uk = ["anime loli",
"loli uwu",
"loli cute"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {
  quoted: mek, caption: `Toma tu loli 
7v7👌`
})

} catch {
  reply(mess.ferr)
}
                    break
                    case 'fondo':
					case 'wallpaper':
					case 'wp':
if (!args.length < 1) return reply(mess.only.daftarB)

client.updatePresence(from, Presence.composing)
pw = ["wallpaper aestethic",
"wallpaper tumblr",
"wallpaper lucu",
"wallpaper",
"wallpaper univers"]
  nk = pw[Math.floor(Math.random() * pw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {
  quoted: mek, caption: `Aqui tienes un fondo de pantalla random
 📲
Psdt: no siempre recives lo que quieres u.u`
})

} catch {
  reply(mess.ferr)
}
                    break
                  case 'ascender':
					client.updatePresence(from, Presence.composing) 
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Elija al usuario que desea ascender!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '⚡Un usuario fue ascendido a admin⚡ 🛐\nAhora tiene el poder 😈👌 :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`⚡Se le ascendio a admin a : @${mentioned[0].split('@')[0]}🛐Ahora tiene el poder en el grupo!👌`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				  case 'miwasa':
				  case 'wame':
  client.updatePresence(from, Presence.composing) 
      options = {
          text: ` ⚡ *LINK DIRECTO DE TU NUMERO* ⚡\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSu link de whatsapp es : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O puede usar este otro ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}* UwU`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: mek } )
				break
				if (data.error) return reply(data.error)
				reply(data.result)
				break
              case 'creador':
                case 'owner':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
               client.sendMessage(from, 'Aqui esta el numero de mi creador por si necesitas ayuda >\\<',MessageType.text, { quoted: mek} )
                break
                              case 'vacio':
            if (!isRegister) return reply(mess.only.daftarB)
                if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
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
					client.sendMessage(from, options, text)
				  break
                   case 'mapa':
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                   if (!isRegister) return reply(mess.only.daftarB)
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                   hasil = await getBuffer(data.gambar)
                   client.sendMessage(from, hasil, image, {quoted: mek, caption: `mapa de *${body.slice(5)}*`})
                   await limitAdd(sender)
                   break
				case 'infomp3':
				if (args.length < 1) return reply('Por favor usa un link de youtube?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytkli = `*Titulo* : ${anu.title}\n*Tamaño* : ${anu.filesize}`
					thumbgg = await getBuffer(anu.thumb)
					client.sendMessage(from, thumbgg, image, {quoted: mek, caption: ytkli})
					bufferhaje = await getBuffer(anu.result)
					client.sendMessage(from, bufferhaje, audio, {mimetype: 'audio/mp3', filename: `${anu.title}.mp3`, quoted: mek})
					await limitAdd(sender)
					break
				case 'infomp4':
				if (args.length < 1) return reply('Por favor usa un link de youtube?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Titulo de video* : ${anu.title}\n*Tamaño de archivo* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
					break
				case 'viraltuit':
					client.updatePresence(from, Presence.composing) 
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					teks = ' *Lista de los tweets mas virales UwU* \n'
					for (let i of data.result) {
						teks += ` #️⃣ *Hastag* : ${i.hastag}\n ⛓ *link* : ${i.link}\n*puesto* : ${i.rank}\n*Tweet* : ${i.tweet}\n┿┿┿┿┿┿┿┿┿┿┿┿┿┿┿┿┿\n`
					}
					reply(teks.trim())
                                        await limitAdd(sender)
					break
				case 'cronometro':
					setTimeout( () => {
					client.sendMessage(from, 'Se acabo el tiempo', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '5 segundos', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '10 segundos', text) // ur cods
					}, 0) // 1000 = 1s,
					break
                /*case 'wanted':                    
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranpkk = getRandom('.png')
                                        ranokk = getRandom('.webp')
                                        anu1kk = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
                                         exec(`wget ${anu1kk} -O ${ranpkk} && ffmpeg -i ${ranpkk} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranokk}`, (err) => {
                                                fs.unlinkSync(ranpkk)
                                                if (err) return reply(mess.error.stick)
                                                nobgkk = fs.readFileSync(ranokk)
                                                client.sendMessage(from, nobgkk, sticker, {quoted: mek})
                                                fs.unlinkSync(ranokk)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break*/
				case 'blocklist':
					teks = 'Esta é a lista de números bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'neonime':
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					teks = ' 📌 *Esta es la lista de animes nuevos* 📌 \n'
					for (let i of data.result) {
						teks += `🏷 *Titulo* : ${i.judul}\n ⛓ *link(idioma indonesio)* : ${i.link}\n 🗓 *fecha de lanzamiento* : ${i.rilis}\n.෴.෴.෴.෴.෴.෴.෴.෴.෴.෴.෴.෴. \n ‼ Ojo: los link y videos estan en idioma indonesio \nConsejo: anotar el name del anime y buscar en su pagina web favorita :D ‼ \n`
					}
					reply(teks.trim())
                                        await limitAdd(sender)
					break
				case 'vos':
					if (!isRegister) return client.sendMessage(from, 'Codigo del texto en el que desea escuchar el audio🧐?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Onde esta el texto :v???', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('maximo de caracteres 600 u.u')
					: gtts.save(ranm, dtt, function() {
						client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
				case 'administradores':
				case 'invocaadmin':
				case 'admins':
					client.updatePresence(from, Presence.composing) 
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					teks = `Aqui la lista de los grandiosos admins del grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += ` 🛡 [${no.toString()}] ⚡ @${admon.split('@')[0]} ⚡ \n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'pokemon':
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
                                        await limitAdd(sender)
					break
                /*case 'pinterest':
                                        tels = body.slice(11)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${tels}`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*\n\*Resultado de tu pedido* : *${tels}*`})
                                        await limitAdd(sender)
					break*/
					case 'porno':
					case 'xxx':
					case 'hentai':
					case 'puta':
  if (!args.length<1) return reply(mess.only.daftarB)
  
  if (args.length < 2) return client.sendMessage(from, 'Asi te queria agarrar marrano . _.\nTu numero sera guardado con mucho cariño en esta pagina :3 \nhttps://www.fbi.gov/ ', text, {
quoted: mek
  })
  
  break
				case 'loli':
if (!args.length < 1) return reply(mess.only.daftarB)

client.updatePresence(from, Presence.composing)
uk = ["jesus rostro",
"onu logo",
"fbi"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait2)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {
  quoted: mek, caption: `A prro asi te queria atrapar 😤`
})

} catch {
  reply(mess.error)
}
                    break
                    case 'ninja':
  if (!isRegister) return reply('Envie el comando con tu nombre')
client.updatePresence(from, Presence.composing)
if (!args.length) return reply(mess.only.daftarB)

teks = body.slice(7) 
try {
data = await fetchJson(`https://api.terhambar.com/ninja?nama=${teks}`)
hasil = `*Este es tu nombre ninja*\n😈👌\n*${data.result.ninja}*☯️`
reply(hasil)

} catch {
  reply(mess.error)
}
break
case 'neko':
if (!isRegister) return reply(mess.only.daftarB)

client.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {
  quoted: mek, caption: `Aqui tiene a su neko kawaii
Prieto-Kun UwU`
})

} catch {
  reply(mess.ferr)
}
                    break
                    case 'animeme':
if (!isRegister) return reply(mess.only.daftarB)

client.updatePresence(from, Presence.composing)
uk = ["memes anime español",
"anime shitpost español",
"shitpost español otaku"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {
  quoted: mek, caption: `un memingo para ti UwU`
})

} catch {
  reply(mess.ferr)
}
                    break 
                case 'testgay':
				    if (!isRegister) return reply(mess.only.daftarB)  
				    if (!isGroup) return reply(mess.only.group)
				reply(mess.analice)
				
					const ab =['No eri gei 😎👌', '10%', '15%', '❗Limite de gay superado❗😳', '1%', '97%', '5%', '93%', '8%', '90%', '10%', '89%', '15%', '85%', '17%', '83%', '19%', '80%', '21%', '24%', '76%', '77%', '25%', '74%', '28%', '70%', '32%', '69%', '35%', '65%', '37%', '63%', '40%', '60%', '41%', '59%', '43%', '44%', '57%', '47%', '49%', '51%', '54%', '56%', '57%', '99.99%', '100%']
					const be = ab[Math.floor(Math.random() * ab.length)] 
					buffer = await getBuffer(`https://i.ibb.co/PNq0dQ1/images-61.jpg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:`*🏳‍🌈 | Test gay*\n${pushname} su porcentaje de gay es de `+be +` `}) 
					break
				case 'xd':
if (!isRegister) return reply(mess.only.daftarB)

client.updatePresence(from, Presence.composing)
uk = ["shitpost español",
"shitpost amor",
"shitpost xd",
"shitpost español para responder"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {
  quoted: mek, caption: `C rie ._.XD`
})

} catch {
  reply(mess.ferr)
}
                    break
				case 'block':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `bloqueando ${body.slice(8)}@c.us`, text)
					break
				case 'invocar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '》*Invocando a los dioses de este grupo*《📡\n'
					for (let mem of groupMembers) {
						teks += `╔═════ஜ۩۞۩ஜ═════╗\n*⚡* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'tagnumeros':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                                case 'numerolink':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += 'Link directos generados de todos los miembros :3\n'
					for (let mem of groupMembers) {
						teks += `︻┳═一 https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'niuperfilbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Felicidades el bot tiene nuevo perfil UwU')
					break
				case 'bc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: ` 🛰 \n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, ` 🛰 \n\n${body.slice(4)}`)
						}
						reply('⚡Mensaje simultaneo compartido con exito :D⚡')
					}
					break
					case 'bcmiembros':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							client.sendMessage(_.jid, buff, image, {caption: `* BC GROUP *\n*Grupo* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `* BC GROUP *\n*Grupo* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Se compartio el mensaje con exito✔')
					}
					break
                    /*case 'quotemaker':
                    ghlkj = body.slice(12)
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    teks12 = ghlkj.split("|")[0];
                    teks22 = ghlkj.split("|")[1];
                    teks32 = ghlkj.split("|")[2]
                    data2 = await fetchJson(`https://terhambar.com/aw/qts/?kata=${teks12}&author=${teks22}&tipe=${teks32}`)
                    bufferkali = await getBuffer(data2.result)
                    client.sendMessage(from, bufferkali, image, {quoted: mek, caption: 'neh...'})
                    await limitAdd(sender)
                    break*/

				case 'letra':
  if (args.length < 1) return reply('Envie el comando con el nombre de la musica y autor 🎤')
  if (!isRegister) return reply(mess.only.daftarB)
  
  client.updatePresence(from, Presence.composing)
  tels = body.slice(7)
  try {
  data = await fetchJson(`http://scrap.terhambar.com/lirik?word=${tels}`, {
method: 'get'
  })
  reply(data.result.lirik)
  
  } catch {
    reply(mess.error)
  }
  break
                    case 'lidergp':
				  case 'grupocreador':
               client.updatePresence(from, Presence.composing) 
              options = {
          text: `Creador y propietario del grupo es : @${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
				break
           case 'nekoh':
           data = await fetchJson('https://waifu.pics/api/nsfw/neko')
           if (!isNsfw) return reply('❌ *NSFW DESACTIVADO* ❌')
           if (!isRegister) return reply(mess.only.daftarB)
           if (isLimit(sender)) return reply(ind.limitend(pusname))
           hasil = await getBuffer(data.url)
           client.sendMessage(from, hasil, image, {quoted: mek})
           await limitAdd(sender)
           break
                      case 'waifuh':
           data = await fetchJson('https://waifu.pics/api/nsfw/waifu')
           if (!isNsfw) return reply('❌ *NSFW DESACTIVADO* ❌')
           if (!isRegister) return reply(mess.only.daftarB)
           if (isLimit(sender)) return reply(ind.limitend(pusname))
           reply(mess.wait)
           hasil = await getBuffer(data.url)
           client.sendMessage(from, hasil, image, {quoted: mek})
           await limitAdd(sender)
           break
				/*case 'add':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Quem voce quer adicionar?')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break*/

				case 'ban':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta al participante que quiere eliminar 🗡')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'F por ti 😔👍 :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`F por ti 😔👍 : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					client.sendMessage(mentioned, 'alv :v', text)
					}
					break
				/*case 'exe':
	              client.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply(mess.only.ownerB)
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return client.sendMessage(from, "Comando errado", text, { quoted: mek })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break*/
                 case 'linkgp':
				case 'grupolink':
				case 'linkgc':
				    client.updatePresence(from, Presence.composing) 
				    if (!isGroup) return reply(mess.only.group)
                                     if (!isRegister) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await client.groupInviteCode (from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink del  grupo *${groupName}*`
					client.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
					break
                /*case 'qrcode':
                if (!isRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				client.sendMessage(from, buff, image, {quoted: mek})
                                await limitAdd(sender)
				break*/
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.proces)
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
						reply('Por favor use una imagen con texto para escanear :)')
					}
					break

                      case 'problemabot':
                     const bug = body.slice(5)
                      if (args.length > 300) return client.sendMessage(from, 'Disculpe, el texto es muy largo puede enviar un reporte resumido :D', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       teks1 = `*[BugReportado]*\nNumero : @${nomor.split("@s.whatsapp.net")[0]}\nMensaje : ${pesan}`
                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage(NomerOwner, options, text, {quoted: mek})
                    reply('Se han informado problemas al propietario del BOT, los informes falsos no serán respondidos')
                    break
               case 'vof':
               client.updatePresence(from, Presence.composing) 

               random = vof[Math.floor(Math.random() * (vof.length))]
  	
			   hasil = `Pregunta : *${body.slice(1)}*\n\nRespuesta : *${random}*`
			   reply(hasil)
			   break
              case 'podre':
                client.updatePresence(from, Presence.composing) 
              if (!isRegister) return reply(mess.only.daftarB)
                random = podre[Math.floor(Math.random() * (podre.length))]
  	
			   hasil = `Pregunta : *${body.slice(1)}*\n\nRespuesta : *${random}*`
			   reply(hasil)
			   break
                /*case 'lgbt':
              client.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `O quanto você é lgbt?🌈\n\nVocê é: *${random}%* lgbt🌈`
              reply(hasil)
                break
                case 'gay2':
              client.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `porcdntaje de gay?\n\nPorcentaje gay: *${random}%* 😳🏳️‍🌈`
              reply(hasil)
                break*/
	    case 'cuando':
               client.updatePresence(from, Presence.composing) 
                if (!isRegister) return reply(mess.only.daftarB)
               random = cuando[Math.floor(Math.random() * (cuando.length))]
               random2 = `${Math.floor(Math.random() * 8)}`
               hasil = `Pregunta : *${body.slice(1)}*\n\nRespuesta : *${random2} ${random}*`
              reply(hasil)
                break
			case 'cerrargp':
			case 'closechat':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Chat cerrado por el admin @${nomor.split("@s.whatsapp.net")[0]}\nAhora *solo administradores* pueden enviar mensajes`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
                case 'abrirgp':
                case 'openchat':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo abierto por el administrador  @${sender.split("@")[0]} 7v7👍 \nAhora *todos los participantes* pueden enviar sus mensajes 😎👌`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					client.sendMessage(from, open, text, {quoted: mek})
					break
				case 'stiker':
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('NeKosmic', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
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
								reply(`❌ Error, no se pudo convertir ${tipe} a stiker UnU`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('NeKosmic', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falló, se produjo un error, inténtelo de nuevo más tarde T.T')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('NeKosmic', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					} else {
						reply(`Envie una imagen usando el texto ${prefix}sticker ⚡`)
					}
						break

				case 'aimagen':
				case 'aimg':
				    client.updatePresence(from, Presence.composing)
                                    if (!isRegister) return reply(mess.only.daftarB)
					if (!isQuotedSticker) return reply('❗Responda o use un sticker >.<❗')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No c puede convertir stickergif a imagen lo ciento 😔🤙❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui tiene :3'})
						fs.unlinkSync(ran)
					})
					break
                	case 'amp3':
                	client.updatePresence(from, Presence.composing) 
                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isQuotedVideo) return reply('❗Responda o use un video❗')
					reply(mess.convert)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❗ Error al convertir vídeo a mp3 T.T ❗')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break

                                case 'wlc':
					if (!isGroup) return reply(mess.only.group)
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ki asi bro ._.?')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Comando Activo UwUr')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('Se activó con éxito la función de bienvenida en este grupo 😳👌 ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('Se desactivo con éxito la función de bienvenida en este grupo 😎👌✔️')
					} else {
						reply('digite 1 para activar, digite 0 para desactivar')
					}
                                        break
                                case 'antilinkgroup':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para activar ')
					if (Number(args[0]) === 1) {
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Anti-link activado con exito en el grupo UwU ✔️')
					} else if (Number(args[0]) === 0) {
						if (!antilink) return reply('Anti-link fue desactivado ')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Se desativó anti-link en el grupo UnU✔️')
					} else {
						reply('1 para activar, 0 para desactivar ')
					}
					                    break
                                 case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Digite 1 para activar')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Ya se activo')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('se activo modo nsfw en este grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('De desactivo el modo nsfw en el grupo')
					} else {
						reply('digite 1 para activar ó, 0 para desactivar nsfw')
					}
					break
                                case 'apagar':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroupAdmins)return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                /*case 'truth':
					const trut =['Pernah']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break*/
                case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                if (!isGroup) return reply(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `📊 *LEVEL*\n=> *Numero* : ${sem}\n=> *XP de usuario* : ${userXp}\n=> *Nivel de usuario* : ${userLevel}`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
				case 'calumnia':
				if (args.length < 1) return reply(`Usa :\n${prefix}calumnia [@tag|mensaje|respuesta]]\n\nEjemplo : \n${prefix}calumnia @tagmember|bendiceme|bendecido`)
				var fitn = body.slice(7)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace3 = fitn.split("|")[0];
					var target3 = fitn.split("|")[1];
					var bot3 = fitn.split("|")[2];
					client.sendMessage(from, `${bot3}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target3}` }}})
					break
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Digite 1 para activar')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*la funcion ya estuvo activa :D*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === '0') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(' *Digite comando 1 para activar, 0 para desactivar*')
                }
            break
                                case 'pingbot':    
			   	        if (!isRegister) return reply(mess.only.userB)
                                        const timestamp = speed();
                                        const latensi = speed() - timestamp
                                        client.updatePresence(from, Presence.composing) 
				        uptime = process.uptime()
                                        client.sendMessage(from, `Velocidade: *${latensi.toFixed(4)} MS*\nCelular: *Xiaomi*\nRAM: *1.5/2*\nRed: *3G*`, text, { quoted: mek})
                                        break
                               /* case 'report':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('Que paso UnU?')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        var nom = mek.participant
                                        const tag = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *Te reporto por mal comportamiento ${tels} Por favor comportese bien :D*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        client.sendMessage(from, tag, text, {quoted: mek})
                                        break*/
                                case 'clearall':
					if (!isOwner) return reply('kien eri vos._.?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Todos los chats del bot fueron eliminados con exito UwU')
					break
				/*case 'simi':
					if (args.length < 1) return reply('Cade o texto?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break*/
				/*case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('digite 1 para ativar o recurso')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desativando o modo simi com sucesso neste grupo')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break*/
				case 'fotobot':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('etiqueta al numero del cual quiere que el bot use su foto de perfil')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('etiqueta un numero')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto de perfil bot actualizada correctamente usando la foto de @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Algo salio mal lo siento T.T')
					}
					break
                                case 'bal':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        const kantong = checkATMuser(sender)
                                        reply(ind.uangkau(pushname, sender, kantong))
                                        break
                                case 'buylimite':
                                        if (args.length < 1) return reply('¿Cuál es el límite que quieres comprar? ¡Asegúrate de tener suficiente dinero, crack! \n\nComo ver la cantidad de dinero que tuene use este comando: ${prefix}bal')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        payout = body.slice(10)
                                        const koinPerlimit = 3500
                                        const total = koinPerlimit * payout
                                        if ( checkATMuser(sender) <= total) return reply(`Disculpe, su dinero es insuficiente. por favor vuelva mas tarde u.u`)
                                        if ( checkATMuser(sender) >= total ) {
                                                confirmATM(sender, total)
                                                bayarLimit(sender, payout)
                                                await reply(`*TRANSACCION COMPLETA*\n\n*remitente* : Admin\n*receptor* : ${pushname}\n*compra nominal* : ${payout} \n *limite de precio* : ${koinPerlimit}/limit\n *el resto de tu dinero* : ${checkATMuser(sender)}\n\nProceso exitoso con número de pago \n${createSerial(15)}`)
                                        }
                                        break
                                case 'limite':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        checkLimit(sender)
                                        break
                                case 'evento':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isOwner) return reply(mess.only.ownerB)
                                        if (args.length < 1) return reply('digite 1 para activar')
                                        if (Number(args[0]) === 1) {
                                                if (isEventon) return reply('*ACTIVADO* !!!')
                                                event.push(from)
                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
                                                reply('*Evento activado el el grupo!*')
                                        } else if (Number(args[0]) === 0) {
                                                event.splice(from, 1)
                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
                                                reply('*Evento desactivado en el grupo!*')
                                        } else {
                                                reply(ind.satukos())
                                        }
                                        break
                                case 'rg':
                                        if (isRegister) return  reply(mess.only.daftarB)
                                        if (!q.includes('|')) return  reply(ind.wrongf())
                                        const namaUser = q.substring(0, q.indexOf('|') - 0)
                                        const umurUser = q.substring(q.lastIndexOf('|') + 1)
                                        const serialUser = createSerial(20)
                                        veri = sender
                                        if (isGroup) {
                                                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                                                await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                                        } else {
                                                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                                                await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                                        }
                                        break
                                case 'mineria':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        if (!isEventon) return reply(`Disculpe, ${pushname} el evento de mineria esta desactivado u.u`)
                                        if (isOwner) {
                                                const one = 999999999
                                                addLevelingXp(sender, one)
                                                addLevelingLevel(sender, 99)
                                                reply(`Para ti *${one}Xp* de regalo UwU`)
                                        } else {
                                                const mining = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(sender, mining)
                                                await reply(`*Felicidades! crack* ${pushname} Acabas de recibir *${mining} de Xp*`)
                                        }
                                        await limitAdd(sender)
                                        break
                                 case 'namegp':
                                        if (!isGroup) return reply(ind.groupo())
			                if (!isGroupAdmins) return reply(ind.admin())
			                if (!isBotGroupAdmins) return reply(ind.badmin())
                                        client.groupUpdateSubject(from, `${body.slice(9)}`)
                                        client.sendMessage(from, 'Se cambio el nombre del grupo✏', text, {quoted: mek})
				        break
                                case 'descgp':
                                        if (!isGroup) return reply(ind.groupo())
			                if (!isGroupAdmins) return reply(ind.admin())
			         	if (!isBotGroupAdmins) return reply(ind.badmin())
                                        client.groupUpdateDescription(from, `${body.slice(9)}`)
                                        client.sendMessage(from, 'Se cambio la descripcion del grupo✏', text, {quoted: mek})
					break
			        case 'name?':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
         						client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
		      				})
					} else {
						reply('envie una foto anime del que quiera saber el nombre 🎬')
					}
					break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
