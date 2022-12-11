import instrumentsYaml from '../data/instruments.yml';
import softwareYaml from '../data/software.yml';
import {
  YamlCategory,
  YamlInstrument,
  YamlInstruments,
  YamlApplication,
  YamlSoftware,
  YamlSoftwareCategory,
} from './types';
import { toSlug } from './utils';

function getInstrument(instrumentId: string | string[] | undefined) {
  return getInstruments().filter((instrument: YamlInstrument) => {
    return instrument.slug === instrumentId ? instrument : false;
  })[0];
}

function getInstrumentCategories() {
  return (instrumentsYaml as YamlInstruments).categories.map((category: YamlCategory) => {
    return category.name;
  });
}

function getInstrumentCompatibilities() {
  // TODO load from instruments.yml file when attributes are available
  return ['Bassmidi', 'sforzando', 'sfizz'];
}

function getInstrumentCosts() {
  // TODO load from instruments.yml file when attributes are available
  return ['Free', '$0-$9', '$10-$29', '$30-$49', '$50+'];
}

function getInstrumentLicenses() {
  const licenses: string[] = [];
  (instrumentsYaml as YamlInstruments).categories.forEach((category: YamlCategory) => {
    category.instruments.forEach((instrument: YamlInstrument) => {
      if (!instrument.license || licenses.includes(instrument.license)) return;
      licenses.push(instrument.license);
    });
  });
  return licenses;
}

function getInstruments() {
  const list: YamlInstrument[] = [];
  (instrumentsYaml as YamlInstruments).categories.forEach((category: YamlCategory) => {
    category.slug = toSlug(category.name);
    category.instruments.forEach((instrument: YamlInstrument) => {
      instrument.category = category.name;
      instrument.slug = toSlug(instrument.name);
      list.push(instrument);
    });
  });
  return list;
}

function getSoftware() {
  const list: YamlApplication[] = [];
  (softwareYaml as YamlSoftware).categories.forEach((category: YamlSoftwareCategory) => {
    category.slug = toSlug(category.name);
    category.applications.forEach((application: YamlApplication) => {
      application.category = category.name;
      application.slug = toSlug(application.name);
      list.push(application);
    });
  });
  return list;
}

function getSoftwareApplication(applicationId: string | string[] | undefined) {
  return getSoftware().filter((application: YamlInstrument) => {
    return application.slug === applicationId ? application : false;
  })[0];
}

function getSoftwareCategories() {
  return (softwareYaml as YamlSoftware).categories.map((category: YamlSoftwareCategory) => {
    return category.name;
  });
}

function getSoftwareLicenses() {
  const licenses: string[] = [];
  getSoftware().forEach((application: YamlApplication) => {
    if (!application.license || licenses.includes(application.license)) return;
    licenses.push(application.license);
  });
  return licenses;
}

function getSoftwarePlatforms() {
  return (softwareYaml as YamlSoftware).os.map((system: any) => {
    return system.name;
  });
}

export {
  getInstrument,
  getInstrumentCategories,
  getInstrumentCompatibilities,
  getInstrumentCosts,
  getInstrumentLicenses,
  getInstruments,
  getSoftware,
  getSoftwareApplication,
  getSoftwareCategories,
  getSoftwareLicenses,
  getSoftwarePlatforms,
};
