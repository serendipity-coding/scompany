const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');
const uniqid = require('uniqid');

// @desc Get scrapped companies
// @route GET /api/v1/companies
// @access Public
exports.getScrappedCompanies = async (req, res, next) => {
  let companyName = req.params.companyName;

  try {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.linkedin.com/feed');

    //We log in as a linkedin user
    await driver
      .wait(until.elementLocated(By.css('.main__sign-in-link')))
      .click();

    await driver
      .wait(until.elementLocated(By.id('username')))
      .sendKeys(process.evn.LINKEDIN_EMAIL);
    await driver
      .wait(until.elementLocated(By.id('password')))
      .sendKeys(process.evn.LINKEDIN_PASSWORD);
    await driver
      .wait(
        until.elementLocated(By.css("[data-litms-control-urn='login-submit']"))
      )
      .click();

    // Once arrived to feed page
    // We redirect to company website
    if ((await driver.getCurrentUrl()) === 'https://www.linkedin.com/feed/') {
      await driver.get(`https://www.linkedin.com/company/${companyName}/`);

      const companyField = await driver
        .wait(
          until.elementLocated(
            By.css('.org-top-card-summary-info-list__info-item')
          )
        )
        .getText();

      const numberOfSubscribers = await driver
        .wait(
          until.elementLocated(
            By.css('.org-top-card-summary-info-list__info-item:last-child')
          )
        )
        .getText();

      const companyLogo = await driver
        .wait(
          until.elementLocated(By.css('img.org-top-card-primary-content__logo'))
        )
        .getAttribute('src');

      const numberOfEmployees = await driver
        .wait(
          until.elementLocated(
            By.css('.org-top-card-secondary-content__see-all')
          )
        )
        .getText();

      const websiteLink = await driver
        .wait(until.elementLocated(By.css('.follow + a')))
        .getAttribute('href');

      company = {
        id: uniqid(),
        field: companyField,
        subscribers: numberOfSubscribers,
        logo: companyLogo,
        numberOfEmployees: numberOfEmployees,
        websiteLink: websiteLink
      };

      await driver.quit();
      res.status(200).json({ success: true, company });
    }
  } catch (error) {
    res.status(error.status || 500).json({
      success: false,
      error: error.message || 'Server error'
    });
  }
};
