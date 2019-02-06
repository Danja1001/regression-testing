report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "test": "../bitmaps_test/20181210-101757/backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://tag4u.ussl.co.il/product-category/tag-4-camp/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -525
          },
          "misMatchPercentage": "7.17",
          "analysisTime": 430
        },
        "diffImage": "../bitmaps_test/20181210-101757/failed_diff_backstop_default_BackstopJS_Homepage_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_BackstopJS_Homepage_0_document_1_desktop.png",
        "test": "../bitmaps_test/20181210-101757/backstop_default_BackstopJS_Homepage_0_document_1_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_1_desktop.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://tag4u.ussl.co.il/product-category/tag-4-camp/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.59",
          "analysisTime": 491
        },
        "diffImage": "../bitmaps_test/20181210-101757/failed_diff_backstop_default_BackstopJS_Homepage_0_document_1_desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});