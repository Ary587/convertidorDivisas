class Convertidor {
  constructor() {
    this.tasas = {
      USD: 0.059,
      EUR: 0.054,
      BRL: 0.30,
      JPY: 8.9
    };

    this.símbolos = {
      USD: '$',
      EUR: '€',
      BRL: 'R$',
      JPY: '¥'
    };

    this.banderas = {
      USD: 'https://flagcdn.com/w40/us.png',
      EUR: 'https://flagcdn.com/w40/eu.png',
      BRL: 'https://flagcdn.com/w40/br.png',
      JPY: 'https://flagcdn.com/w40/jp.png'
    };

    this.cantidadInput = document.getElementById('cantidad');
    this.convertirBtn = document.getElementById('convertirBtn');
    this.resultadosDiv = document.getElementById('resultados');

    this.convertirBtn.addEventListener('click', () => this.convertir());
  }

  convertir() {
    const cantidadMXN = parseFloat(this.cantidadInput.value);

    if (isNaN(cantidadMXN) || cantidadMXN <= 0) {
      alert('Por favor ingresa una cantidad válida.');
      return;
    }

    this.resultadosDiv.innerHTML = '';

    for (const moneda in this.tasas) {
      const cantidadConvertida = (cantidadMXN * this.tasas[moneda]).toFixed(2);
      const símbolo = this.símbolos[moneda];
      const bandera = this.banderas[moneda];

      const div = document.createElement('div');
      div.className = 'moneda';
      div.innerHTML = `
        <span><img src="${bandera}" alt="${moneda}" /> ${moneda}</span>
        <strong>${símbolo}${cantidadConvertida}</strong>
      `;
      this.resultadosDiv.appendChild(div);
    }
  }
}
new Convertidor();
