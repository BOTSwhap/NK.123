const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/vid.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
prefix = setting.prefix
blocked = []

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Por favor escanee el codigo qr UwUr'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'conectando... U.U')
	})
	client.on('open', () => {
		success('2', 'Conectado UwUr')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

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
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hola @${num.split('@')[0]}-Chan 😳\nSe bienbenid@ a este grandioso grupo *${mdata.subject}* 😎👌`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Fue bueno mientras duro adiu @${num.split('@')[0]}😔👍`
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
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey
vKey = setting.Vhtearkey
viKey = setting.Vinzapi
meKey = setting.Itsmeikyapi
lolKey = setting.LolHumanKey
BarBarKey = setting.BarBarKey
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Lima').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: '⌛ procesando, espere porfavor :3 ⏳',
				wait2: 'espere marrano-kun >:3 ',
				success: '✔️ completado :) ✔️',
				proces:'🔍Escaneando texto... Espere O.O 🔎',
				error: {
					stick: '❌ Lo siento, no se pudo convertir imagen a sticker :c ❌',
					Iv: '❌ Link invalido ❌'
				},
				only: {
					group: '❌ Este comando solo se puede usar en grupos! ❌',
					ownerG: '❌ Este comando solo lo puede usar el creador del grupo! ❌',
					ownerB: '❌ Comando especial, solo para el creador del bot! ❌',
					admin: '❌ Este comando solo puede ser usado por los administradores del grupo',
					Badmin: '⚡ El bot deve ser ascendido a admin! ⚡'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
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
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
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

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Mensaje'), 'del numero', color(sender.split('@')[0]), 'en el grupo', color(groupName), 'args :', color(args.length))
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
			switch(command) {
				case 'help':
				case 'menu':
					client.sendMessage(from, help(prefix), text)
					break
				case 'bloqueados':
					teks = 'Esta es la lista de numeros bloqueados 🚨:\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total de bloqueados ^-^🔪 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
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
						reply('Imagen con texto para escanear :)')
					}
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
				case 'gtts':
					if (args.length < 1) return client.sendMessage(from, 'Codigo del texto en el que desea escuchar el audio🧐?', text, {quoted: mek})
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
				case 'michi':
					data = fs.readFileSync('./otros/gato.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 buffer = await getBuffer(randKey.result)
				client.sendMessage(from, buffer, image, {caption: 'aqui está:)', quoted: mek})
                 break
					
					case 'pinte':
					tels = body.slice(11)
if (!args.length) return reply(mess.only.daftarB)

if (args.length < 1) return reply('*☒* Masukan query')
client.updatePresence(from, Presence.composing)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {
  quoted: mek, caption: `Berhasil mengambil gambar : *${tels}*`
})

} catch {
  reply(mess.ferr)
}
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
  quoted: mek, caption: `A prro la ley viene por ti 😤`
})

} catch {
  reply(mess.error)
}
                    break
                    case 'animeme':
if (!args.length < 1) return reply(mess.only.daftarB)

