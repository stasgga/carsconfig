import Vue from 'vue';

declare interface SpecType {
  name: string,
  engine: string,
  interior: string,
  color: string,
  wheelRims: string,
  wheelType: string,
  airSuspension: boolean,
  signature: string,
}

declare interface ConfigsType {
  label: string,
  value: string,
}

export default Vue.extend({
  name: 'MainPage',
  props: {
    msg: String
  },
  data: () => ({
    dialog: false,
    snackbar: false,
    newConfigLabel: '',
    specifications: [] as SpecType[],
    interiors: <Array<string>>[],
    engines: <Array<string>>[],
    colors: <Array<string>>[],
    rims: <Array<string>>[],
    wheelTypes: <Array<string>>[],
    newSpec: {} as SpecType,
    newConfigs: [] as ConfigsType[]
  }),
  mounted() {
    this.setDefaultValues();
  },
  methods: {
    saveSpecification: function () {
      for (const config of this.newConfigs) {
        // @ts-expect-error: Unreachable code error
        this.newSpec[config.label] = config.value;
      }
      const empty = Object.values(this.newSpec).filter(val => {
        return typeof val != 'boolean' && !val;
      });

      if (empty.length) {
        this.snackbar = true;
        return;
      }

      this.specifications.push(this.newSpec);
      this.resetValues();
    },
    addNewConfig: function () {
      this.newConfigs.push({label: this.newConfigLabel, value: ''});
      this.dialog = false;
    },
    setDefaultValues() {
      this.specifications = [
        {
          name: 'Sport',
          engine: 'v6, petrol',
          interior: 'Seats - leather',
          color: 'white',
          wheelRims: '15 inches',
          wheelType: 'type 3',
          airSuspension: false,
          signature: ''
        },
        {
          name: 'Prestige',
          engine: 'v6, petrol',
          interior: 'Seats - leather',
          color: 'white',
          wheelRims: '15 inches',
          wheelType: 'type 3',
          airSuspension: false,
          signature: ''
        },
        {
          name: 'Standart',
          engine: 'v6, petrol',
          interior: 'Seats - leather',
          color: 'white',
          wheelRims: '15 inches',
          wheelType: 'type 3',
          airSuspension: false,
          signature: ''
        },
        {
          name: 'Comfort',
          engine: 'v6, petrol',
          interior: 'Seats - leather',
          color: 'white',
          wheelRims: '15 inches',
          wheelType: 'type 3',
          airSuspension: false,
          signature: ''
        }
      ];
      this.interiors = [
        'Seats - leather',
        'Steering wheel - sports',
        'Audio - bass boosted'
      ];
      this.engines = [
        'v6, petrol',
        'v6, diesel',
        'v8, petrol'
      ];
      this.colors = [
        'white',
        'green',
        'yellow',
        'black'
      ];
      this.rims = [
        '15 inches',
        '13 inches',
        '11 inches'
      ];
      this.wheelTypes = [
        'type 1',
        'type 2',
        'type 3'
      ];
    },
    resetValues() {
      this.newConfigs = [];
      this.newSpec = {
        name: '',
        engine: '',
        interior: '',
        color: '',
        wheelRims: '',
        wheelType: '',
        airSuspension: false,
        signature: ''
      };
    }
  }
})
