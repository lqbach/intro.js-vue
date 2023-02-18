let packageNames = []
let viteConfig
let IIFEcss

export default function () {
  return {
    apply: 'build',
    enforce: 'post',
    name: 'pack-css',
    configResolved(config) {
      viteConfig = config
      packageNames = viteConfig.build.lib.formats.map((format) =>
        viteConfig.build.lib.fileName(format)
      )
    },
    generateBundle(_, bundle) {
      const cssFileName = 'style.css'
      const { [cssFileName]: cssBundle } = bundle

      if (cssBundle) {
        IIFEcss = `(function() {try {var elementStyle = document.createElement('style');elementStyle.innerText = ${JSON.stringify(
          cssBundle.source
        )};document.head.appendChild(elementStyle);} catch(error) {console.error(error, 'unable to concat style inside the bundled file')}})()`
        delete bundle[cssFileName]
      }
      packageNames.forEach((packageName) => {
        if (bundle[packageName]) {
          bundle[packageName].code += IIFEcss
        }
      })
    },
  }
}
