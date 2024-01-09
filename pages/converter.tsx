import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/list.module.css';
import { GetBasePath } from '../lib/path';
import { useEffect } from 'react';
import {
  convertJsToSfz,
  convertJsToXml,
  convertSfzToJs,
  convertSfzToXml,
  convertXmlToJs,
  convertXmlToSfz,
} from '@sfz-tools/core/dist/convert';

declare global {
  interface Window {
    ace: any;
  }
}

const fileSfz: string = `<group>
lovel=0
hivel=127
<region>
trigger=attack
pitch_keycenter=60
lokey=30
hikey=61
sample=./samples/C4.wav
<region>
trigger=attack
pitch_keycenter=62
lokey=62
hikey=63
sample=./samples/D4.wav
<region>
trigger=attack
pitch_keycenter=64
lokey=64
hikey=64
sample=./samples/E4.wav
<region>
trigger=attack
pitch_keycenter=65
lokey=65
hikey=66
sample=./samples/F4.wav
`;

const Software = () => {
  let ace: any = {};
  let aceEl: any = {};
  let inited: Boolean = false;
  let loading: Boolean = false;
  const title: string = `${siteTitle} - Converter`;
  let errorEl: HTMLElement | null;

  useEffect(() => {
    if (inited) return;
    const initEditors = async () => {
      inited = true;
      errorEl = document.getElementById('errors');
      init('ace-sfz');
      init('ace-json');
      init('ace-xml');
      loadFile('ace-sfz', fileSfz, true);
    };
    initEditors();
  });

  const init = (id: string) => {
    if (aceEl[id]) return;
    aceEl[id] = document.getElementById(id);
    aceEl[id].className = 'ace';
    ace[id] = window.ace.edit(aceEl[id], {
      theme: 'ace/theme/monokai',
    });
    ace[id].session.on('change', async function () {
      if (loading === false) {
        await loadFile(id, ace[id].getOption('value'));
      }
    });
  };

  const loadFile = async (id: string, file: string, loadAll = false) => {
    loading = true;
    try {
      if (errorEl) errorEl.innerHTML = '';
      if (id === 'ace-sfz') {
        if (loadAll) load('ace-sfz', 'sfz', file);
        load('ace-json', 'json', JSON.stringify(await convertSfzToJs(file), null, 2));
        load('ace-xml', 'xml', await convertSfzToXml(file));
      } else if (id === 'ace-json') {
        load('ace-sfz', 'sfz', convertJsToSfz(JSON.parse(file)));
        if (loadAll) load('ace-json', 'json', file);
        load('ace-xml', 'xml', convertJsToXml(JSON.parse(file)));
      } else if (id === 'ace-xml') {
        load('ace-sfz', 'sfz', convertXmlToSfz(file));
        load('ace-json', 'json', JSON.stringify(convertXmlToJs(file), null, 2));
        if (loadAll) load('ace-xml', 'xml', file);
      }
    } catch (e) {
      if (errorEl) errorEl.innerHTML = e as string;
    }
    loading = false;
  };

  const load = (id: string, type: string, file: string) => {
    if (type === 'sfz') {
      const SfzMode = require('../lib/ace/mode-sfz').Mode;
      ace[id].session.setMode(new SfzMode());
    } else {
      const modelist = window.ace.require('ace/ext/modelist');
      if (!modelist) {
        window.alert('Ace modelist not found, add to a <script> tag.');
      }
      const mode: string = modelist.getModeForPath(`filename.${type}`).mode;
      ace[id].session.setMode(mode);
    }
    ace[id].setOption('value', file);
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="og:image" content={`${GetBasePath()}/images/software.jpg`} />
        <meta name="og:title" content={title} />
        <script src="https://cdn.jsdelivr.net/npm/ace-builds@1.16.0/src-min-noconflict/ace.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/ace-builds@1.16.0/src-min-noconflict/ext-modelist.js" defer></script>
      </Head>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>Converter</h1>
        </div>
        <div className="editors">
          <div className="editor">sfz</div>
          <div className="editor">json</div>
          <div className="editor">xml</div>
        </div>
        <div className="editors">
          <div id="ace-sfz"></div>
          <div id="ace-json"></div>
          <div id="ace-xml"></div>
        </div>
        <div id="errors"></div>
      </section>
    </Layout>
  );
};

export default Software;
