const appName = document.getElementById('name');
const digits = document.getElementById('digits');
const email = document.getElementById('email');
const bossLevels = document.getElementById('boss-levels');

const jsonObject = window.localStorage.getItem('applicant');
const hydrateOjectApplicant = JSON.parse(jsonObject);

console.log('it worked', hydrateOjectApplicant);

appName.textContent = hydrateOjectApplicant.name;
digits.textContent = hydrateOjectApplicant.digits;
email.textContent = hydrateOjectApplicant.email;
bossLevels.textContent = hydrateOjectApplicant.talkboss.join(', ');