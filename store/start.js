import powerStations from "~/static/powerStations.json";

export const state = () => ({
  state: {
    // 🏭 Power Station
    powerStations: powerStations,

    // 🌬 Wind Turbines
    windTurbines: {
      title: "Windmolens",
      type: "windTurbines",
      amount: 2032,
      production: 1.3, // One 🌬 Wind Turbine in kWh
      new: 0
    },

    // ☀️ Solar panels
    solarPanels: {
      title: "Zonnepanelen",
      type: "solarPanels",
      amount: 2158,
      production: 0.1, // One ☀️ Solar panel in kWh
      new: 0
    },
    // ∞ ⚡️ Desertec
    desertecOn: false,
    desertecShow: false,
    toggleAllShow: false,
    renewableEnergyShow: false,
  },
});
export const getters = {
  // ---------------------------------------------------------------------- //
  // Calculate MAXIMUM ️️⚡ energy production of 🏭 stations power stations
  // ---------------------------------------------------------------------- //
  powerStationEnergyMax: state => {
    const allPowerStations = state.powerStations;
    // Calculate total of all ⚡ power stations power stations
    const calcAllEnergy = Object.keys(allPowerStations).reduce(function (
      previous,
      key
    ) {
      return previous + (Number(allPowerStations[key].power));
    },
      0);
    // Convertcal mW to kW
    const convert = ((calcAllEnergy * 0.51) * 1.1) * 10000000;
    // Increase ⚡ energy production by 50%
    const calcAllEnergyIncreased = convert;
    // ⚡ Set state
    return convert;
  },
  // ---------------------------------------------------------------------- //
  // END Calculate MAXIMUM ️️⚡ energy production of 🏭 stations power stations
  // ---------------------------------------------------------------------- //
  // ---------------------------------------------------------------------- //
  // Filter enabled (CURRENT) ⚡ energy production 🏭 stations power stations
  // ---------------------------------------------------------------------- //
  powerStationEnergyCurrent: state => {
    const allPowerStations = state.powerStations;

    // FILTER
    const result = allPowerStations.filter(item => item.enabled);

    // Calculate total of all ⚡ power stations power stations
    const calcTotalEnableEnergy = Object.keys(result).reduce(function (
      previous,
      key
    ) {
      return previous + (Number(result[key].power) * 0.51);
    },
      0);
    // Convertcal mW to kW
    const convert = calcTotalEnableEnergy * 10000000;
    // ⚡ Set state
    return convert;
  },
  // ---------------------------------------------------------------------- //
  // END Filter enabled (CURRENT) ⚡ energy production 🏭 stations power stations
  // ---------------------------------------------------------------------- //
  // ---------------------------------------------------------------------- //
  // Calculate MAXIMUM ️️🚗 CO₂ production of 🏭 stations power stations
  // ---------------------------------------------------------------------- //
  powerStationCo2Max: state => {
    const allPowerStations = state.powerStations;

    // Calculate total of all 🚗 CO₂ of the power stations
    const calcAllCo2 = Object.keys(allPowerStations).reduce(function (
      previous,
      key
    ) {
      return previous + Number(allPowerStations[key].emissions);
    },
      0);
    // convert 
    const convert = calcAllCo2 * 1000;
    // 🚗 Set state
    return convert;
  },
  // ---------------------------------------------------------------------- //
  // END Calculate MAXIMUM ️️🚗 CO₂ production of 🏭 stations power stations
  // ---------------------------------------------------------------------- //

  // ---------------------------------------------------------------------- //
  // Filter enabled (CURRENT) 🚗 CO₂ production 🏭 stations power stations
  // ---------------------------------------------------------------------- //
  powerStationCo2Current: state => {
    const allPowerStations = state.powerStations;

    // FILTER
    const result = allPowerStations.filter(item => item.enabled);

    // Calculate total of all 🚗 CO₂ of the power stations
    const calcTotalEnableCo2 = Object.keys(result).reduce(function (
      previous,
      key
    ) {
      return previous + Number(result[key].emissions);
    },
      0);
    const convert = calcTotalEnableCo2 * 1000;
    // 🚗 Set state
    return convert;
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
    function map(num, in_min, in_max, out_min, out_max) {
      return (
        ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      );
    }

    var num = getters.powerStationCo2Current;

    return map(num, 0, getters.powerStationCo2Max, 0, 1.2);
  }
  //------------------------------------------------------//
  // END 🎨 Calculate background dark opacity based on powerStationEnergyMax
  //------------------------------------------------------//
};
export const mutations = {
  // 🌬 Update wind turbines
  incrementState: (state, payload) => {
    state[payload.type].amount += payload.amount;
    state[payload.type].new += payload.new;
  },
  decrementState: (state, payload) => {
    state[payload.type].amount -= payload.amount;
  },

  // ---------------------------------------------------------------------- //
  // Toggle a specific fuel category of 🏭 power stations
  // ---------------------------------------------------------------------- //
  togglePowerStationCat: (state, object) => {
    const allPowerStations = state.powerStations;

    if (object.toggle === "off") {
      allPowerStations.forEach(element => {
        if (element.fuel === object.fuel) {
          element.enabled = false;
        }
      });
    } else {
      allPowerStations.forEach(element => {
        if (element.fuel === object.fuel) {
          element.enabled = true;
        }
      });
    }
  },
  //------------------------------------------------------//
  // Set ∞ ⚡️ Desertec
  //------------------------------------------------------//
  desertecUpdate: (state, payload) => {
    state.desertecOn = payload;
  }
  //------------------------------------------------------//
  // END Set ∞ ⚡️ Desertec
  //------------------------------------------------------//
};