client.updatePresence(from, Presence.composing)
uk = ["memes anime",
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
                    case 'xd':
if (!args.length < 1) return reply(mess.only.daftarB)

client.updatePresence(from, Presence.composing)
uk = ["shitpost",
"shitposting",
"shitpost amor"]
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
					case 'neko':
if (!args.length < 1) return reply(mess.only.daftarB)

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
					case 'animerandom':
if (!args.length < 1) return reply(mess.only.daftarB)

client.updatePresence(from, Presence.composing)
am = ["anime tumblr",
  "wallpaper anime hd",
  "anime aestethic",
  "anime hd",
"anime cute",
"anime"]
nk = am[Math.floor(Math.random() * am.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {
  quoted: mek, caption: `random para todos 📸`
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
"wallpaper anime"]
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
					case 'comandos':
  if (!args.length<1) return reply(mess.only.daftarB)
  
  if (args.length < 2) return client.sendMessage(from, `
 ✬▁ ▂ ▄ ▅ ▆ ▇ █ ПєKσsмι¢ ฿Ø₮█ ▇ ▆ ▅ ▄ ▂ ▁✬
     
         -------- ≪ *Me apoyarias en youtube :'3?* ≫ --------
  📌https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA

≫ ─── ≪❌No saturen el bot ಥ‿ಥ❌≫ ─── ≪

━━┫╋┃┫『⚡ *COMANDOS* ⚡』┣┃╋┣━━
▭▬▬ ▬ ▬▬▬ ▬▬ ▬▛ • ▜▬ ▬▬ ▬▬▬ ▬ ▬▬▭
☞ ⚡ _*.sticker/.stiker*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.aimg/.aimagen*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.gtts*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.loliuwu*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.neko*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.animerandom*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.fondo/.wallpaper/.wp*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.animeme*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.xd*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.letra*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.ninja*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.invocar*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.administradores/.admins/.invocaadmin*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.name?*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.ascender*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.quitarpoder*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.fotobot*_ ⚡
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ⚡ _*.ban*_ ⚡`, text, {
quoted: mek
  })
  
  break
  
					case 'ayuda':
  if (!args.length<1) return reply(mess.only.daftarB)
  
  if (args.length < 2) return client.sendMessage(from, `
 ✬▁ ▂ ▄ ▅ ▆ ▇ █ ПєKσsмι¢ ฿Ø₮█ ▇ ▆ ▅ ▄ ▂ ▁✬
     
         -------- ≪ *Me apoyarias en youtube :'3?* ≫ --------
  📌https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA

≫ ─── ≪❌No saturen el bot ಥ‿ಥ❌≫ ─── ≪

━━┫╋┃┫『⚡ *COMANDOS* ⚡』┣┃╋┣━━
▭▬▬ ▬ ▬▬▬ ▬▬ ▬▛ • ▜▬ ▬▬ ▬▬▬ ▬ ▬▬▭
☞ ꧁⚡ _*.sticker/.stiker*_ ⚡
[conversor a sticker]
➤ 🗜Convierte una imagen, video, gif a sticker 🧬 ejm de uso: ⚒Envie/responda ( *.stiker* para convertir imagenes a sticker)y( *.sticker* para convertir videos, gif a sticker)⚒꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.aimg/.aimagen*_ ⚡
[convierte sticker a imagen]
➤ 🗜Convierte un sticker a imagen 🧬ejm de uso: ⚒Envie/responda ( *.aimg* con su imagen respectiva)꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.gtts*_ ⚡
[conversor de letra a audio multi-idioma]
➤ 🎙Convierte texto a voz 🧬ejm de uso: ⚒Envie ( *.gtts* y el texto a convertir)⚒\nEjm visual 📲.gtts ja On2-chan✔꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.loliuwu*_ ⚡
[imagen random de una L0L1 7v7👌]
➤ 🌈recive una imagen random🧬ejm de uso: ⚒Solo envie el respectivo comando⚒\nPsdt:imagenes limitadas u.u꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.neko*_ ⚡
[imagen random neko UwU]
➤ 🌈recive una imagen random🧬ejm de uso: ⚒Solo envie el respectivo comando⚒\nPsdt:imagenes limitadas u.u꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.animerandom*_ ⚡
[imagen anime random]
➤ 🔮recive una imagen mega random🧬ejm de uso: ⚒Solo envie el respectivo comando⚒\nPsdt:imagenes aleatorias u.u꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.fondo/.wallpaper/.wp*_ ⚡
[fondo de pantalla aleatoria]
➤ 🖼recive un fondo random🧬ejm de uso: ⚒Solo envie el respectivo comando⚒\nPsdt:no siempre sera lo que esperabas u.u꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.animeme*_ ⚡
[memes de anime]
➤ 🃏recive un meme🧬ejm de uso: ⚒Solo envie el respectivo comando⚒꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.xd*_ ⚡
[le saves al chispost😳👌]
➤🎭 recive una imagen random🧬ejm de uso: ⚒Solo envie el respectivo comando⚒\nPsdt:c rie tan fuerte que muere*꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.letra*_ ⚡
[para tu karaoke]
➤ 📝reciviras la letra completa de tu musica🧬ejm de uso: ⚒Envie ( *.letra*con nombre de la musica y autor)\nEjm visual 📲.letra minero rubius✔⚒꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.ninja*_ ⚡
[descubre tu nombre ninja 🎴]
➤ 🀄se generara tu nombre ninja 🧬ejm de uso: ⚒Solo envie el respectivo comando⚒\nEjm visual 📲.ninja juan✔꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.invocar*_ ⚡
[etiqueta a todos los miembros del grupo]
➤ 🧾todos los grandiosos miembros de este grupo seran invocados🧬ejm de uso: ⚒Solo envie el respectivo comando⚒\nNo lo uses mucho 😡
➥_*numerolink*_ [link directos de todos los numeros del grupo]
🧾links directos de numeros generados en whatsapp🧬ejm de uso: ⚒Solo envie el respectivo comando⚒꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.administradores/.admins/.invocaadmin*_ ⚡
[etiqueta a todos los administradores del grupo]
➤ 🧾todos los admins del grupo seran etiquetados🛰🧬ejm de uso: ⚒Solo envie el respectivo comando⚒\nNo lo uses mucho 😡꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.name?*_ ⚡
[busca anime por imagen]
➤ 🔎se buscara un anime a traves de una imagen🧬ejm de uso: ⚒Solo envie el respectivo comando⚒\nPsdt: esta funcion tiene una probabilidad de 60% en encontrar el nombre correcto y un 40% que no funcione\nSe le agradece su comprension UwU꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.ascender*_ ⚡
[ascender a admin]
➤ 🔱ascender a un usuario a admin🔱꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.quitarpoder*_ ⚡[quitar admin]⚡
➤ ☢se le quita admin aun usuario☢꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.fotobot*_ ⚡
[nuevo perfil para el bot]
➤ 🎨cambiar perfil del bot🎨꧂
﻿━━━━━━━━━━━━❪❂❫━━━━━━━━━━━━
☞ ꧁⚡ _*.ban*_ ⚡
[eliminar a un usuario del grupo]
➤ ☣ban a los que incumplan reglas☣꧂\n...
▭▬▬ ▬ ▬▬▬ ▬▬ ▬▙ • ▟▬ ▬▬ ▬▬▬ ▬ ▬▬▭`, text, {
quoted: mek
  })
  
  break
  
					case 'porno':
					case 'xxx':
					case 'hentai':
					case 'puta':
  if (!args.length<1) return reply(mess.only.daftarB)
  
  if (args.length < 2) return client.sendMessage(from, 'Asi te queria agarrar marrano . _.\nTu numero sera guardado con mucho cariño en esta pagina :3 \nhttps://www.fbi.gov/ ', text, {
quoted: mek
  })
  
  break
  
  
  case 'letra':
  if (args.length < 1) return reply('Envie el comando con el nombre de la musica y autor 🎤')
  if (!args.length) return reply(mess.only.daftarB)
  
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
  
case 'ninja':
  if (args.length < 1) return reply('Envie el comando con tu nombre')
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

case 'listonline':
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'Lista de tus contactos activos:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break 

				case 'tstiker':
				case 'tsticker':
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbar.moe/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${rano} -o ${rano}`, async (error) => {
							if (error) return reply(mess.error.stick)
							client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
							fs.unlinkSync(rano)
						})
					})
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
				case 'limpieza':
					if (!isOwner) return reply('Que intentas hacer pillin :v?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('limpieza del chat completa UwU')
					break
				case 'bc':
					if (!isOwner) return reply('kien sos ._.?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `██▓▒░ 🚨Aviso del BoT :3 📢░▒▓██\n\n${body.slice(4)}`})
						}
						reply('⚡Mensaje simultaneo compartido con exito :D')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `██▓▒░ 🚨Aviso del BoT :3 📢░▒▓██\n\n${body.slice(4)}`)
						}
						reply('⚡Mensaje simultaneo compartido con exito :D⚡')
					}
					break
                                case 'ascender':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '⚡Un usuario fue ascendido a admin⚡ 🛐\nAhora tiene el poder 😈👌\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`⚡Se le ascendio a admin a @${mentioned[0].split('@')[0]} 🛐Ahora tiene el poder en el grupo!😈👌`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'quitarpoder':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'quitaron admin a un usuario 😭👌\nF\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`💉Se le quito el poder a @${mentioned[0].split('@')[0]} fue bueno mientras duro 😭👌`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'a':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Masukan nomor target')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'ban':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('etiqueta al objetivo que quieres eliminar🚮')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'ordenes recividas y completada👌 :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Se le dio ban a un pvto ÙwÚr: @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'administradores':
				case 'invocaadmin':
				case 'admins':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'grupolink':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await client.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                    
                case 'salir':
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	client.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
				case 'aimagen':
				case 'aimg':
					if (!isQuotedSticker) return reply('Error UnU')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No c puede convertir stickergif a imagen lo ciento 😔🤙❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Completado >.<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				case 'wlc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm . _.')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Comando Activo UwUr')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Se activó con éxito la función de bienvenida en este grupo 😳👌 ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Se desactivo con éxito la función de bienvenida en este grupo 😎👌✔️')
					} else {
						reply('digite 1 para activar, digite 0 para apagar')
					}
                                      break
				case 'fotobot':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
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
					case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
				} catch {
				  reply('...')
				}
				break
				case 'gg':
				if (!args.length < 1) return reply(mess.only.daftarB)
anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/random/hentai?apiKey=APIKEY}`, {method: 'get'})
thumb = anu.result
client.sendMessage(from, thumb, image, {quoted: mek})
break


				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
