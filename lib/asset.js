const { Asset } = require('parcel-bundler');
const svg = require("svgo");

class InlineSvgAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'js';
  }
  async parse(str) {
    const svgo = new svg({
      plugins: [
        {
          removeDoctype: true
        },
        {
          removeComments: true
        },
        {
          removeXMLNS: true
        },
        {
          removeAttrs:{
            attrs:'svg:(width|height|class)'
          }
        },
        {
          removeViewBox:false,
        },
        {
          addAttributesToSVGElement:{
            attributes:[{
              reserveAspectRatio:"xMidYMid slice"
            }]
          }
        }
     
      ]
    });

    const optimizedSvg = await svgo.optimize(str);

    this.code = optimizedSvg.data
  }
  generate() {
    // Send to JS bundler
    return {
      'js': "module.exports = '" + this.code.replace("'", "&#39;") + "'"
    };
  }
}

module.exports = InlineSvgAsset;