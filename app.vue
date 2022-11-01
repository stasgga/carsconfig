<script setup lang="ts">
interface Config {
  name: string;
  brand: string;
  engine: string;
  airSuspension: boolean;
  bodyColor: string;
  typeOfPaint: string;
  wheelSize: number;
  seats: string;
}

const configs = ref<Config[]>([
  {
    name: "Example",
    brand: "N model Т",
    engine: "v6, petrol",
    airSuspension: false,
    bodyColor: "white",
    typeOfPaint: "gloss",
    wheelSize: 15,
    seats: "leather",
  },
]);

function getDefaultConfig(): Config {
  return {
    name: "",
    brand: "",
    engine: "",
    airSuspension: false,
    wheelSize: 1,
    seats: "",
    typeOfPaint: "",
    bodyColor: "",
  };
}

const inputFields = ref<Config>(getDefaultConfig());

function onSubmit() {
  configs.value.push(JSON.parse(JSON.stringify(inputFields.value)));
}
</script>

<template>
  <div class="p-5 flex flex-col gap-5">
    <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
      <ul v-for="config of configs" class="border gap-3 p-5 rounded relative">
        <h2
          class="font-bold absolute bg-white uppercase absolute top-0 left-5 -translate-y-1/2"
        >
          {{ config.name }}
        </h2>
        <li>
          <Item :value="config.brand" label="Brand" />
        </li>
        <li>
          <Item :value="config.engine" label="Engine" />
        </li>
        <li>
          <Item
            :value="config.airSuspension ? 'yes' : 'no'"
            label="Air Suspension"
          />
        </li>
        <li>
          <Item :value="config.bodyColor" label="Body Color" />
        </li>
        <li>
          <Item :value="config.typeOfPaint" label="Type Of Paint" />
        </li>
        <li>
          <Item :value="config.wheelSize" label="Wheel Size (in inches)" />
        </li>
        <li>
          <Item :value="config.seats" label="Seats" />
        </li>
      </ul>
    </div>
    <form
      @submit.prevent="onSubmit"
      class="flex flex-col gap-1 border rounded p-5"
    >
      <label class="flex gap-5 items-center">
        <span class="label font-bold text-gray-600 uppercase"
          >Config Name:
        </span>
        <input
          type="text"
          v-model="inputFields.name"
          placeholder="Config Name"
          class="border-b-2 border-gray-400 px-4 py-2 grow"
          required
        />
      </label>
      <label class="flex gap-5 items-center">
        <span class="label font-bold text-gray-600 uppercase"
          >Brand Name:
        </span>
        <select
          v-model="inputFields.brand"
          class="border-b-2 border-gray-400 px-4 py-2 grow bg-white"
        >
          <option disabled value="">Choose a brand</option>
          <option value="ABC">ABC</option>
          <option value="XYZ">XYZ</option>
        </select>
      </label>
      <label class="flex gap-5 items-center">
        <span class="label font-bold text-gray-600 uppercase">Engine: </span>
        <input
          type="text"
          v-model="inputFields.engine"
          placeholder="Engine"
          class="border-b-2 border-gray-400 px-4 py-2 grow"
          required
        />
      </label>
      <label class="flex gap-5 items-center">
        <span class="label font-bold text-gray-600 uppercase"
          >Body Color:
        </span>
        <input
          type="text"
          v-model="inputFields.bodyColor"
          placeholder="Body Color"
          class="border-b-2 border-gray-400 px-4 py-2 grow"
          required
        />
      </label>
      <label class="flex gap-5 items-center">
        <span class="label font-bold text-gray-600 uppercase"
          >Type of Paint:
        </span>
        <input
          type="text"
          v-model="inputFields.typeOfPaint"
          placeholder="Type Of Paint"
          class="border-b-2 border-gray-400 px-4 py-2 grow"
          required
        />
      </label>
      <label class="flex gap-5 items-center">
        <span class="label font-bold text-gray-600 uppercase"
          >Wheel Size (in inches):
        </span>
        <input
          type="number"
          v-model="inputFields.wheelSize"
          placeholder="3"
          class="border-b-2 border-gray-400 px-4 py-2 grow"
          required
        />
      </label>
      <label class="flex gap-5 items-center">
        <span class="label font-bold text-gray-600 uppercase">Seats: </span>
        <input
          type="text"
          v-model="inputFields.seats"
          placeholder="Seats"
          class="border-b-2 border-gray-400 px-4 py-2 grow"
          required
        />
      </label>
      <div class="actions self-end flex flex-wrap gap-3 mt-5">
        <button
          type="button"
          @click="inputFields = getDefaultConfig()"
          class="bg-red-800 text-white font-bold rounded px-4 py-2 uppercase text-xs self-end"
        >
          Clear Config
        </button>
        <button
          class="bg-purple-800 text-white font-bold rounded px-4 py-2 uppercase text-xs self-end"
        >
          Add Config
        </button>
      </div>
    </form>
  </div>
</template>
