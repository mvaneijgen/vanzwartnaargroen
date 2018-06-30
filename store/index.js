import Vuex from "vuex";
import powerStations from "~/static/powerStations.json";

const createStore = () => {
  return new Vuex.Store({
    state: {
      powerStations: powerStations,

      energyMax: {
        name: "Energieopwekking",
        amount: 0,
        suffix: "kWh"
      },
      energyCurrent: 0,
      co2Max: {
        name: "Uitstoot",
        amount: 0,
        suffix: "CO<sub>2</sub>"
      },
      co2Current: 0,
      windTurbines: {
        amount: 2032,
        energyProduction: 3000
      },
      solarPanels: {
        amount: 4500000,
        energyProduction: 1
      }
    },
    mutations: {
      // increment(state) {
      //   state.counter++;
      // },
    },
    actions: {
      // Calculate total of all ️️⚡ power stations power stations
      calcAllPowerStation: context => {
        const allPowerStations = context.state.powerStations;
        // Calculate total of all ⚡ power stations power stations
        const calcAll = Object.keys(allPowerStations).reduce(function(
          previous,
          key
        ) {
          return previous + Number(allPowerStations[key].uitstoot);
        },
        0);
        context.state.energyMax.amount = calcAll;
      },
      // Filter enabled ⚡ power stations  & 🔢 calculate there total
      calcEnabledPowerStation: context => {
        const allPowerStations = context.state.powerStations;
        const result = allPowerStations.filter(item => item.enable);

        const calcTotalEnable = Object.keys(result).reduce(function(
          previous,
          key
        ) {
          return previous + Number(result[key].uitstoot);
        },
        0);

        context.state.energyCurrent = calcTotalEnable;
      },
      // 🔢 Calculate the total off all 🌬 wind turbines
      calcWindTurbines: context => {},
      // 🔢 Calculate the total off all ☀️ solar panales
      calcSolarPanels: context => {},
      calcEnabledTotal: context => {},
      calcAllTotal: ({ dispatch, commit }) => {
        // console.log(commit);
        dispatch("calcAllPowerStation");
        dispatch("calcEnabledPowerStation");
        dispatch("calcSolarPanels");
        dispatch("calcEnabledTotal");
      }
    }
  });
};

export default createStore;
