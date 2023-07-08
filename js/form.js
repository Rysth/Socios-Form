class Team {
  constructor(id, className, name, logo) {
    this.id = id;
    this.className = className;
    this.name = name;
    this.logo = logo;
  }
}

class TeamGroup {
  constructor(id, className, name, slug, teams) {
    this.id = id;
    this.className = className;
    this.name = name;
    this.slug = slug;
    this.teams = teams;
  }
}

const teamGroups = [
  new TeamGroup(0, '', 'Equipos Serie A', 'serie-a', [
    new Team(
      0,
      '',
      'Sociedad Deportiva Aucas',
      './resources/images/PNG/SERIE-A/team-1.png'
    ),
    new Team(
      1,
      '',
      'Universidad Católica',
      './resources/images/PNG/SERIE-A/team-2.png'
    ),
    new Team(
      2,
      '',
      'Independiente del Valle',
      './resources/images/PNG/SERIE-A/team-3.png'
    ),
    new Team(
      3,
      '',
      'Liga Deportiva Universitaria',
      './resources/images/PNG/SERIE-A/team-4.png'
    ),
    new Team(
      4,
      '',
      'Barcelona Sporting Club',
      './resources/images/PNG/SERIE-A/team-5.png'
    ),
    new Team(
      5,
      '',
      'Club Sport Emelec',
      './resources/images/PNG/SERIE-A/team-6.png'
    ),
    new Team(6, '', 'Deportivo Cuenca', './resources/images/PNG/SERIE-A/team-7.png'),
    new Team(
      7,
      '',
      'Delfin Sporting Club',
      './resources/images/PNG/SERIE-A/team-8.png'
    ),
    new Team(
      8,
      '',
      'Orense Sporting Club',
      './resources/images/PNG/SERIE-A/team-9.png'
    ),
    new Team(9, '', 'Guayaquil City', './resources/images/PNG/SERIE-A/team-10.png'),
    new Team(
      10,
      '',
      'Gualaceo Sporting Club',
      './resources/images/PNG/SERIE-A/team-11.png'
    ),
    new Team(
      11,
      '',
      'Técnico Universitario',
      './resources/images/PNG/SERIE-A/team-12.png'
    ),
    new Team(12, '', 'Mushuc Runa', './resources/images/PNG/SERIE-A/team-13.png'),
    new Team(
      13,
      '',
      'Cumbayá Fútbol Club',
      './resources/images/PNG/SERIE-A/team-14.png'
    ),
    new Team(14, '', 'El Nacional', './resources/images/PNG/SERIE-A/team-15.png'),
    new Team(
      15,
      '',
      'Libertad Fútbol Club',
      './resources/images/PNG/SERIE-A/team-16.png'
    ),
  ]),
  new TeamGroup(1, '', 'Equipos Serie B', 'serie-b', [
    new Team(0, '', 'Macará de Ambato', './resources/images/PNG/SERIE-B/team-1.png'),
    new Team(1, '', 'Nueve de Octubre', './resources/images/PNG/SERIE-B/team-2.png'),
    new Team(
      2,
      '',
      'Independiente Junior',
      './resources/images/PNG/SERIE-B/team-3.png'
    ),
    new Team(
      3,
      '',
      'Deportivo América',
      './resources/images/PNG/SERIE-B/team-4.png'
    ),
    new Team(
      4,
      '',
      'Imbabura Sporting Club',
      './resources/images/PNG/SERIE-B/team-5.png'
    ),
    new Team(5, '', 'Chacaritas', './resources/images/PNG/SERIE-B/team-6.png'),
    new Team(
      6,
      '',
      'Búhos ULVR Fútbol Club',
      './resources/images/PNG/SERIE-B/team-7.png'
    ),
    new Team(
      7,
      '',
      'Manta Fútbol Club',
      './resources/images/PNG/SERIE-B/team-8.png'
    ),
    new Team(
      8,
      '',
      'Club Vargas Torres',
      './resources/images/PNG/SERIE-B/team-9.png'
    ),
    new Team(9, '', 'Cuniburp F.C.', './resources/images/PNG/SERIE-B/team-10.png'),
  ]),
];

const formSystem = Array.from(document.querySelectorAll('.form-system'));

// Function to create the fieldset for each team group
function createFieldset(teamGroup) {
  // Concatenate every team contained within each team group
  const teamsHTML = teamGroup.teams
    .map(
      (element, index) => `
      <div class="form-check col-12 col-xl-6">
        <input
          class="form-check-input ${teamGroup.slug}"
          type="checkbox"
          value="${element.id}"
          id="${teamGroup.slug}-${index}"
        />
        <label class="form-check-label" for="${teamGroup.slug}-${index}">
          <img class="form-image" src="${element.logo}" alt="">
          ${element.name}
        </label>
      </div>
    `
    )
    .join('');

  // Add the whole content within the form-system element
  const formSystem = document.getElementById('form-system');
  formSystem.innerHTML += `
    <fieldset class="form-fieldset ${teamGroup.slug}" disabled>
      <legend class="fs-5 form-legend text-secondary">${teamGroup.name}</legend>
      <div class="row px-3 ">
        ${teamsHTML}
      </div>
    </fieldset>
  `;
}

window.onload = () => {
  teamGroups.forEach(createFieldset);

  const formFieldsets = Array.from(document.querySelectorAll('.form-fieldset'));

  // Function to handle radio button change
  function handleRadioChange(event) {
    const targetRadio = event.target;
    const targetFieldset = formFieldsets.find((fieldset) =>
      fieldset.classList.contains(targetRadio.value)
    );

    formFieldsets.forEach((fieldset) => {
      fieldset.disabled = true;
      fieldset.querySelector('.form-legend').classList.remove('text-secondary');
    });

    if (targetRadio.checked) {
      targetFieldset.disabled = false;
      targetFieldset.querySelector('.form-legend').classList.add('text-secondary');
    }
  }

  // Add event listeners to the radio buttons
  const radios = document.querySelectorAll('input[type="radio"][name="serie"]');
  radios.forEach((radio) => {
    radio.addEventListener('change', handleRadioChange);
  });
};

/* Falta hacer que retorne el JSON */
