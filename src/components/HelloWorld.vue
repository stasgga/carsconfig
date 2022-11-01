<template>
  <div class="hello">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <v-card class="dialog">
        <v-text-field
            v-model="newConfigLabel"
            label="Name of the new configuration"
        ></v-text-field>
        <v-btn @click="addNewConfig">
          Ok
        </v-btn>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :timeout="2000">
      Please fill of the fields
    </v-snackbar>
    <template>
      <v-expansion-panels>
        <v-expansion-panel
            v-for="(spec, i) in specifications"
            :key="i"
        >
          <v-expansion-panel-header>
            {{ spec.name }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p v-for="(prop, key) in spec"
              :key="key"
            >
              {{ key }}: {{ prop }}
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            +Make new specification
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
                v-model="newSpec.name"
                label="Name of specification"
            ></v-text-field>
            <v-select
                v-model="newSpec.engine"
                :items="engines"
                label="Engine"
            ></v-select>
            <v-select
                v-model="newSpec.interior"
                :items="interiors"
                label="Interior materials"
            ></v-select>
            <v-select
                v-model="newSpec.color"
                :items="colors"
                label="Color"
            ></v-select>
            <v-select
                v-model="newSpec.wheelRims"
                :items="rims"
                label="Wheel rims"
            ></v-select>
            <v-select
                v-model="newSpec.wheelType"
                :items="wheelTypes"
                label="Wheel type"
            ></v-select>
            <v-checkbox
                v-model="newSpec.airSuspension"
                label="Air suspension"
            ></v-checkbox>
            <v-text-field
                v-model="newSpec.signature"
                label="Signature on hood"
            ></v-text-field>
            <v-text-field
                v-for="(config, i) in newConfigs"
                v-model="config.value"
                :key="i"
                :label="config.label"
            ></v-text-field>
            <v-card class="button-container d-flex flex-row justify-space-around">
              <v-btn @click="dialog = true">
                +New configuration option
              </v-btn>
              <v-btn @click="saveSpecification">
                Save
              </v-btn>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

declare interface newSpecType {
  name: string,
  engine: string,
  interior: string,
  color: string,
  wheelRims: string,
  wheelType: string,
  airSuspension: boolean,
  signature: string,
}

declare interface newConfigsType {
  label: string,
  value: string,
}

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => (
      {
        dialog: false,
        snackbar: false,
        newConfigLabel: '',
        specifications: [
          {
            name: 'Sport',
            engine: 'v6, petrol',
            interior: 'Seats - leather',
            color: 'white',
            wheelRims: '15 inches',
            wheelType: 'type 3',
            airSuspension: false,
            signature: '',
          },
          {
            name: 'Prestige',
            engine: 'v6, petrol',
            interior: 'Seats - leather',
            color: 'white',
            wheelRims: '15 inches',
            wheelType: 'type 3',
            airSuspension: false,
            signature: '',
          },
          {
            name: 'Standart',
            engine: 'v6, petrol',
            interior: 'Seats - leather',
            color: 'white',
            wheelRims: '15 inches',
            wheelType: 'type 3',
            airSuspension: false,
            signature: '',
          },
          {
            name: 'Comfort',
            engine: 'v6, petrol',
            interior: 'Seats - leather',
            color: 'white',
            wheelRims: '15 inches',
            wheelType: 'type 3',
            airSuspension: false,
            signature: '',
          }
        ],
        interiors: [
          'Seats - leather',
          'Steering wheel - sports',
          'Audio - bass boosted',
        ],
        engines: [
          'v6, petrol',
          'v6, diesel',
          'v8, petrol'
        ],
        colors: [
          'white',
          'green',
          'yellow',
          'black'
        ],
        rims: [
          '15 inches',
          '13 inches',
          '11 inches'
        ],
        wheelTypes: [
          'type 1',
          'type 2',
          'type 3'
        ],
        newSpec: {} as newSpecType,
        newConfigs: [] as newConfigsType[]
      }
  ),
  methods: {
    saveSpecification: function () {
      for(const config of this.newConfigs) {
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
      this.newConfigs = [];
      this.newSpec = {
        name: '',
        engine: '',
        interior: '',
        color: '',
        wheelRims: '',
        wheelType: '',
        airSuspension: false,
        signature: '',
      };
    },
    addNewConfig: function () {
      this.newConfigs.push({label: this.newConfigLabel, value: ''});
      this.dialog = false;
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.button-container {
  box-shadow: none !important;
}
.dialog {
  padding: 20px;
}
</style>
