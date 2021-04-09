exports.noregis = () => {
        return `*「 REGISTRESE :D 」*\n\n*forma de registrar ${prefix}registrar nombre|edad* \n*Ejemplo: ${prefix}registrar Matt|20*`
}

exports.rediregis = () => {
        return `*「 YA REGISTRADO! 」*\n\n*SE HA REGISTRADO EN LA BASE DE DATOS BOT`
}

exports.wrongf = () => {
        return`*inválido, intente nuevamente*`
}

exports.clears = () => {
        return`*vaciar chat con exito*`
}

exports.pc = () => {
        return`*「 REGISTRO 」*\n\Para saber si ya se ha registrado, consulte la nota que le envié \n\nNOTE:\n*Si no ha recibido un mensaje, significa que aún no se ha registrado*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 REGISTRO DE DATOS 」*\n\nte registraste con los datos \n\n◪ *DATOS* \n  │ \n  ├─ ❏ NOMBRE : ${namaUser} \n  ├─ ❏ NUMERO : wa.me/${sender.split("@")[0]} \n  ├─ ❏ EDAD : ${umurUser} \n  ├─ ❏ REGISTRO HORA : ${time} \n  │ \n └─ ❏ CPF : ${serialUser} \n\n ❏ PSDT : \n NO OLVIDE ESTE NÚMERO PORQUE ES IMPORTANTE`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* No encontrado intenta escribir *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Perdon pero... ${pushname} no es el dueño del bot*`
}

exports.limitend = (pushname) => {
        return`*Disculpa ${pushname} el límite de hoy expiró,*\n*el limite se reinicia cada 24h*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMITE DE CUENTAS 」*
Tu límite restante es : ${limitCounts}

PSDT: Cuando acabe su limite no podra enviar mas mensajes :D`
}

exports.satukos = () => {
        return`*Digite 1 para/habilitar ó 0/para deshabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nombre* : ${pushname}\n  ❏ *Numero* : ${sender.split("@")[0]}\n  ❏ *Dinero* : ${uangkau}`
}
