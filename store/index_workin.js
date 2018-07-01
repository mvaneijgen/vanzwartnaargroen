import Vuex from "vuex";
import powerStations from "~/static/powerStations.json";

const createStore = () => {
  return new Vuex.Store({
    state: {
      // ⚡️ Energy
      energyMax: {
        name: "Energieopwekking",
        amount: 0,
        suffix: "kWh"
      },
      energyCurrent: 0,

      // 🚗 CO₂
      co2Max: {
        name: "Uitstoot",
        amount: 0,
        suffix: "CO<sub>2</sub>"
      },
      co2Current: 0,

      // 🏭 Power Station
      powerStations: powerStations,
      powerStationsEnergyMax: 0,
      powerStationsEnergyCurrent: 0,
      powerStationsCo2Max: 0,
      powerStationsCo2Current: 0,

      // 🌬 Wind Turbines
      windTurbines: {
        amount: 2032,
        production: 3
      },
      windTurbinesEnergyMax: 0,

      // ☀️ Solar panels
      solarPanels: {
        amount: 21582,
        production: 1
      },
      solarPanelsEnergyMax: 0
    },
    getters: {
      // increment(state) {
      //   state.counter++;
      // },
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
    },
    actions: {
      // ---------------------------------------------------------------------- //
      // Calculate MAXIMUM total of all ️️⚡ power stations power stations
      // ---------------------------------------------------------------------- //
      calcAllPowerStation: context => {
        const allPowerStations = context.state.powerStations;
        // Calculate total of all ⚡ power stations power stations
        const calcAllEnergy = Object.keys(allPowerStations).reduce(function(
          previous,
          key
        ) {
          return previous + Number(allPowerStations[key].vermogen);
        },
        0);

        // Increase ⚡ energy production by 10%
        const calcAllEnergyIncreased = (calcAllEnergy / 100) * 110;
        console.log(calcAllEnergy);
        console.log(calcAllEnergyIncreased);
        // ⚡ Set state
        context.state.powerStationsEnergyMax = calcAllEnergyIncreased;

        // Calculate total of all 🚗 CO₂ of the power stations
        const calcAllCo2 = Object.keys(allPowerStations).reduce(function(
          previous,
          key
        ) {
          return previous + Number(allPowerStations[key].uitstoot);
        },
        0);
        // 🚗 Set state
        context.state.powerStationsCo2Max = calcAllCo2;
      },
      // ---------------------------------------------------------------------- //
      // END Calculate MAXIMUM total of all ️️⚡ power stations power stations
      // ---------------------------------------------------------------------- //

      // ---------------------------------------------------------------------- //
      // Filter enabled (CURRENT) ⚡ power stations & 🔢 calculate there total
      // ---------------------------------------------------------------------- //
      calcEnabledPowerStation: context => {
        const allPowerStations = context.state.powerStations;

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
        context.state.powerStationsEnergyCurrent = calcTotalEnableEnergy;

        // Calculate total of all 🚗 CO₂ of the power stations
        const calcTotalEnableCo2 = Object.keys(result).reduce(function(
          previous,
          key
        ) {
          return previous + Number(result[key].uitstoot);
        },
        0);
        // 🚗 Set state
        context.state.powerStationsCo2Current = calcTotalEnableCo2;
      },
      // ---------------------------------------------------------------------- //
      // END Filter enabled (CURRENT) ⚡ power stations & 🔢 calculate there total
      // ---------------------------------------------------------------------- //

      // ---------------------------------------------------------------------- //
      // 🔢 Calculate the total off all 🌬 wind turbines
      // ---------------------------------------------------------------------- //
      calcWindTurbines: context => {
        const allWindTurbines = context.state.windTurbines;
        const totalWindProduction =
          allWindTurbines.amount * allWindTurbines.production;

        context.state.solarPanelsEnergyMax = totalWindProduction;
      },
      // ---------------------------------------------------------------------- //
      // END 🔢 Calculate the total off all 🌬 wind turbines
      // ---------------------------------------------------------------------- //

      // ---------------------------------------------------------------------- //
      // 🔢 Calculate the total off all ☀️ solar panales
      // ---------------------------------------------------------------------- //
      calcSolarPanels: context => {
        const allWindTurbines = context.state.windTurbines;
        const totalWindProduction =
          allWindTurbines.amount * allWindTurbines.production;

        context.state.solarPanelsEnergyMax = totalWindProduction;
      },
      // ---------------------------------------------------------------------- //
      // END 🔢 Calculate the total off all ☀️ solar panales
      // ---------------------------------------------------------------------- //

      // ---------------------------------------------------------------------- //
      // 🔢 Calculate & combine everything
      // ---------------------------------------------------------------------- //
      combineAllMax: context => {
        // ⚡️ Energy Max
        const arrayEnergyAllMax = [
          context.state.powerStationsEnergyMax,
          context.state.windTurbinesEnergyMax,
          context.state.solarPanelsEnergyMax
        ].reduce((a, b) => a + b, 0);

        context.state.energyMax.amount = arrayEnergyAllMax;

        // ⚡️ Energy Current
        const arrayEnergyAllCurrent = [
          context.state.powerStationsEnergyCurrent,
          context.state.windTurbinesEnergyMax,
          context.state.solarPanelsEnergyMax
        ].reduce((a, b) => a + b, 0);

        context.state.energyCurrent = arrayEnergyAllCurrent;

        // 🚗 CO₂ Max
        const arrayCo2AllMax = [context.state.powerStationsCo2Max].reduce(
          (a, b) => a + b,
          0
        );

        context.state.co2Max.amount = arrayCo2AllMax;

        // 🚗 CO₂ Current
        const arrayCo2AllCurrent = [
          context.state.powerStationsCo2Current
        ].reduce((a, b) => a + b, 0);

        context.state.co2Current = arrayCo2AllCurrent;
      },
      // ---------------------------------------------------------------------- //
      // END 🔢 Calculate & combine everything
      // ---------------------------------------------------------------------- //

      // ---------------------------------------------------------------------- //
      // Functions that call all above and calculates a totoal
      // This function is ran on create() in start/index.vue
      // ---------------------------------------------------------------------- //
      calcAllTotal: ({ dispatch, commit }) => {
        dispatch("calcAllPowerStation");
        dispatch("calcEnabledPowerStation");
        dispatch("calcWindTurbines");
        dispatch("calcSolarPanels");

        // 🔢 After everything is calculated add them all up
        dispatch("combineAllMax");
      }
    }
  });
};

export default createStore;
