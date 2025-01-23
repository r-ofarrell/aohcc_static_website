const therapists = [
  {
    firstName: "Jacquie",
    lastName: "Atkins",
    licenseType: "LPC",
    bio: "documents/atkins_jacquie.txt",
    pic: "images/bio_pics/atkins_jacquie.jpg",
    acceptingClients: "Waitlist closed",
    insurances: ["Self-pay only"],
    populations: ["Adults", "Couples"],
  },
  {
    firstName: "Sarah",
    lastName: "Bateman",
    licenseType: "LPC-A",
    bio: "documents/bateman_sarah.txt",
    pic: "images/bio_pics/bateman_sarah.jpg",
    acceptingClients: "Accepting new clients",
    insurances: ["Self-pay only"],
    populations: ["Adults"],
  },
  {
    firstName: "Carol",
    lastName: "Conway",
    licenseType: "LISW-CP",
    bio: "documents/conway_carol.txt",
    pic: "images/bio_pics/conway_carol.jpg",
    acceptingClients: "Accepting new clients",
    insurances: ["BCBS"],
    populations: ["Adults"],
  },
  {
    firstName: "Valerie",
    lastName: "Kidd",
    licenseType: "LPC-A",
    bio: "documents/kidd_valerie.txt",
    pic: "images/bio_pics/kidd_valerie.jpg",
    acceptingClients: "Accepting new clients",
    insurances: ["Self-pay only"],
    populations: ["Children", "Adolescents", "Adults", "Couples"],
  },
  {
    firstName: "Ryan",
    lastName: "O'Farrell",
    licenseType: "Psychologist",
    bio: "documents/ofarrell_ryan.txt",
    pic: "images/bio_pics/ofarrell_ryan.jpg",
    acceptingClients: "Waitlist closed",
    insurances: ["BCBS"],
    populations: ["Adults"],
  },
  {
    firstName: "Sydney",
    lastName: "Reynolds",
    licenseType: "LPC",
    bio: "documents/reynolds_sydney.txt",
    pic: "images/bio_pics/reynolds_sydney.jpg",
    acceptingClients: "Accepting new clients",
    insurances: ["Self-pay only"],
    populations: ["Children", "Adolescents", "Adults"],
  },
  {
    firstName: "Tavis",
    lastName: "Root",
    licenseType: "LPC",
    bio: "documents/root_tavis.txt",
    pic: "images/bio_pics/root_tavis.jpg",
    acceptingClients: "Accepting new clients",
    insurances: ["Aetna", "Cigna", "UHC"],
    populations: ["Adults"],
  },
  {
    firstName: "Chris",
    lastName: "Wells",
    licenseType: "LPC-A",
    bio: "documents/wells_chris.txt",
    pic: "images/bio_pics/wells_chris.jpg",
    acceptingClients: "Accepting new clients",
    insurances: ["Self-pay only"],
    populations: ["Adults", "Couples"],
  },
  {
    firstName: "Jason",
    lastName: "Zagaro",
    licenseType: "LPC",
    bio: "documents/zagaro_jason.txt",
    pic: "images/bio_pics/zagaro_jason.png",
    acceptingClients: "Accepting new clients",
    insurances: ["Self-pay only"],
    populations: ["Adolescents", "Adults"],
  },
];

const therapistSection = document.getElementById("therapists");

function renderTherapist(therapist) {
  const therapistInfo = `
  <div class="therapist">
            <img
              class="bio-pic"
              alt="${therapist.firstName} ${therapist.lastName} smiling at the camera."
              src="${therapist.pic}"
            />
            <h3 class="therapist-name">
              ${therapist.firstName} ${therapist.lastName}, ${therapist.licenseType}
            </h3>
            <p id="populations">
              Works with: ${therapist.populations.join(", ")}
            </p>
            <p id="insurances">
              Insurance: ${therapist.insurances.join(", ")}
            </p>
            <p id="accepting-clients">${therapist.acceptingClients}</p>
            <a class="therapist-link" href="${therapist.lastName.toLowerCase()}-${therapist.firstName.toLowerCase()}.html"
              >Learn more about ${therapist.firstName}</a
            >
          </div>

`;

  return therapistInfo;
}

const therapistSections = therapists.map((therapist) =>
  renderTherapist(therapist),
);
therapistSection.innerHTML += therapistSections.join("");
