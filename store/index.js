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
        production: 1.3 // One 🌬 Wind Turbine in kWh
      },

      // ☀️ Solar panels
      solarPanels: {
        amount: 21582,
        production: 0.0192 // One ☀️ Solar panel in kWh
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
        // Convertcal mW to kW
        // const convert = calcAllEnergy * 1000;
        // Increase ⚡ energy production by 50%
        const calcAllEnergyIncreased = (calcAllEnergy / 100) * 105 + 3000;
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
        // Convertcal mW to kW
        // const convert = calcTotalEnableEnergy * 1000;
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
      },
      // ---------------------------------------------------------------------- //
      // END 🔢 Calculate the total off all ☀️ solar panales
      // ---------------------------------------------------------------------- //

      // ---------------------------------------------------------------------- //
      // 🔢 Calculate & combine everything
      // ---------------------------------------------------------------------- //
      energyProductionCalcAllCurrent: (state, getters) => {
        const arrayEnergyAllMax = [
          getters.powerStationEnergyCurrent,
          getters.windProductionCurrent,
          getters.solarProductionCurrent
        ].reduce((a, b) => a + b, 0);

        return Math.floor(arrayEnergyAllMax);
      },
      // ---------------------------------------------------------------------- //
      // END 🔢  Calculate & combine everything
      // ---------------------------------------------------------------------- //

      //------------------------------------------------------//
      // 🎨 Calculate background dark opacity based on powerStationEnergyMax
      //------------------------------------------------------//
      backgroundOpacity: (state, getters) => {
        getters.powerStationEnergyMax;

        function map(num, in_min, in_max, out_min, out_max) {
          return (
            ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
          );
        }

        var num = getters.powerStationEnergyCurrent;

        return map(num, 0, getters.powerStationEnergyMax, 0, 1.2);
      }
      //------------------------------------------------------//
      // END 🎨 Calculate background dark opacity based on powerStationEnergyMax
      //------------------------------------------------------//
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
      },
      // ---------------------------------------------------------------------- //
      // Toggle a specific fuel category of 🏭 power stations
      // ---------------------------------------------------------------------- //
      togglePowerStationCat: (state, object) => {
        const allPowerStations = state.powerStations;

        console.log(object.fuel);
        console.log(object.toggle);

        if (object.toggle === "off") {
          allPowerStations.forEach(element => {
            if (element.brandstof === object.fuel) {
              element.enable = false;
            }
          });
        } else {
          allPowerStations.forEach(element => {
            if (element.brandstof === object.fuel) {
              element.enable = true;
            }
          });
        }
      }
    },
    actions: {
      // ---------------------------------------------------------------------- //
      // Functions that call all above and calculates a totoal
      // This function is ran on create() in start/index.vue
      // ---------------------------------------------------------------------- //
      // calcAllTotal: ({ dispatch, commit }) => {
      //   // commit("CALC_ALL_POWER_STATIONS");
      //   // commit("CALC_ENABLED_POWER_STATION");
      //   // commit("CALC_WIND_TURBINES");
      //   // commit("CALC_SOLAR_PANELS");
      //   // // 🔢 After everything is calculated add them all up
      //   // commit("COMBINE_ALL_MAX");
      // }
    }
  });
};

export default createStore;
