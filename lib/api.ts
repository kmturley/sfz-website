import instrumentsYaml from '../data/instruments.yml';
import softwareYaml from '../data/software.yml';
import { YamlCategory, YamlInstrument, YamlInstruments } from '../pages/instruments';
import { YamlApplication, YamlSoftware, YamlSoftwareCategory } from '../pages/software';
import { toSlug } from './utils';

const getApplication = (applicationId: string) => {
  let match: YamlApplication = (softwareYaml as YamlSoftware).categories[0].applications[0];
  (softwareYaml as YamlSoftware).categories.forEach((category: YamlSoftwareCategory) => {
    category.slug = toSlug(category.name);
    category.applications.forEach((application: YamlApplication) => {
      application.category = category.name;
      application.slug = toSlug(application.name);
      if (application.slug === applicationId) match = application;
    })
  });
  return match;
}

const getApplications = () => {
  const list: YamlApplication[] = [];
  (softwareYaml as YamlSoftware).categories.forEach((category: YamlSoftwareCategory) => {
    category.applications.forEach((application: YamlApplication) => {
      list.push(application);
    })
  });
  return list;
}

const getInstrument = (instrumentId: string | string[] | undefined) => {
  let match: YamlInstrument = (instrumentsYaml as YamlInstruments).categories[0].instruments[0];
  (instrumentsYaml as YamlInstruments).categories.forEach((category: YamlCategory) => {
    category.slug = toSlug(category.name);
    category.instruments.forEach((instrument: YamlInstrument) => {
      instrument.category = category.name;
      instrument.slug = toSlug(instrument.name);
      if (instrument.slug === instrumentId) match = instrument;
    })
  });
  return match;
}

const getInstruments = () => {
  const list: YamlInstrument[] = [];
  (instrumentsYaml as YamlInstruments).categories.forEach((category: YamlCategory) => {
    category.instruments.forEach((instrument: YamlInstrument) => {
      list.push(instrument);
    })
  });
  return list;
}

export { getApplication, getApplications, getInstrument, getInstruments };
