import Vuex from "vuex";
import powerStations from "~/static/powerStations.json";

const createStore = () => {
  return new Vuex.Store({
    state: {
      // 🏭 Power Station
      powerStations: powerStations,

      // 🌬 Wind Turbines
      windTurbines: {
        amount: 2032,
        production: 3
      },

      // ☀️ Solar panels
      solarPanels: {
        amount: 21582,
        production: 1
      }
    },
    getters: {
      // ---------------------------------------------------------------------- //
      // Calculate MAXIMUM ️️⚡ energy production of 🏭 stations power stations
      // ---------------------------------------------------------------------- //
      powerStationEnergyMax: state => {
        const allPowerStations = state.powerStations;
        // Calculate total of all ⚡ power stations power stations
        const calcAllEnergy = Object.keys(allPowerStations).reduce(function(
          previous,
          key
        ) {
          return previous + Number(allPowerStations[key].vermogen);
        },
        0);

        // Increase ⚡ energy production by 10%
        const calcAllEnergyIncreased = (calcAllEnergy / 100) * 320;
        // ⚡ Set state
        return calcAllEnergyIncreased;
      },
      // ---------------------------------------------------------------------- //
      // END Calculate MAXIMUM ️️⚡ energy production of 🏭 stations power stations
      // ---------------------------------------------------------------------- //

      // ---------------------------------------------------------------------- //
      // Calculate MAXIMUM ️️🚗 CO₂ production of 🏭 stations power stations
      // ---------------------------------------------------------------------- //
      powerStationCo2Max: state => {
        const allPowerStations = state.powerStations;

        // Calculate total of all 🚗 CO₂ of the power stations
        const calcAllCo2 = Object.keys(allPowerStations).reduce(function(
          previous,
          key
        ) {
          return previous + Number(allPowerStations[key].uitstoot);
        },
        0);
        // 🚗 Set state
        return calcAllCo2;
      },
      // ---------------------------------------------------------------------- //
      // END Calculate MAXIMUM ️️🚗 CO₂ production of 🏭 stations power stations
      // ---------------------------------------------------------------------- //

      // ---------------------------------------------------------------------- //
      // Filter enabled (CURRENT) ⚡ energy production 🏭 stations power stations
      // ---------------------------------------------------------------------- //
      powerStationEnergyCurrent: state => {
        const allPowerStations = state.powerStations;

        // FILTER
        const result = allPowerStations.filter(item => item.enable);

        // Calculate total of all ⚡ power stations power stations
        const calcTotalEnableEnergy = Object.keys(result).reduce(function(
          previous,
          key
        ) {
          return previous + Number(result[key].vermogen);
        },
        0);
        // ⚡ Set state
        return calcTotalEnableEnergy;
      },
      // ---------------------------------------------------------------------- //
      // END Filter enabled (CURRENT) ⚡ energy production 🏭 stations power stations
      // ---------------------------------------------------------------------- //

      // ---------------------------------------------------------------------- //
      // Filter enabled (CURRENT) 🚗 CO₂ production 🏭 stations power stations
      // ---------------------------------------------------------------------- //
      powerStationCo2Current: state => {
        const allPowerStations = state.powerStations;

        // FILTER
        const result = allPowerStations.filter(item => item.enable);

        // Calculate total of all 🚗 CO₂ of the power stations
        const calcTotalEnableCo2 = Object.keys(result).reduce(function(
          previous,
          key
        ) {
          return previous + Number(result[key].uitstoot);
        },
        0);
        // 🚗 Set state
        return calcTotalEnableCo2;
      },
      // ---------------------------------------------------------------------- //
      // END Filter enabled (CURRENT) 🚗 CO₂ production 🏭 stations power stations
      // ---------------------------------------------------------------------- //

      // ---------------------------------------------------------------------- //
      // 🔢 Calculate the total off all 🌬 wind turbines
      // ---------------------------------------------------------------------- //
      windProductionCurrent: state => {
        const item = state.windTurbines;
        const total = item.amount * item.production;

        return total;
      },
      // ---------------------------------------------------------------------- //
      // END 🔢 Calculate the total off all 🌬 wind turbines
      // ---------------------------------------------------------------------- //

      // ---------------------------------------------------------------------- //
      // 🔢 Calculate the total off all ☀️ solar panales
      // ---------------------------------------------------------------------- //
      solarProductionCurrent: state => {
        const item = state.solarPanels;
        const total = item.amount * item.production;

        return total;
      }
      // ---------------------------------------------------------------------- //
      // END 🔢 Calculate the total off all ☀️ solar panales
      // ---------------------------------------------------------------------- //

      // ---------------------------------------------------------------------- //
      // 🔢 Calculate & combine everything
      // ---------------------------------------------------------------------- //
      // COMBINE_ALL_MAX: state => {
      //   // ⚡️ Energy Max
      //   const arrayEnergyAllMax = [
      //     state.powerStationsEnergyMax,
      //     state.windTurbinesEnergyMax,
      //     state.solarPanelsEnergyMax
      //   ].reduce((a, b) => a + b, 0);

      //   state.energyMax.amount = arrayEnergyAllMax;

      //   // ⚡️ Energy Current
      //   const arrayEnergyAllCurrent = [
      //     state.powerStationsEnergyCurrent,
      //     state.windTurbinesEnergyMax,
      //     state.solarPanelsEnergyMax
      //   ].reduce((a, b) => a + b, 0);

      //   state.energyCurrent = arrayEnergyAllCurrent;

      //   // 🚗 CO₂ Max
      //   const arrayCo2AllMax = [state.powerStationsCo2Max].reduce(
      //     (a, b) => a + b,
      //     0
      //   );

      //   state.co2Max.amount = arrayCo2AllMax;

      //   // 🚗 CO₂ Current
      //   const arrayCo2AllCurrent = [state.powerStationsCo2Current].reduce(
      //     (a, b) => a + b,
      //     0
      //   );

      //   state.co2Current = arrayCo2AllCurrent;
      // }
    },
    mutations: {
      // 🌬 Update wind turbines
      incrementWindTurbines: (state, payload) => {
        state.windTurbines.amount += payload;
      },
      decrementWindTurbines: (state, payload) => {
        state.windTurbines.amount -= payload;
      },
      // ☀️ solar panels
      incrementSolarPanels: (state, payload) => {
        state.solarPanels.amount += payload;
      },
      decrementSolarPanels: (state, payload) => {
        state.solarPanels.amount -= payload;
      }
      // ---------------------------------------------------------------------- //
      // END 🔢 Calculate & combine everything
      // ---------------------------------------------------------------------- //
    },
    actions: {
      // ---------------------------------------------------------------------- //
      // Functions that call all above and calculates a totoal
      // This function is ran on create() in start/index.vue
      // ---------------------------------------------------------------------- //
      calcAllTotal: ({ dispatch, commit }) => {
        // commit("CALC_ALL_POWER_STATIONS");
        // commit("CALC_ENABLED_POWER_STATION");
        // commit("CALC_WIND_TURBINES");
        // commit("CALC_SOLAR_PANELS");
        // // 🔢 After everything is calculated add them all up
        // commit("COMBINE_ALL_MAX");
      }
    }
  });
};

export default createStore;
