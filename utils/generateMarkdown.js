// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.username}/${data.title}
  # Description
  ${data.description}
  # Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  The following must be installed to run the app, ${data.installation}
  # Usage
  To use this app, ${data.usage}
  # License
  This project is licensed with the ${data.license} license.
  # Contributing
  Contributors: ${data.contributors}
  # Test
  If you want to test the app do this: ${data.tests}
  # Questions
  If you have any question contact ${data.username}, ${data.email}
`;
}

module.exports = generateMarkdown;