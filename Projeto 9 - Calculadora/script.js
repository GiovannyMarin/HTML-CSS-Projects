function calcular(tipo, valor) {
	const resultado = document.getElementById("resultado");
	if (tipo === "acao") {
		if (valor === "c") {
			//limpar o visor
			resultado.value = "";
		}

		if (
			valor === "+" ||
			valor === "-" ||
			valor === "/" ||
			valor === "." ||
			valor === "*"
		) {
			resultado.value += valor;
		}

		if (valor === "=") {
			var valor_campo = eval(resultado.value);
			resultado.value = valor_campo;
		}
	} else if (tipo === "valor") {
		resultado.value += valor;
	}
}
