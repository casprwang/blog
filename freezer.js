const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const JSON_PATH = path.join(__dirname, 'package.json')

const getPkgMap = () => execSync('yarn list --depth=0', { encoding: 'utf8' })
  .split('\n').filter(l => l.startsWith('├─') || l.startsWith('└─'))
  .filter(l => l.includes('@'))
  .map(l => l.split(/@|├─ |└─ /))
  .filter(arr => arr.length)
  .reduce((acc, cur) => {
    const v = cur.pop()
    const n = cur.pop()
    acc[n] = v
    return acc
  }, {})


const main = () => {
  try {
    const RAW = fs.readFileSync(JSON_PATH, {
      encoding: 'utf8'
    })
    const JSON_DATA = JSON.parse(RAW)
    const pkgMap = getPkgMap()
    Object
      .keys(JSON_DATA.dependencies)
      .forEach((k) => { JSON_DATA.dependencies[k] = pkgMap[k] })
    Object
      .keys(JSON_DATA.devDependencies)
      .forEach((k) => { JSON_DATA.devDependencies[k] = pkgMap[k] })
    // write
    fs.writeFileSync(JSON_PATH, JSON.stringify(JSON_DATA, null, 2), { encoding: 'utf8' })
    console.log('done')
  } catch (e) {
    console.log(e)
  }
}

main()
