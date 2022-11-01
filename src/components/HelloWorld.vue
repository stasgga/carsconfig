<template>
  <div class="hello">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <v-card class="dialog">
        <v-text-field
            v-model="new_config_label"
            label="Name of the new configuration"
            required
        ></v-text-field>
        <v-btn @click="addNewConfig">
          Ok
        </v-btn>
      </v-card>
    </v-dialog>
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
                v-model="new_spec.name"
                label="Name of specification"
                required
            ></v-text-field>
            <v-select
                v-model="new_spec.engine"
                :items="engines"
                :rules="[v => !!v || 'Item is required']"
                label="Engine"
                required
            ></v-select>
            <v-select
                v-model="new_spec.interior"
                :items="interiors"
                :rules="[v => !!v || 'Item is required']"
                label="Interior materials"
                required
            ></v-select>
            <v-select
                v-model="new_spec.color"
                :items="colors"
                :rules="[v => !!v || 'Item is required']"
                label="Color"
                required
            ></v-select>
            <v-select
                v-model="new_spec.wheel_rims"
                :items="rims"
                :rules="[v => !!v || 'Item is required']"
                label="Wheel rims"
                required
            ></v-select>
            <v-select
                v-model="new_spec.wheel_type"
                :items="wheel_types"
                :rules="[v => !!v || 'Item is required']"
                label="Wheel type"
                required
            ></v-select>
            <v-checkbox
                v-model="new_spec.air_suspension"
                label="Air suspension"
                required
            ></v-checkbox>
            <v-text-field
                v-model="new_spec.signature"
                label="Signature on hood"
                required
            ></v-text-field>
            <v-text-field
                v-for="(config, i) in new_configs"
                v-model="config.value"
                :key="i"
                :label="config.label"
                required
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

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => (
      {
        dialog: false,
        new_config_label: '',
        specifications: [
          {
            name: 'Sport',
            engine: 'v6, petrol',
            interior: 'Seats - leather',
            color: 'white',
            wheel_rims: '15 inches',
            wheel_type: 'type 3',
            air_suspension: false,
            signature: '',
          },
          {
            name: 'Prestige',
            engine: 'v6, petrol',
            interior: 'Seats - leather',
            color: 'white',
            wheel_rims: '15 inches',
            wheel_type: 'type 3',
            air_suspension: false,
            signature: '',
          },
          {
            name: 'Standart',
            engine: 'v6, petrol',
            interior: 'Seats - leather',
            color: 'white',
            wheel_rims: '15 inches',
            wheel_type: 'type 3',
            air_suspension: false,
            signature: '',
          },
          {
            name: 'Comfort',
            engine: 'v6, petrol',
            interior: 'Seats - leather',
            color: 'white',
            wheel_rims: '15 inches',
            wheel_type: 'type 3',
            air_suspension: false,
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
        wheel_types: [
          'type 1',
          'type 2',
          'type 3'
        ],
        new_spec: {
          name: '',
          engine: '',
          interior: '',
          color: '',
          wheel_rims: '',
          wheel_type: '',
          air_suspension: false,
          signature: '',
        },
        new_configs: []
      }
  ),
  methods: {
    saveSpecification: function () {
      for(let config of this.new_configs) {
        this.new_spec[config.label] = config.value;
      }
      this.specifications.push(this.new_spec);
      this.new_configs = [];
      this.new_spec = {
        name: '',
        engine: '',
        interior: '',
        color: '',
        wheel_rims: '',
        wheel_type: '',
        air_suspension: false,
        signature: '',
      };
    },
    addNewConfig: function () {
      this.new_configs.push({label: this.new_config_label, value: ''});
      this.dialog = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
