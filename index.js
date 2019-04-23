(function() {
  const myself = {
    getAbout: '$ cd Documents/Myself^1000\n$ cat about.txt\n',
    description:
      'Hi, I’m Williams.`\n`  I’m a Software Engineer from Uruguay an small country near latitude 33.`\n`  I’ve been working the past 6 years in Software Development, being part of multiple`\n`  projects and building a great variety of programs using different techonologies.`\n`  I’m passionate about Piknk Floyd, traveling and Asimov books.',
    getCompetencies:
      '\n\n$ sudo apt-get competencies\n ` Fetching from source...`\n ` Installing libraries...`\n\n`  * Loading core competencies ...`\n',
    competencies:
      '*** Backend API architecture`\n`  *** AWS DevOps engineering`\n`  *** Node JS for performant apps`\n`  *** Blockchain development`\n`  *** Relational and NoSQL database at scale`\n`  *** Unit/End to End testing`\n`  *** Agile methodologies`\n`  *** Troubleshooting`\n`  *** Communication / Collaboration `\n\n',
    getLanguages: '* Loading languages, frameworks and tools ... `\n',
    languages:
      '*** Javascript, SQL, Solidity, Ruby, HTML, CSS, Python, Kotlin, Java`\n`  *** NodeJS, ReactJS, Express, Serverless, Redux, React Native, Sequelize, Ethereum Network, Corda, Rails, AngularJS, Flask`\n`  *** AWS, Heroku, Firebase, Digital Ocean, GCE, Postgres, MySQL, MongoDB, Redis, Git, Mocha, Jasmine, Nginx, Webpack`\n`  *** Auth0, TravisCI, Jira, Docker, Zoho, Stripe, BrainTree `\n\n',
    getSources: '$ mount /dev/hda2 /external/sources\n\n',
    sources:
      '1) Linkedin: https://www.linkedin.com/in/williams-olivera `\n` 2) Github: https://github.com/wolivera`\n` 3) Medium: https://medium.com/@liamsolivera \n\n\n\n\n',
    getContactMe: "$ grep 'contact' /usr\n\n",
    contactMe: 'Want to chat? Drop me a line at liamsolivera@gmail.com',
  };
  new Typed('#typed', {
    strings: [
      '' +
        myself.getAbout +
        '`  ' +
        myself.description +
        ' ' +
        myself.getCompetencies +
        '``  ' +
        myself.competencies +
        '``  ' +
        myself.getLanguages +
        '  ' +
        myself.languages +
        '``' +
        myself.getSources +
        ' ' +
        myself.sources +
        '``' +
        myself.getContactMe +
        ' ' +
        myself.contactMe,
    ],
    typeSpeed: 100,
    backSpeed: 0,
  });
})();

let scrollInterval;

function startInterval() {
  scrollInterval = setInterval(function() {
    const elem = document.getElementsByClassName('text-body')[0];
    elem.scrollTop = elem.scrollHeight;
  }, 500);
}

// If user scrolls, stop interval
document.addEventListener(
  'scroll',
  function(event) {
    // if (event.target.id === 'scrollBottom') {
    // or any other filtering condition
    clearInterval(scrollInterval);
    // }
  },
  true /*Capture event*/
);

//And start it whenever you need
startInterval();
