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

function getInstrument(instrumentId: string | string[] | undefined): YamlInstrument | boolean {
  return getInstruments().filter((instrument: YamlInstrument) => {
    return instrument.slug === instrumentId ? instrument : false;
  })[0];
}

function getInstrumentCategories(): string[] {
  return (instrumentsYaml as YamlInstruments).categories
    .map((category: YamlCategory) => {
      return category.name;
    })
    .sort((a, b) => a.localeCompare(b));
}

function getInstrumentCompatibilities(): string[] {
  // TODO load from instruments.yml file when attributes are available
  return ['Bassmidi', 'sforzando', 'sfizz'].sort((a, b) => a.localeCompare(b));
}

function getInstrumentCosts(): string[] {
  return ['Free', 'Paid'];
}

function getInstrumentLicenses(): string[] {
  const licenses: string[] = [];
  (instrumentsYaml as YamlInstruments).categories.forEach((category: YamlCategory) => {
    category.instruments.forEach((instrument: YamlInstrument) => {
      if (!instrument.license || licenses.includes(instrument.license)) return;
      licenses.push(instrument.license);
    });
  });
  return licenses.sort((a, b) => a.localeCompare(b));
}

function getInstruments(): YamlInstrument[] {
  const list: YamlInstrument[] = [];
  (instrumentsYaml as YamlInstruments).categories.forEach((category: YamlCategory) => {
    category.slug = toSlug(category.name);
    category.instruments.forEach((instrument: YamlInstrument) => {
      instrument.category = category.name;
      instrument.slug = toSlug(instrument.name);
      list.push(instrument);
    });
  });
  return list.sort((a, b) => a.name.localeCompare(b.name));
}

function getSoftware(): YamlApplication[] {
  const list: YamlApplication[] = [];
  (softwareYaml as YamlSoftware).categories.forEach((category: YamlSoftwareCategory) => {
    category.slug = toSlug(category.name);
    category.applications.forEach((application: YamlApplication) => {
      application.category = category.name;
      application.slug = toSlug(application.name);
      list.push(application);
    });
  });
  return list.sort((a, b) => a.name.localeCompare(b.name));
}

function getSoftwareApplication(applicationId: string | string[] | undefined): YamlApplication | boolean {
  return getSoftware().filter((application: YamlApplication) => {
    return application.slug === applicationId ? application : false;
  })[0];
}

function getSoftwareCategories(): string[] {
  return (softwareYaml as YamlSoftware).categories
    .map((category: YamlSoftwareCategory) => {
      return category.name;
    })
    .sort((a, b) => a.localeCompare(b));
}

function getSoftwareLicenses(): string[] {
  const licenses: string[] = [];
  getSoftware().forEach((application: YamlApplication) => {
    if (!application.license || licenses.includes(application.license)) return;
    licenses.push(application.license);
  });
  return licenses.sort((a, b) => a.localeCompare(b));
}

function getSoftwarePlatforms(): string[] {
  return (softwareYaml as YamlSoftware).os
    .map((system: any) => {
      return system.name;
    })
    .sort((a, b) => a.localeCompare(b));
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
