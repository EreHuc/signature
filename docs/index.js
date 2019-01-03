const logo = 'img/sfeir_logo_classic.png';
const gif = 'img/sfeir_logo_anime.gif';
const cityMap = {
  'Paris': '48 rue Jacques Dulud - 92200 Neuilly sur Seine',
  'Lille': '2 Rue Hegel (bâtiment le canal) - 59000 Lille',
  'Luxembourg': '2 Rue Drosbach - L-3372 Leudelange (LUXEMBOURG)',
  'Strasbourg': '1 Avenue de l’Europe - 67300 Schiltigheim',
  'Nantes': 'Zero Newton, 3 Rue Albert Camus - 44000 Nantes'
};

function populateCitySelector() {
  const cityElement = document.getElementById('ville');
  let option;
  Object.keys(cityMap).map(city => {
    option = document.createElement('option');
    option.value = city;
    option.text = city;
    cityElement.appendChild(option);
  });
}

populateCitySelector();

function showInput() {
  const firstName = document.getElementById('prenom').value;
  const lastName = document.getElementById('nom').value;
  const job = document.getElementById('poste').value;
  const phone = document.getElementById('phone').value;
  const phone2 = document.getElementById('phone2').value;
  const citySelected = document.getElementById('ville').value;
  const city = cityMap[citySelected] || '';

  showSignatureElement();
  generateSignature(firstName, lastName, job, phone, phone2, city);
  createLogo();
  scrollToSignature();
}

// ---------- PRIVATE ------------- //

function showSignatureElement() {
  document.getElementById('ap').style.display = 'block';
  document.getElementById('copy-sign').style.display = 'block';
}

function generateSignature(firstName, lastName, job, phone, phone2, city) {
  document.getElementById('signature').innerHTML = `<table width="100%" cellpadding="0" cellspacing="0">
            <tr>
                <td align="left" valign="top" id="sign-img">
                    <a href="https://sfeir.com/" title="SFEIR">
                        <img id="ls" alt="Logo" style="padding: 0; border: 0;"/>
                    </a>
                </td>
                <td id="sign-content" width="100%" align="left" valign="top" style="padding-right: 0; padding-left: 0; padding-bottom: 8px; font-family: Arial; font-size: 10px;line-height: 12px; color: grey;">
                    <span style="color: #105394;font-weight: bold;">${firstName} ${lastName}</span>
                     ${job ? `- <span style="color: #e75112;">${job}</span>` : ''}
                    <br />
                    <span>${city}</span>
                    <br />
                    <span style="font-family: Trebuchet MS, Sans-Serif;font-weight: bold;margin-top: 2px;">
                        <a href="tel:${phone}">${phone}</a>
                        ${phone2 ? `- <a href="tel:${phone2}">${phone2}</a>` : ''}
                    </span>
                </td>
            </tr>
          </table>
        `;
}

function createLogo() {
  if (document.getElementById('anime').checked) {
    document.getElementById('ls').src = gif;
    document.getElementById('ls').style.width = '160px';
    document.getElementById('sign-content').style.paddingTop = '20px';
  } else {
    document.getElementById('ls').src = logo;
    document.getElementById('sign-content').style.paddingTop = '2px';
    document.getElementById('sign-img').style.paddingRight = '10px';
  }
}

function scrollToSignature() {
  document.getElementById('signature').scrollIntoView();
}