let foswiki = {
  preferences: {
      SCRIPTURL: "rest"
  },
  jsi18n: {
    get(module, text){
      return "MT:" + text;
    }
  },
  getPreference(preference) {
    return `Value of ${preference}`;
  },
  getPubUrl() {
    return "http://wiki.de/pub";
  },
  getScriptUrl: function() {
    return "SCRIPTURL";
  }
};

export default foswiki;