import { createRequire } from 'module';

async function loadLexicon() {
  // First, try to dynamically import the ESM bundle.
  try {
    const mod = await import('./dist/index.esm.js');
    console.log('Loaded ESM bundle: ./dist/index.esm.js');
    return mod;
  } catch (err) {
    console.error('ESM import failed, falling back to CJS require:', err && err.message);
    const require = createRequire(import.meta.url);
    const mod = require('./dist/index.cjs.js');
    console.log('Loaded CJS bundle via require: ./dist/index.cjs.js');
    return mod;
  }
}

(async () => {
  const lexicon = await loadLexicon();

  console.log('\nExported keys:', Object.keys(lexicon).sort());

  if (typeof lexicon.getEntries === 'function') {
    console.log('\ngetEntries("我") =>');
    console.log(JSON.stringify(lexicon.getEntries('我').slice(0, 3), null, 2));
  }

  if (typeof lexicon.search === 'function') {
    console.log('\nsearch("water", 5) =>');
    try {
      console.log(JSON.stringify(lexicon.search('water', 5).map(e => e.simp), null, 2));
    } catch (err) {
      console.error('search failed:', err && err.message);
    }
  }

  if (typeof lexicon.getGloss === 'function') {
    console.log('\ngetGloss("我") =>', lexicon.getGloss('我'));
  }

  console.log('\nImport demonstration complete.');
})();
