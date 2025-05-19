import { simpleToTrad, tradToSimple } from 'simptrad';

const getTarget = () => {
  const args = process.argv.slice(2);
  const [lang, target] = args;
  return { lang, target };
};

function main() {
  const { lang, target } = getTarget();
  if (lang === 'simple') {
    console.log(simpleToTrad(target));
  } else if (lang === 'trad') {
    console.log(tradToSimple(target));
  } else {
    console.log('Invalid language');
  }
}

main()